import { withDocstra } from "docstra/server";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default withDocstra(nextConfig as any);