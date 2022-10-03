const esbuild = require("esbuild");
const { peerDependencies } = require("./package.json");

esbuild
  .build({
    entryPoints: ["./src/index.ts"],
    bundle: true,
    minify: true,
    sourcemap: false,
    target: "esnext",
    tsconfig: "./tsconfig.json",
    // Exclude the token.json
    external: ["./src/scripts/*", ...Object.keys(peerDependencies)],
    format: "cjs",
    outfile: "./build/index.js",
    target: ["esnext", "node12"],
  })
  .catch(() => process.exit(1));
