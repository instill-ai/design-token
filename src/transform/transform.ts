import { CSSRuleObject } from "tailwindcss/types/config";
import { DesignTokens } from "../types";

export type TransformProps = {
  prefix?: string;
  tokens: DesignTokens;
};

export const transform = ({ prefix, tokens }: TransformProps) => {
  let { color, typography, font, ...customStyle } = tokens;

  // Transform color token to tailwind utility css
  let colors = Object.fromEntries(
    Object.entries(color).map(([k, v]) => [
      prefix ? prefix + "-" + k.replaceAll("_", "-") : k.replaceAll("_", "-"),
      v.value,
    ])
  );

  // Transform typography token to tailwind utility css
  let typographys: CSSRuleObject = Object.fromEntries(
    Object.entries(typography).map(([k, v]) => [
      prefix ? "text" + "-" + prefix + "-" + k : "text-" + k,
      {
        fontFamily: v.fontFamily.value,
        fontSize: `${v.fontSize.value}px`,
        fontWeight: `${v.fontWeight.value}`,
        lineHeight: `${v.lineHeight.value}px`,
        textDecorationStyle: v.textDecoration.value,
        letterSpacing: `${v.letterSpacing.value}px`,
        textIndent: `${v.paragraphIndent.value}px`,
      },
    ])
  );

  // Warn there had non transformed style
  let customStyleTokens = Object.entries(customStyle).map(([k, _]) => k);
  console.log("Non transformed style detected", customStyleTokens);

  return { colors, typographys };
};
