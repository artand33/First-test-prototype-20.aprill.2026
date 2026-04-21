import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

// Pin Turbopack workspace root to this repo. A stray `package-lock.json` under
// the user home directory would otherwise make Next infer the wrong root.
const turbopackRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: turbopackRoot,
  },
};

export default nextConfig;
