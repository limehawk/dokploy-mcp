import { z } from "zod";
import apiClient from "../../../utils/apiClient.js";
import { createTool } from "../toolFactory.js";
import { ResponseFormatter } from "../../../utils/responseFormatter.js";

export const projectCreate = createTool({
  name: "project-create",
  description: "Creates a new project in Dokploy.",
  schema: z.object({
    name: z.string().min(1).describe("The name of the project. Required."),
    description: z
      .string()
      .nullable()
      .optional()
      .describe("An optional description for the project. Can be null."),
    env: z
      .string()
      .optional()
      .describe("Optional environment variables for the project in KEY=value format, one per line."),
  }),
  annotations: {
    title: "Create Project",
    destructiveHint: false,
    idempotentHint: false,
    openWorldHint: true,
  },
  handler: async (input) => {
    const response = await apiClient.post("/project.create", input);

    return ResponseFormatter.success(
      `Project "${input.name}" created successfully`,
      response.data
    );
  },
});
