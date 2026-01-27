import { z } from "zod";
import apiClient from "../../../utils/apiClient.js";
import { ResponseFormatter } from "../../../utils/responseFormatter.js";
import { createTool } from "../toolFactory.js";

export const applicationDeploy = createTool({
  name: "application-deploy",
  description:
    "Deploys an application in Dokploy. Builds and deploys the application from its configured source.",
  schema: z.object({
    applicationId: z
      .string()
      .min(1)
      .describe(
        "The unique identifier of the application to deploy. Must be at least 1 character."
      ),
    title: z
      .string()
      .optional()
      .describe("Optional title for the deployment, shown in deployment history."),
    description: z
      .string()
      .optional()
      .describe(
        "Optional description for the deployment, shown in deployment history."
      ),
  }),
  annotations: {
    title: "Deploy Application",
    destructiveHint: false,
    idempotentHint: false,
    openWorldHint: true,
  },
  handler: async (input) => {
    const response = await apiClient.post("/application.deploy", input);

    return ResponseFormatter.success(
      `Application "${input.applicationId}" deployment started successfully`,
      response.data
    );
  },
});
