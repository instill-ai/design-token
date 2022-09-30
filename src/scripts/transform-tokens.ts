import fs from "fs";
import { join } from "path";
import tokens from "../tokens/original-tokens.json";
import { transform } from "../transform";

const main = () => {
  const transformedTokens = transform({ prefix: "instill", tokens });
  const targetPath = join(
    process.cwd(),
    "src",
    "tokens",
    "transformed-tokens.json"
  );
  fs.writeFileSync(targetPath, JSON.stringify(transformedTokens));
};

main();
