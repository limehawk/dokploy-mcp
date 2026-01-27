import { z } from "zod";
import apiClient from "../../../utils/apiClient.js";
import { createTool } from "../toolFactory.js";
import { ResponseFormatter } from "../../../utils/responseFormatter.js";

export const domainUpdate = createTool({
  name: "domain-update",
  description:
    "Updates an existing domain configuration in Dokploy. Allows modifying domain settings including host, SSL configuration, routing options, and service associations.",
  schema: z.object({
    domainId: z.string().describe("The ID of the domain to update. Required."),
    host: z
      .string()
      .min(1)
      .describe(
        "The domain host (e.g., example.com or subdomain.example.com). Required."
      ),
    path: z
      .string()
      .min(1)
      .nullable()
      .optional()
      .describe("URL path for the domain (e.g., /api). Used for path-based routing."),
    port: z
      .number()
      .min(1)
      .max(65535)
      .nullable()
      .optional()
      .describe(
        "The port number for the service (1-65535). Defaults to service port if not specified."
      ),
    https: z
      .boolean()
      .optional()
      .describe("Whether to enable HTTPS for this domain."),
    certificateType: z
      .enum(["letsencrypt", "none", "custom"])
      .optional()
      .describe(
        "SSL certificate type: 'letsencrypt' for automatic Let's Encrypt, 'none' for no SSL, 'custom' for custom certificates."
      ),
    customCertResolver: z
      .string()
      .nullable()
      .optional()
      .describe(
        "Custom certificate resolver name in Traefik. Required when certificateType is 'custom'."
      ),
    serviceName: z
      .string()
      .nullable()
      .optional()
      .describe(
        "The service name within the compose stack. Used with compose domains."
      ),
    domainType: z
      .enum(["compose", "application", "preview"])
      .nullable()
      .optional()
      .describe(
        "Domain target type: 'application' for apps, 'compose' for compose services, 'preview' for preview deployments."
      ),
    internalPath: z
      .string()
      .nullable()
      .optional()
      .describe(
        "Internal path for routing within the container/service. Used for request rewriting."
      ),
    stripPath: z
      .boolean()
      .optional()
      .describe(
        "Whether to strip the path prefix when forwarding requests to the backend."
      ),
  }),
  annotations: {
    title: "Update Domain",
    destructiveHint: false,
    idempotentHint: true,
    openWorldHint: false,
  },
  handler: async (input) => {
    const response = await apiClient.post("/domain.update", input);

    return ResponseFormatter.success(
      `Domain "${input.host}" updated successfully`,
      response.data
    );
  },
});
