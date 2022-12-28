import { chakra, Img } from "@chakra-ui/react";

export const Image = chakra(Img, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt", "quality"].includes(prop),
});
