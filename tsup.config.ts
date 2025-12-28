import { defineConfig } from "tsup";

export default defineConfig([
    {
        entry: ["src/index.ts"],
        format: ["esm", "cjs"],
        target: "es2018",
        sourcemap: false,
        dts: true,
        clean: true,
        minify: true,
        external: ["react", "react-dom"],
        banner: {
            js: `"use client";`
        },
    }
]);