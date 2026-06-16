import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Parent folder has another lockfile — pin tracing to this project so vendor chunks resolve correctly.
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
