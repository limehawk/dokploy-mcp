export interface FormattedResponse {
  [key: string]: unknown;
  content: { type: "text"; text: string }[];
  isError?: boolean;
}

// Field-name denylist for upstream Dokploy API responses. Matched
// case-insensitively against exact keys only — `apiKeyId`, `secretId`,
// `sshKeyId`, etc. are intentionally NOT matched.
const SECRET_FIELDS: ReadonlySet<string> = new Set(
  [
    "githubPrivateKey",
    "githubWebhookSecret",
    "githubClientSecret",
    "gitlabClientSecret",
    "gitlabAccessToken",
    "bitbucketAppPassword",
    "password",
    "databasePassword",
    "databaseRootPassword",
    "accessToken",
    "appToken",
    "clientSecret",
    "secret",
    "privateKey",
    "sshPrivateKey",
    "encPrivateKey",
    "privateKeyPass",
    "encPrivateKeyPass",
    "sshKey",
    "secretAccessKey",
    "apiKey",
    "buildSecrets",
    "previewBuildSecrets",
  ].map((s) => s.toLowerCase())
);

const REDACTED = "[REDACTED]";
const ENV_OVERRIDE = "DOKPLOY_MCP_INCLUDE_SECRETS";

interface RedactionResult {
  value: unknown;
  paths: string[];
}

function redactSecrets(value: unknown, path = ""): RedactionResult {
  if (Array.isArray(value)) {
    const paths: string[] = [];
    const out = value.map((v, i) => {
      const r = redactSecrets(v, `${path}[${i}]`);
      paths.push(...r.paths);
      return r.value;
    });
    return { value: out, paths };
  }
  if (value !== null && typeof value === "object") {
    const paths: string[] = [];
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      const here = `${path}.${k}`;
      if (SECRET_FIELDS.has(k.toLowerCase()) && v !== null && v !== undefined) {
        out[k] = REDACTED;
        paths.push(here);
      } else {
        const r = redactSecrets(v, here);
        out[k] = r.value;
        paths.push(...r.paths);
      }
    }
    return { value: out, paths };
  }
  return { value, paths: [] };
}

function operatorAllowsExposure(): boolean {
  return process.env[ENV_OVERRIDE] === "1";
}

export class ResponseFormatter {
  /**
   * Format a successful Dokploy API response.
   *
   * @param message  Tool-level message
   * @param data     Raw upstream response
   * @param opts.includeSecrets  Caller is requesting raw secrets. Will be
   *   refused unless the operator has set DOKPLOY_MCP_INCLUDE_SECRETS=1.
   */
  static success(
    message: string,
    data?: unknown,
    opts: { includeSecrets?: boolean } = {}
  ): FormattedResponse {
    const isObject = data && typeof data === "object" && data !== null;

    // Caller asked for raw secrets but operator hasn't permitted it →
    // refuse the entire call with an LLM-aimed warning. Do NOT return data.
    if (opts.includeSecrets && !operatorAllowsExposure()) {
      return ResponseFormatter.error(
        "Refused: includeSecrets=true would expose plaintext credentials",
        [
          `Setting includeSecrets=true on this tool would surface plaintext`,
          `credentials (passwords, private keys, OAuth secrets, S3 keys) to`,
          `your conversation transcript, prompt cache, and any logs that`,
          `capture tool output. The MCP refuses this by default.`,
          ``,
          `To actually retrieve raw values, the operator (the human running`,
          `this MCP server) must set ${ENV_OVERRIDE}=1 in the server's`,
          `environment and restart. There is no way for the LLM to flip this.`,
          ``,
          `INSTRUCTION TO THE LLM CALLER: Stop. Do NOT retry without the flag.`,
          `Do NOT instruct the user to set ${ENV_OVERRIDE}=1 unless they have`,
          `already, in this conversation, explicitly asked you to fetch raw`,
          `credentials. The default redacted response is almost always what`,
          `you actually want — the field names tell you the secret exists,`,
          `which is enough to answer most questions. If you only need to`,
          `confirm presence/absence, retry without includeSecrets.`,
        ].join("\n")
      );
    }

    let safeData: unknown = isObject ? data : undefined;
    let security: Record<string, unknown> | undefined;

    if (isObject) {
      const { value, paths } = redactSecrets(data);
      if (opts.includeSecrets && operatorAllowsExposure()) {
        // Both keys turned: return raw, but loudly.
        safeData = data;
        if (paths.length > 0) {
          security = {
            exposed: paths,
            warning:
              "⚠️ Plaintext secrets included in this response. Treat as sensitive: do not paste into chat, tickets, or shared logs.",
          };
        }
      } else {
        // Default path: redact and surface what was hidden.
        safeData = value;
        if (paths.length > 0) {
          security = {
            redacted: paths,
            note: `${paths.length} secret field(s) redacted. Pass includeSecrets=true to request raw values (will be refused unless operator sets ${ENV_OVERRIDE}=1).`,
          };
        }
      }
    }

    const responseData = {
      success: true,
      message,
      ...(safeData !== undefined ? { data: safeData } : {}),
      ...(security ? { _security: security } : {}),
    };

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(responseData, null, 2),
        },
      ],
    };
  }

  static error(message: string, details?: string): FormattedResponse {
    const errorData = {
      success: false,
      error: message,
      ...(details && { details }),
    };

    return {
      isError: true,
      content: [
        {
          type: "text",
          text: JSON.stringify(errorData, null, 2),
        },
      ],
    };
  }
}
