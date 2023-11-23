/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    prependData: `@import "constants.scss"; @import "mixins.scss";`,
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8080",
        pathname: "/media/**",
      },
      {
        protocol: "http",
        hostname: "anakolchin.temp.swtest.ru",
        pathname: "/media/**",
      },
    ],
  },
};

module.exports = nextConfig;
