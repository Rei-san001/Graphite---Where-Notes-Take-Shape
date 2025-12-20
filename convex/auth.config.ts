import { AuthConfig } from "convex/server";

export default {
  providers: [
    {
      domain: "https://tolerant-martin-13.clerk.accounts.dev",
      applicationID: "convex",
    },
  ]
} satisfies AuthConfig;