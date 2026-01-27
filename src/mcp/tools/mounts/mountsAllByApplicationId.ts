import { z } from "zod";
import apiClient from "../../../utils/apiClient.js";
import { ResponseFormatter } from "../../../utils/responseFormatter.js";
import { createTool } from "../toolFactory.js";

export const mountsAllByApplicationId = createTool({
  name: "mounts-allByApplicationId",
  description:
    "Retrieves all mounts associated with a specific application. Returns a list of all file mounts, bind mounts, and volume mounts configured for the application. Useful for viewing what files and volumes are attached to an app.",
  schema: z.object({
    applicationId: z
      .string()
      .min(1)
      .describe("The application ID to list mounts for"),
  }),
  annotations: {
    title: "List Application Mounts",
    readOnlyHint: true,
    destructiveHint: false,
    idempotentHint: true,
    openWorldHint: true,
  },
  handler: async (input) => {
    const response = await apiClient.get(
      `/mounts.allNamedByApplicationId?applicationId=${input.applicationId}`
    );

    const mounts = response?.data ?? [];

    if (!Array.isArray(mounts)) {
      return ResponseFormatter.error(
        "Failed to fetch mounts",
        "Unexpected response format"
      );
    }

    // Group by type for easier reading
    const grouped = {
      file: mounts.filter((m: { type?: string }) => m.type === "file"),
      bind: mounts.filter((m: { type?: string }) => m.type === "bind"),
      volume: mounts.filter((m: { type?: string }) => m.type === "volume"),
    };

    return ResponseFormatter.success(
      `Found ${mounts.length} mount(s) for application: ${grouped.file.length} file, ${grouped.bind.length} bind, ${grouped.volume.length} volume`,
      { total: mounts.length, grouped, mounts }
    );
  },
});
