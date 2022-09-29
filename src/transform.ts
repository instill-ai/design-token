import token from "./tokens/design-tokens.json";
import { CSSRuleObject } from "tailwindcss/types/config";

export type TransformProps = {
  prefix?: string;
};

export const transform = ({ prefix }: TransformProps) => {
  let { color, typography, font, ...customStyle } = token;

  // Transform color token to tailwind utility css
  let colors = Object.fromEntries(
    Object.entries(color).map(([k, v]) => [
      prefix + "-" + k.replaceAll("_", "-"),
      v.value,
    ])
  );

  // Transform typography token to tailwind utility css
  let typographys: CSSRuleObject = Object.fromEntries(
    Object.entries(typography).map(([k, v]) => [
      "text" + "-" + prefix + "-" + k,
      {
        fontFamily: v.fontFamily.value,
        fontSize: `${v.fontSize.value}px`,
        fontWeight: `${v.fontWeight.value}`,
        lineHeight: `${v.lineHeight.value}px`,
        textDecorationStyle: v.textDecoration.value,
        letterSpacing: `${v.letterSpacing.value}`,
        textIndent: `${v.paragraphIndent.value}`,
      },
    ])
  );

  // Warn there had non transformed style
  let customStyleTokens = Object.entries(customStyle).map(([k, _]) => k);
  console.log("Non transformed style detected", customStyleTokens);

  return { colors, typographys };
};
