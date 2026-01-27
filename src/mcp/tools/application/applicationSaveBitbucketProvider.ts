import { z } from "zod";
import apiClient from "../../../utils/apiClient.js";
import { ResponseFormatter } from "../../../utils/responseFormatter.js";
import { createTool } from "../toolFactory.js";

export const applicationSaveBitbucketProvider = createTool({
  name: "application-saveBitbucketProvider",
  description:
    "Saves Bitbucket provider configuration for an application in Dokploy.",
  schema: z.object({
    bitbucketBranch: z
      .string()
      .nullable()
      .describe("The branch to use from the repository (e.g., 'main', 'develop')."),
    bitbucketBuildPath: z
      .string()
      .nullable()
      .describe(
        "The path within the repository to build from (e.g., '/' for root, '/app' for subdirectory)."
      ),
    bitbucketOwner: z
      .string()
      .nullable()
      .describe("The Bitbucket workspace or username that owns the repository."),
    bitbucketRepository: z
      .string()
      .nullable()
      .describe("The Bitbucket repository slug/name."),
    bitbucketId: z
      .string()
      .nullable()
      .describe("The Bitbucket integration ID from Dokploy's Bitbucket integrations."),
    applicationId: z
      .string()
      .describe("The ID of the application to save Bitbucket provider for."),
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
    title: "Save Application Bitbucket Provider",
    destructiveHint: true,
    idempotentHint: false,
    openWorldHint: true,
  },
  handler: async (input) => {
    const response = await apiClient.post(
      "/application.saveBitbucketProvider",
      input
    );

    return ResponseFormatter.success(
      `Bitbucket provider for application "${input.applicationId}" saved successfully`,
      response.data
    );
  },
});
