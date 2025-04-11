import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { babel } from "@rollup/plugin-babel";
import uglify from "@lopatnov/rollup-plugin-uglify";

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
    external: ["react", "react-dom", "axios", "react-syntax-highlighter"],
    plugins: [
      peerDepsExternal(),
      nodeResolve({
        extensions: [".js", ".jsx"],
      }),
      commonjs(),
      terser(),
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
      uglify(),
    ],
  },
];
