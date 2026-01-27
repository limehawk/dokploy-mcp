import { z } from "zod";
import apiClient from "../../../utils/apiClient.js";
import { ResponseFormatter } from "../../../utils/responseFormatter.js";
import { createTool } from "../toolFactory.js";

export const applicationCleanQueues = createTool({
  name: "application-cleanQueues",
  description:
    "Cleans the deployment queues for an application in Dokploy. Removes pending deployment jobs from the queue.",
  schema: z.object({
    applicationId: z
      .string()
      .describe("The unique identifier of the application to clean queues for."),
  }),
  annotations: {
    title: "Clean Application Queues",
    destructiveHint: false,
    idempotentHint: true,
    openWorldHint: true,
  },
  handler: async (input) => {
    const response = await apiClient.post("/application.cleanQueues", input);

    return ResponseFormatter.success(
      `Queues for application "${input.applicationId}" cleaned successfully`,
      response.data
    );
  },
});
