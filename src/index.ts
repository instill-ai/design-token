import plugin from "tailwindcss/plugin";
import defaultTheme from "tailwindcss/defaultTheme";
import tokens from "./tokens/transformed-tokens.json";

export const instillDesignToken = plugin.withOptions<{ prefix?: string }>(
  (options = {}) => {
    return ({ addUtilities }) => {
      addUtilities({
        ".instill-input-focus-shadow": {
          boxShadow: "0px 0px 0px 3px rgba(64, 168, 245, 0.2)",
        },
        ".instill-progress-message-box-shadow": {
          boxShadow: "2px 2px 5px 4px rgba(0, 0, 0, 0.04)",
        },
        ".instill-input-no-highlight": {
          "@apply focus:outline-none focus:ring-0 focus:ring-opacity-0": {},
        },
        ".instill-input-highlight": {
          "@apply focus:border-instillBlue50 focus:outline-none focus:ring-0 focus:ring-white":
            {},
        },
        ".instill-toggle-loading-shadow": {
          boxShadow: "0px 0px 0px 3px #FFFCE3",
        },
        ...tokens.typographys,
      });
    };
  },
  (options = {}) => {
    return {
      theme: {
        ...tokens.colors,
        fontFamily: {
          mono: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
          sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
          instill: ["instill", "IBM Plex Mono"],
        },
        screens: {
          max: "1440px",
        },
      },
      content: [],
    };
  }
);
