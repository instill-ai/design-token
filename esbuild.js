import esbuild from "esbuild";
import peerDependencies from "./package.json" assert { type: "json" };

const sharedConfig = {
  entryPoints: ["./src/index.ts"],
  bundle: true,
  minify: false,
  sourcemap: false,
  target: "esnext",
  tsconfig: "./tsconfig.json",
  // Exclude the token.json
  external: Object.keys(peerDependencies),
};

esbuild
  .build({
    ...sharedConfig,
    format: "esm",
    outfile: "./build/index.esm.js",
    target: ["esnext", "node12"],
  })
  .catch(() => process.exit(1));
