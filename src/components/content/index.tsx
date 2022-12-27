import { HStack, VStack } from "@chakra-ui/react";
import { Sidebar } from "components/sidebar";

export default function Content() {
  return (
    <HStack width={"full"} flex={1} overflow={"hidden"}>
      <Sidebar />

      <VStack px={12} pt={12} width={"full"} height={"full"} spacing={6} overflow={"hidden"}></VStack>

      {/* Search Bar */}

      {/* Genres Carousel */}
      <HStack width={"full"} alignItems={"flex-start"} overflow={"hidden"} flex={1}>
        {/* Top Picks */}
        {/* Top Producers */}
      </HStack>
    </HStack>
  );
}
