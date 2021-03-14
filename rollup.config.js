import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';
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
    babel({
      babelHelpers: 'bundled',
      exclude: "node_modules/**",
    }),
    resolve({
      mainFields: ["module", "main", "jsnext:main", "browser"],
      extensions,
    }),
    commonjs(),
    uglify(),
    filesize()
  ],
  external: ['react', 'react-dom']
};
