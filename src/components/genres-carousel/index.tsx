import { Box, HStack, LinkBox, LinkOverlay, Text, useBreakpointValue, VStack } from "@chakra-ui/react"
import { Image } from "components/image"
import { genres } from "./genres-data"

export const GenresCarousel = () => {
  const imageSize = useBreakpointValue({ base: '20', md: '24', '2xl': '48' }, '2xl')
  
  return (
    <HStack
      width={"full"}
      overflowX={"auto"}
      spacing={12}
      rounded={"lg"}
      flexShrink={0}
    >
      {genres.map(({name, image}, index) => (
        <LinkBox as={"article"} role={"group"} pb={3} key={`${index}-${name}`}>
          <VStack spacing={1}>
            <Box rounded={"lg"} overflow={"hidden"} width={imageSize} height={imageSize}>
              <LinkOverlay>
                <Image
                  transition={"ease-out"}
                  transitionProperty={"all"}
                  transitionDuration={"normal"}
                  _groupHover={{
                    transform: 'scale(1.1, 1.1)'
                  }}
                  src={image}
                  alt={name}
                  height={imageSize}
                  width={imageSize}
                  objectFit={"cover"}
                  quality={"100"}
                />
              </LinkOverlay>
            </Box>
            <Text fontWeight={"medium"}>{name}</Text>
          </VStack>
        </LinkBox>
      ))}
    </HStack>
  )
}