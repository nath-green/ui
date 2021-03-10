import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import { uglify } from "rollup-plugin-uglify";
import filesize from 'rollup-plugin-filesize';

const extensions = [".js", ".jsx"];

export default {
  input: "./src/index.js",
  output: {
    file: "./dist/index.js",
    format: "cjs",
    name: "bundle",
  },
  plugins: [
    resolve({
      mainFields: ["module", "main", "jsnext:main", "browser"],
      extensions,
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: "node_modules/**",
    }),
    uglify(),
    filesize()
  ],
  external: ['react', 'react-dom']
};
