import { z } from "zod";
import apiClient from "../../../utils/apiClient.js";
import { ResponseFormatter } from "../../../utils/responseFormatter.js";
import { createTool } from "../toolFactory.js";

export const applicationSaveGiteaProvider = createTool({
  name: "application-saveGiteaProvider",
  description:
    "Saves Gitea provider configuration for an application in Dokploy.",
  schema: z.object({
    applicationId: z
      .string()
      .describe("The ID of the application to save Gitea provider for."),
    giteaBranch: z
      .string()
      .nullable()
      .describe("The branch to use from the repository (e.g., 'main', 'develop')."),
    giteaBuildPath: z
      .string()
      .nullable()
      .describe(
        "The path within the repository to build from (e.g., '/' for root, '/app' for subdirectory)."
      ),
    giteaOwner: z
      .string()
      .nullable()
      .describe("The Gitea username or organization that owns the repository."),
    giteaRepository: z
      .string()
      .nullable()
      .describe("The Gitea repository name."),
    giteaId: z
      .string()
      .nullable()
      .describe("The Gitea integration ID from Dokploy's Gitea integrations."),
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
  }),
  annotations: {
    title: "Save Application Gitea Provider",
    destructiveHint: true,
    idempotentHint: false,
    openWorldHint: true,
  },
  handler: async (input) => {
    const response = await apiClient.post(
      "/application.saveGiteaProvider",
      input
    );

    return ResponseFormatter.success(
      `Gitea provider for application "${input.applicationId}" saved successfully`,
      response.data
    );
  },
});
