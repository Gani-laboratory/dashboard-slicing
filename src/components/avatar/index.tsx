import { HStack, Text, Avatar as ChakraAvatar } from "@chakra-ui/react";

export const Avatar = () => {
  return (
    <HStack flexShrink={0}>
      <Text mr={3}>Seishin Gani</Text>
      <ChakraAvatar name={"Seishin Gani"} src={"/images/profile.jpg"} />
    </HStack>
  );
};
