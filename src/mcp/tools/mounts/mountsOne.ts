import { z } from "zod";
import apiClient from "../../../utils/apiClient.js";
import { ResponseFormatter } from "../../../utils/responseFormatter.js";
import { createTool } from "../toolFactory.js";

export const mountsOne = createTool({
  name: "mounts-one",
  description:
    "Retrieves detailed information about a specific mount by its ID. Returns the mount type, paths, content (for file mounts), and associated service information.",
  schema: z.object({
    mountId: z
      .string()
      .min(1)
      .describe("The unique identifier of the mount to retrieve"),
  }),
  annotations: {
    title: "Get Mount",
    readOnlyHint: true,
    destructiveHint: false,
    idempotentHint: true,
    openWorldHint: true,
  },
  handler: async (input) => {
    const response = await apiClient.get("/mounts.one", {
      params: { mountId: input.mountId },
    });

    if (!response?.data) {
      return ResponseFormatter.error(
        "Failed to fetch mount",
        "No response data received"
      );
    }

    return ResponseFormatter.success(
      `Successfully retrieved mount ${input.mountId}`,
      response.data
    );
  },
});
