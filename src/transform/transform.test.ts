import assert from "node:assert";
import { describe, it } from "node:test";
import { DesignTokens } from "../types";
import { transform } from "./transform";

describe("Should transform colors", () => {
  const tokens: DesignTokens = {
    color: {
      neonblue_50: {
        description: "",
        type: "color",
        value: "#0000ffff",
        blendMode: "normal",
        extensions: {
          "org.lukasoppermann.figmaDesignTokens": {
            styleId: "S:c38cd171824fc48ebcd4dc3401a5a150014bb37f,",
            exportKey: "color",
          },
        },
      },
    },
    font: {},
    typography: {},
  };

  it("without prefix", () => {
    const { colors } = transform({ tokens });
    assert.deepEqual(colors, {
      "neonblue-50": "#0000ffff",
    });
  });

  it("with prefix", () => {
    const { colors } = transform({ tokens, prefix: "instill" });
    assert.deepEqual(colors, {
      "instill-neonblue-50": "#0000ffff",
    });
  });
});

describe("Should transform typography", () => {
  const tokens: DesignTokens = {
    color: {},
    font: {},
    typography: {
      h1: {
        fontSize: {
          type: "dimension",
          value: 32,
        },
        textDecoration: {
          type: "string",
          value: "none",
        },
        fontFamily: {
          type: "string",
          value: "IBM Plex Sans",
        },
        fontWeight: {
          type: "number",
          value: 500,
        },
        fontStyle: {
          type: "string",
          value: "normal",
        },
        fontStretch: {
          type: "string",
          value: "normal",
        },
        letterSpacing: {
          type: "dimension",
          value: 12,
        },
        lineHeight: {
          type: "dimension",
          value: 38.4,
        },
        paragraphIndent: {
          type: "dimension",
          value: 20,
        },
        paragraphSpacing: {
          type: "dimension",
          value: 20,
        },
        textCase: {
          type: "string",
          value: "capitalize",
        },
      },
    },
  };

  it("without prefix", () => {
    const { typographys } = transform({ tokens });
    assert.deepEqual(typographys, {
      "text-h1": {
        fontFamily: "IBM Plex Sans",
        fontSize: "32px",
        fontWeight: "500",
        lineHeight: "38.4px",
        textDecorationStyle: "none",
        letterSpacing: "12px",
        textIndent: "20px",
      },
    });
  });

  it("with prefix", () => {
    const { typographys } = transform({ tokens, prefix: "instill" });
    assert.deepEqual(typographys, {
      "text-instill-h1": {
        fontFamily: "IBM Plex Sans",
        fontSize: "32px",
        fontWeight: "500",
        lineHeight: "38.4px",
        textDecorationStyle: "none",
        letterSpacing: "12px",
        textIndent: "20px",
      },
    });
  });
});
