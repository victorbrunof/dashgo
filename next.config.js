/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  image: {
    loader: "akamai",
    path: "",
  },
  basePath: "/dashgo",
  assetPrefix: "/dashgo",
}

module.exports = nextConfig
