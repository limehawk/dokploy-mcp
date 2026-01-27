import { z } from "zod";
import apiClient from "../../../utils/apiClient.js";
import { createTool } from "../toolFactory.js";
import { ResponseFormatter } from "../../../utils/responseFormatter.js";

export const domainOne = createTool({
  name: "domain-one",
  description:
    "Retrieves a specific domain configuration by its ID in Dokploy.",
  schema: z.object({
    domainId: z
      .string()
      .describe("The unique identifier of the domain to retrieve. Required."),
  }),
  annotations: {
    title: "Get Domain by ID",
    destructiveHint: false,
    idempotentHint: true,
    openWorldHint: false,
  },
  handler: async (input) => {
    const response = await apiClient.get("/domain.one", {
      params: { domainId: input.domainId },
    });

    return ResponseFormatter.success(
      `Successfully retrieved domain ${input.domainId}`,
      response.data
    );
  },
});
