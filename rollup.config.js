import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import autoprefixer from "autoprefixer";
import babel from "rollup-plugin-babel";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import scss from "rollup-plugin-scss";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    preserveModules: true,
    output: [
      {
        dir: "dist/esm",
        format: "esm",
        sourcemap: true,
        exports: "auto",
      },
    ],
    plugins: [
      babel({ exclude: "node_modules/**" }),
      commonjs(),
      postcss({
        plugins: [autoprefixer()],
        sourceMap: true,
        extract: true,
        minimize: true,
        modules: true,
      }),
      resolve(),
      scss({
        output: false,
      }),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
