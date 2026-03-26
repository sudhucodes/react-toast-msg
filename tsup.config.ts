import { defineConfig } from "tsup";

export default defineConfig([
    {
        outDir: "dist",
        entry: ["src/index.ts"],
        format: ["esm", "cjs"],
        target: "es2018",
        sourcemap: false,
        dts: true,
        clean: true,
        minify: true,
        external: ["react", "react-dom"],
        noExternal: ["framer-motion"],
        banner: {
            js: `"use client";`
        },
    }
]);