import { z } from "zod";
import apiClient from "../../../utils/apiClient.js";
import { ResponseFormatter } from "../../../utils/responseFormatter.js";
import { createTool } from "../toolFactory.js";

export const mountsUpdate = createTool({
  name: "mounts-update",
  description:
    "Updates an existing mount configuration in Dokploy. Can modify the mount type, paths, and content. For file mounts, you can update the file content directly. Use this to edit configuration files, scripts, or any mounted file content.",
  schema: z.object({
    mountId: z
      .string()
      .min(1)
      .describe("The unique identifier of the mount to update"),
    type: z
      .enum(["bind", "volume", "file"])
      .optional()
      .describe("New mount type (optional)"),
    mountPath: z
      .string()
      .min(1)
      .optional()
      .describe("New destination path inside the container (optional)"),
    hostPath: z
      .string()
      .nullish()
      .describe("New host path for bind mounts (optional)"),
    volumeName: z
      .string()
      .nullish()
      .describe("New volume name for volume mounts (optional)"),
    content: z
      .string()
      .nullish()
      .describe("New file content for file mounts - use this to edit the file contents"),
    filePath: z
      .string()
      .nullish()
      .describe("New file path reference (optional)"),
    serviceType: z
      .enum(["application", "postgres", "mysql", "mariadb", "mongo", "redis", "compose"])
      .optional()
      .describe("Service type (optional)"),
  }),
  annotations: {
    title: "Update Mount",
    readOnlyHint: false,
    destructiveHint: true,
    idempotentHint: true,
    openWorldHint: true,
  },
  handler: async (input) => {
    const response = await apiClient.post("/mounts.update", input);

    return ResponseFormatter.success(
      `Successfully updated mount ${input.mountId}`,
      response?.data ?? { updated: true }
    );
  },
});
