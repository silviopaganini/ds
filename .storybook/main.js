const path = require("path");

// Location of root node_modules
const modulesDir = path.join(__dirname, "../node_modules");

// As long Storybook depends on emotion 10.
const emotion10Aliases = (config) => ({
  ...config,
  resolve: {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      "@emotion/core": path.join(modulesDir, "@emotion/react"),
    },
  },
});

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
  webpackFinal: emotion10Aliases,
};
