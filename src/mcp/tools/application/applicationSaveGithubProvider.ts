import { z } from "zod";
import apiClient from "../../../utils/apiClient.js";
import { ResponseFormatter } from "../../../utils/responseFormatter.js";
import { createTool } from "../toolFactory.js";

export const applicationSaveGithubProvider = createTool({
  name: "application-saveGithubProvider",
  description:
    "Saves GitHub provider configuration for an application in Dokploy.",
  schema: z.object({
    applicationId: z
      .string()
      .describe("The ID of the application to save GitHub provider for."),
    repository: z
      .string()
      .nullable()
      .optional()
      .describe("The GitHub repository name."),
    branch: z
      .string()
      .nullable()
      .optional()
      .describe("The branch to use from the repository (e.g., 'main', 'develop')."),
    owner: z
      .string()
      .nullable()
      .describe("The GitHub username or organization that owns the repository."),
    buildPath: z
      .string()
      .nullable()
      .optional()
      .describe(
        "The path within the repository to build from (e.g., '/' for root, '/app' for subdirectory)."
      ),
    githubId: z
      .string()
      .nullable()
      .describe("The GitHub integration ID from Dokploy's GitHub integrations."),
    watchPaths: z
      .array(z.string())
      .nullable()
      .optional()
      .describe(
        "Paths to watch for changes. Deployments only trigger when changes occur in these paths."
      ),
    enableSubmodules: z
      .boolean()
      .describe("Whether to enable git submodules during clone."),
    triggerType: z
      .enum(["push", "tag"])
      .optional()
      .default("push")
      .describe(
        "The trigger type for deployments. 'push' triggers on commits, 'tag' triggers on new tags."
      ),
  }),
  annotations: {
    title: "Save Application GitHub Provider",
    destructiveHint: true,
    idempotentHint: false,
    openWorldHint: true,
  },
  handler: async (input) => {
    const response = await apiClient.post(
      "/application.saveGithubProvider",
      input
    );

    return ResponseFormatter.success(
      `GitHub provider for application "${input.applicationId}" saved successfully`,
      response.data
    );
  },
});
