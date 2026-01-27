import { z } from "zod";
import apiClient from "../../../utils/apiClient.js";
import { createTool } from "../toolFactory.js";
import { ResponseFormatter } from "../../../utils/responseFormatter.js";

export const domainValidateDomain = createTool({
  name: "domain-validateDomain",
  description:
    "Validates if a domain is correctly configured, optionally against a specific server IP.",
  schema: z.object({
    domain: z
      .string()
      .describe("The domain name to validate (e.g., example.com or sub.example.com). Required."),
    serverIp: z
      .string()
      .optional()
      .describe("Server IP address to validate DNS resolution against. Checks A record if provided."),
  }),
  annotations: {
    title: "Validate Domain",
    destructiveHint: false,
    idempotentHint: true,
    openWorldHint: false,
  },
  handler: async (input) => {
    const response = await apiClient.post("/domain.validateDomain", input);

    return ResponseFormatter.success(
      `Validation result for domain "${input.domain}":`,
      response.data
    );
  },
});
