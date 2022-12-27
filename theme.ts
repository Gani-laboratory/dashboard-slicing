import { extendTheme, ThemeConfig, theme as base, withDefaultVariant } from "@chakra-ui/react";

export const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  colors: {
    "gray.dark": "#1c1c1c",
    "gray.light": "#646464",
    "brand.red": "#e14949",
  },
  fonts: {
    heading: `Circular Std Book, ${base.fonts.heading}`,
    body: `Circular Std Book, ${base.fonts.body}`,
  },
});

withDefaultVariant({
  variant: "ghost",
  components: ["Button", "IconButton"],
});
