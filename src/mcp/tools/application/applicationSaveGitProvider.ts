import { z } from "zod";
import apiClient from "../../../utils/apiClient.js";
import { ResponseFormatter } from "../../../utils/responseFormatter.js";
import { createTool } from "../toolFactory.js";

export const applicationSaveGitProvider = createTool({
  name: "application-saveGitProvider",
  description:
    "Saves custom Git provider configuration for an application in Dokploy. Use this for self-hosted Git servers or any Git repository accessible via URL.",
  schema: z.object({
    customGitBranch: z
      .string()
      .nullable()
      .optional()
      .describe("The branch to use from the repository (e.g., 'main', 'develop')."),
    applicationId: z
      .string()
      .describe("The ID of the application to save Git provider for."),
    customGitBuildPath: z
      .string()
      .nullable()
      .optional()
      .describe(
        "The path within the repository to build from (e.g., '/' for root, '/app' for subdirectory)."
      ),
    customGitUrl: z
      .string()
      .nullable()
      .optional()
      .describe(
        "The custom Git repository URL (HTTPS or SSH format, e.g., 'https://git.example.com/repo.git')."
      ),
    watchPaths: z
      .array(z.string())
      .nullable()
      .optional()
      .describe(
        "Array of paths to watch for changes. Deployments only trigger when changes occur in these paths."
      ),
    enableSubmodules: z
      .boolean()
      .describe("Whether to enable git submodules during clone."),
    customGitSSHKeyId: z
      .string()
      .nullable()
      .optional()
      .describe(
        "The SSH key ID for Git authentication. Required for SSH URLs, get from Dokploy's SSH key management."
      ),
  }),
  annotations: {
    title: "Save Application Git Provider",
    destructiveHint: true,
    idempotentHint: false,
    openWorldHint: true,
  },
  handler: async (input) => {
    const response = await apiClient.post(
      "/application.saveGitProvider",
      input
    );

    return ResponseFormatter.success(
      `Git provider for application "${input.applicationId}" saved successfully`,
      response.data
    );
  },
});
