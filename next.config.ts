import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML/CSS/JS in `out/` — upload contents to cPanel public_html (or a subfolder).
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
