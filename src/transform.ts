import token from "./tokens/design-tokens.json";
import { CSSRuleObject } from "tailwindcss/types/config";

export type TransformProps = {
  prefix?: string;
};

export const transform = ({ prefix }: TransformProps) => {
  let colors = Object.fromEntries(
    Object.entries(token.color).map(([k, v]) => [
      prefix + "-" + k.replaceAll("_", "-"),
      v.value,
    ])
  );

  let typographys: CSSRuleObject = Object.fromEntries(
    Object.entries(token.font).map(([k, v]) => [
      "text" + "-" + prefix + "-" + k,
      {
        fontFamily: v.value.fontFamily,
        fontSize: `${v.value.fontSize}px`,
        fontWeight: `${v.value.fontWeight}`,
        lineHeight: `${v.value.lineHeight}px`,
      },
    ])
  );

  return { colors, typographys };
};
