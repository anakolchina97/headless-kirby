/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    prependData: `@import "constants.scss"; @import "mixins.scss";`,
  },
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
