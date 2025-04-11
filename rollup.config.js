import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { babel } from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";

export default [
  {
    input: "index.js",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
        sourcemap: false,
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
    ],
    external: ["react", "react-dom", "axios"],
    plugins: [
      peerDepsExternal(),
      nodeResolve({
        extensions: [".js", ".jsx"],
      }),
      json(),
      commonjs(),
      postcss({
        plugins: [require("tailwindcss"), require("autoprefixer")],
        minimize: false,
        extract: "style.css",
      }),
      babel({
        configFile: "./.babelrc",
        babelHelpers: "bundled",
        exclude: "node_modules/**",
      }),
      terser(),
    ],
  },
];
