import { z } from "zod";
import apiClient from "../../../utils/apiClient.js";
import { createTool } from "../toolFactory.js";
import { ResponseFormatter } from "../../../utils/responseFormatter.js";

export const projectUpdate = createTool({
  name: "project-update",
  description:
    "Updates an existing project in Dokploy. Only provide the fields you want to update. System fields like createdAt and organizationId are typically not modified.",
  schema: z.object({
    projectId: z.string().min(1).describe("The unique identifier of the project to update. Required."),
    name: z.string().min(1).optional().describe("The new name of the project. Optional."),
    description: z
      .string()
      .nullable()
      .optional()
      .describe("The new description for the project. Can be null to remove. Optional."),
    createdAt: z
      .string()
      .optional()
      .describe("The creation timestamp. Usually not modified. Optional."),
    organizationId: z
      .string()
      .optional()
      .describe("The organization ID of the project. Usually not modified. Optional."),
    env: z
      .string()
      .optional()
      .describe("Environment variables for the project in KEY=value format, one per line. Optional."),
  }),
  annotations: {
    title: "Update Project",
    destructiveHint: true,
    idempotentHint: false,
    openWorldHint: true,
  },
  handler: async (input) => {
    const response = await apiClient.post("/project.update", input);

    return ResponseFormatter.success(
      `Project "${input.projectId}" updated successfully`,
      response.data
    );
  },
});
