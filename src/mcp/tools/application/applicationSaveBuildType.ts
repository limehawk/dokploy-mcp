import { z } from "zod";
import apiClient from "../../../utils/apiClient.js";
import { ResponseFormatter } from "../../../utils/responseFormatter.js";
import { createTool } from "../toolFactory.js";

export const applicationSaveBuildType = createTool({
  name: "application-saveBuildType",
  description:
    "Saves build type configuration for an application in Dokploy. Configures how the application is built.",
  schema: z.object({
    applicationId: z
      .string()
      .describe("The unique identifier of the application to save build type for."),
    buildType: z
      .enum([
        "dockerfile",
        "heroku_buildpacks",
        "paketo_buildpacks",
        "nixpacks",
        "static",
        "railpack",
      ])
      .describe(
        "The build type for the application: 'dockerfile' for custom Dockerfile, 'nixpacks' for auto-detection, 'heroku_buildpacks'/'paketo_buildpacks' for buildpack builds, 'static' for static sites, 'railpack' for Rails apps."
      ),
    dockerfile: z
      .string()
      .nullable()
      .optional()
      .describe(
        "Path to the Dockerfile relative to build context (e.g., 'Dockerfile', 'docker/Dockerfile.prod')."
      ),
    dockerContextPath: z
      .string()
      .nullable()
      .describe(
        "Docker context path relative to repository root (e.g., '.', './app'). Required field."
      ),
    dockerBuildStage: z
      .string()
      .nullable()
      .describe(
        "Docker build stage to target for multi-stage builds (e.g., 'production', 'builder'). Required field."
      ),
    herokuVersion: z
      .string()
      .nullable()
      .optional()
      .describe("Heroku buildpack version for heroku_buildpacks build type."),
    railpackVersion: z
      .string()
      .nullable()
      .optional()
      .describe("Railpack version for railpack build type."),
    publishDirectory: z
      .string()
      .nullable()
      .optional()
      .describe(
        "Directory containing the built files to publish (e.g., 'dist', 'build', 'public')."
      ),
    isStaticSpa: z
      .boolean()
      .nullable()
      .optional()
      .describe(
        "Whether the application is a static Single Page Application. Enables SPA-specific routing."
      ),
  }),
  annotations: {
    title: "Save Application Build Type",
    destructiveHint: true,
    idempotentHint: false,
    openWorldHint: true,
  },
  handler: async (input) => {
    const response = await apiClient.post("/application.saveBuildType", input);

    return ResponseFormatter.success(
      `Build type for application "${input.applicationId}" saved successfully`,
      response.data
    );
  },
});
