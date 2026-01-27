import { z } from "zod";
import apiClient from "../../../utils/apiClient.js";
import { createTool } from "../toolFactory.js";
import { ResponseFormatter } from "../../../utils/responseFormatter.js";

export const applicationCreate = createTool({
  name: "application-create",
  description: "Creates a new application in Dokploy.",
  schema: z.object({
    name: z
      .string()
      .min(1)
      .describe("The name of the application. Must be at least 1 character."),
    appName: z
      .string()
      .optional()
      .describe(
        "The app name for the application. Auto-generated if not provided."
      ),
    description: z
      .string()
      .nullable()
      .optional()
      .describe("An optional description for the application."),
    environmentId: z
      .string()
      .describe(
        "The ID of the environment where the application will be created."
      ),
    serverId: z
      .string()
      .nullable()
      .optional()
      .describe(
        "The ID of the server where the application will be deployed. Uses default server if not specified."
      ),
  }),
  annotations: {
    title: "Create Application",
    destructiveHint: false,
    idempotentHint: false,
    openWorldHint: true,
  },
  handler: async (input) => {
    const response = await apiClient.post("/application.create", input);

    return ResponseFormatter.success(
      `Application "${input.name}" created successfully in environment "${input.environmentId}"`,
      response.data
    );
  },
});
