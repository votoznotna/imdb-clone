/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["image.tmdb.org"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "image.tmdb.org",
    //     port: "",
    //   },
    // ],
  },
};

module.exports = nextConfig;
