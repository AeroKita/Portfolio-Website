import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Ensure output file tracing resolves modules correctly when the app is in a subdirectory
  outputFileTracingRoot: path.join(__dirname, ".."),
};

export default nextConfig;
