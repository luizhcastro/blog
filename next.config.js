/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async redirects() {
    return [
      { source: "/thoughts", destination: "/", permanent: true },
      { source: "/thoughts/never-let-a-person-fuck-your-life", destination: "/", permanent: true },
      { source: "/thoughts/why-write", destination: "/", permanent: true },
      { source: "/projects", destination: "/", permanent: true },
      { source: "/projects/:path*", destination: "/", permanent: true },
    ];
  },
};
module.exports = nextConfig;
