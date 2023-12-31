import type { StorybookConfig } from "@storybook/web-components-webpack5";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
  "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: {
    name: "@storybook/web-components-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  logLevel: "debug",
};
export default config;
