/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // Google Search Console "HTML file" verification (any /google*.html).
      {
        source: "/:file(google[^/]+\\.html)",
        destination: "/api/gsc-file?file=:file",
      },
    ];
  },
};

export default nextConfig;
