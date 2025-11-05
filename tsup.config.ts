import { defineConfig, Options } from "tsup";

const injectStyleFunction = `
function injectStyle(css) {
  if (!css || typeof document === 'undefined') return;
  if (document.getElementById('react-toast-msg-style')) return;

  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  style.type = 'text/css';
  style.id = 'react-toast-msg-style';

  style.appendChild(document.createTextNode(css));
  head.appendChild(style);
}
`;

const baseConfig: Options = {
    format: ["esm", "cjs"],
    target: "es2018",
    sourcemap: false,
    dts: true,
    clean: true,
    minify: true,
    external: ["react", "react-dom"],
    loader: { ".css": "text" },
    banner: {
        js: `"use client";`
    }
};

export default defineConfig([
    {
        ...baseConfig,
        entry: ["src/index.ts"],
        injectStyle: css => `${injectStyleFunction}injectStyle(${css});`
    },
    // We will make this feature available in the future
    // {
    //     ...baseConfig,
    //     entry: { unstyled: "src/index.ts" },
    //     injectStyle: false
    // }
]);
