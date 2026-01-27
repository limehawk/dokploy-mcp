import { z } from "zod";
import apiClient from "../../../utils/apiClient.js";
import { ResponseFormatter } from "../../../utils/responseFormatter.js";
import { createTool } from "../toolFactory.js";

export const applicationRedeploy = createTool({
  name: "application-redeploy",
  description:
    "Redeploys an application in Dokploy. Rebuilds and redeploys the application from its configured source.",
  schema: z.object({
    applicationId: z
      .string()
      .min(1)
      .describe(
        "The unique identifier of the application to redeploy. Must be at least 1 character."
      ),
    title: z
      .string()
      .optional()
      .describe("Optional title for the redeployment, shown in deployment history."),
    description: z
      .string()
      .optional()
      .describe(
        "Optional description for the redeployment, shown in deployment history."
      ),
  }),
  annotations: {
    title: "Redeploy Application",
    destructiveHint: false,
    idempotentHint: false,
    openWorldHint: true,
  },
  handler: async (input) => {
    const response = await apiClient.post("/application.redeploy", input);

    return ResponseFormatter.success(
      `Application "${input.applicationId}" redeployment started successfully`,
      response.data
    );
  },
});
