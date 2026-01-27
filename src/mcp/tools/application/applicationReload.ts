import { z } from "zod";
import apiClient from "../../../utils/apiClient.js";
import { ResponseFormatter } from "../../../utils/responseFormatter.js";
import { createTool } from "../toolFactory.js";

export const applicationReload = createTool({
  name: "application-reload",
  description:
    "Reloads an application in Dokploy. This restarts the application containers without a full redeployment.",
  schema: z.object({
    appName: z
      .string()
      .describe(
        "The app name of the application to reload (the internal Docker service name)."
      ),
    applicationId: z
      .string()
      .describe("The unique identifier of the application to reload."),
  }),
  annotations: {
    title: "Reload Application",
    destructiveHint: false,
    idempotentHint: false,
    openWorldHint: true,
  },
  handler: async (input) => {
    const response = await apiClient.post("/application.reload", input);

    return ResponseFormatter.success(
      `Application "${input.applicationId}" reloaded successfully`,
      response.data
    );
  },
});
