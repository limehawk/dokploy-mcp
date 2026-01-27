import { z } from "zod";
import apiClient from "../../../utils/apiClient.js";
import { ResponseFormatter } from "../../../utils/responseFormatter.js";
import { createTool } from "../toolFactory.js";

export const mountsCreate = createTool({
  name: "mounts-create",
  description:
    "Creates a new mount for a service in Dokploy. Supports three mount types: 'file' (inline file content), 'bind' (host path mapping), and 'volume' (Docker volume). For file mounts, provide the content directly. For bind mounts, provide hostPath. For volume mounts, provide volumeName.",
  schema: z.object({
    type: z
      .enum(["bind", "volume", "file"])
      .describe("Mount type: 'file' for inline content, 'bind' for host path, 'volume' for Docker volume"),
    mountPath: z
      .string()
      .min(1)
      .describe("Destination path inside the container where the mount will be available"),
    serviceId: z
      .string()
      .min(1)
      .describe("ID of the service (application, database, or compose) to attach the mount to"),
    serviceType: z
      .enum(["application", "postgres", "mysql", "mariadb", "mongo", "redis", "compose"])
      .default("application")
      .describe("Type of service the mount is for"),
    hostPath: z
      .string()
      .nullish()
      .describe("Host path for bind mounts - the path on the host machine"),
    volumeName: z
      .string()
      .nullish()
      .describe("Volume name for volume mounts - name of the Docker volume"),
    content: z
      .string()
      .nullish()
      .describe("File content for file mounts - the actual content to write to the file"),
    filePath: z
      .string()
      .nullish()
      .describe("File path reference for file mounts"),
  }),
  annotations: {
    title: "Create Mount",
    readOnlyHint: false,
    destructiveHint: false,
    idempotentHint: false,
    openWorldHint: true,
  },
  handler: async (input) => {
    const response = await apiClient.post("/mounts.create", input);

    return ResponseFormatter.success(
      `Successfully created ${input.type} mount at ${input.mountPath}`,
      response?.data ?? { created: true }
    );
  },
});
