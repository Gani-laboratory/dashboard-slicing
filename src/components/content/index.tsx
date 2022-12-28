import { HStack, VStack } from "@chakra-ui/react";
import { GenresCarousel } from "components/genres-carousel";
import { SearchBar } from "components/search-bar";
import { Sidebar } from "components/sidebar";
import { TopPicks } from "components/top-picks";

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
        <GenresCarousel/>
        <HStack width={"full"} alignItems={"flex-start"} overflow={"hidden"} flex={1}>
          <TopPicks flex={1}/>
          {/* Top Producers */}
        </HStack>
      </VStack>
    </HStack>
  );
}
