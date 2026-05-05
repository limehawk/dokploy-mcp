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

function redactSecrets(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(redactSecrets);
  }
  if (value !== null && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      if (SECRET_FIELDS.has(k.toLowerCase()) && v !== null && v !== undefined) {
        out[k] = REDACTED;
      } else {
        out[k] = redactSecrets(v);
      }
    }
    return out;
  }
  return value;
}

function shouldRedact(): boolean {
  return process.env.DOKPLOY_MCP_INCLUDE_SECRETS !== "1";
}

export class ResponseFormatter {
  static success(message: string, data?: unknown): FormattedResponse {
    const safeData =
      data && typeof data === "object" && data !== null
        ? shouldRedact()
          ? redactSecrets(data)
          : data
        : undefined;

    const responseData = {
      success: true,
      message,
      ...(safeData !== undefined ? { data: safeData } : {}),
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
