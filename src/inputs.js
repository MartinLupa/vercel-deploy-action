const core = require("@actions/core");

const vercelToken = core.getInput("vercel-token", { required: true });
const vercelOrgId = core.getInput("vercel-org-id", { required: true });
const vercelProjectId = core.getInput("vercel-project-id", { required: true });
const vercelEnv = core.getInput("vercel-env", { required: true });
const prebuilt = core.getInput("prebuilt");
const aliasDomains = core.getInput("alias-domains");
const buildEnv = core.getInput("build-env");

export const inputs = {
  vercelToken,
  vercelOrgId,
  vercelProjectId,
  vercelEnv,
  prebuilt,
  aliasDomains,
  buildEnv,
};
