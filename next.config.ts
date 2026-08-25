import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Detail-dense artwork (small labels inside banners) needs a higher quality
     than the default 75 to stay legible after re-encoding. */
  images: {
    qualities: [75, 90],
  },
  allowedDevOrigins: [
    "mud-distance-jogging.ngrok-free.dev",
    "*.ngrok-free.dev",
    "*.ngrok-free.app",
  ],
};

export default nextConfig;
