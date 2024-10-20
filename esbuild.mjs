import { build } from "esbuild";
import { copy } from "esbuild-plugin-copy";

await build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  minify: true,
  format: "esm",
  outfile: "dist/_worker.js",
  plugins: [
    copy({
      resolveFrom: "cwd",
      assets: {
        from: ["src/_routes.json"],
        to: ["dist/_routes.json"],
      },
    }),
  ],
});
