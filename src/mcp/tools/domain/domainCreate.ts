import { z } from "zod";
import apiClient from "../../../utils/apiClient.js";
import { createTool } from "../toolFactory.js";
import { ResponseFormatter } from "../../../utils/responseFormatter.js";

export const domainCreate = createTool({
  name: "domain-create",
  description:
    "Creates a new domain configuration in Dokploy. Domains can be configured for applications, compose services, or preview deployments with SSL/TLS certificate options.",
  schema: z.object({
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
      .describe(
        "URL path for the domain (e.g., /api). Used for path-based routing."
      ),
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
      .describe("Whether to enable HTTPS for this domain. Defaults to false."),
    applicationId: z
      .string()
      .nullable()
      .optional()
      .describe(
        "The ID of the application to associate this domain with. Required when domainType is 'application'."
      ),
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
    composeId: z
      .string()
      .nullable()
      .optional()
      .describe(
        "The ID of the compose stack to associate this domain with. Required when domainType is 'compose'."
      ),
    serviceName: z
      .string()
      .nullable()
      .optional()
      .describe(
        "The service name within the compose stack. Used with composeId to route to a specific service."
      ),
    domainType: z
      .enum(["compose", "application", "preview"])
      .nullable()
      .optional()
      .describe(
        "Domain target type: 'application' for apps, 'compose' for compose services, 'preview' for preview deployments."
      ),
    previewDeploymentId: z
      .string()
      .nullable()
      .optional()
      .describe(
        "The ID of the preview deployment. Required when domainType is 'preview'."
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
        "Whether to strip the path prefix when forwarding requests to the backend. Defaults to false."
      ),
  }),
  annotations: {
    title: "Create Domain",
    destructiveHint: false,
    idempotentHint: false,
    openWorldHint: true,
  },
  handler: async (input) => {
    const response = await apiClient.post("/domain.create", input);

    return ResponseFormatter.success(
      `Domain "${input.host}" created successfully with ${input.certificateType} certificate type`,
      response.data
    );
  },
});
