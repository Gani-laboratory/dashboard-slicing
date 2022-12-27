import { HStack, VStack } from "@chakra-ui/react";
import { SearchBar } from "components/search-bar";
import { Sidebar } from "components/sidebar";

export default function Content() {
  return (
    <HStack width={"full"} flex={1} overflow={"hidden"}>
      <Sidebar />
      <VStack
        px={12}
        pt={12}
        width={"full"}
        height={"full"}
        spacing={6}
        overflow={"hidden"}
      >
        <SearchBar/>
        {/* Genres Carousel */}
        <HStack width={"full"} alignItems={"flex-start"} overflow={"hidden"} flex={1}>
          {/* Top Picks */}
          {/* Top Producers */}
        </HStack>
      </VStack>
    </HStack>
  );
}
