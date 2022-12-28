import { Box, Text, useBreakpointValue, VStack } from "@chakra-ui/react"
import { Image } from "components/image"
import { Producer as ProducerType } from "types/producer"

type Props = ProducerType & { badge?: boolean }

export const Producer = ({ name, image, badge }: Props) => {
  const size = useBreakpointValue({ base: 12, '2xl': 20 }, '2xl')
  return (
    <VStack>
      <Box position={"relative"}>
        <Image 
          src={image}
          alt={name}
          width={size}
          height={size}
          rounded={'lg'}
          objectFit={"cover"}
          />
          { badge && (
            <Box
              bg={"brand.red"}
              position={"absolute"}
              top={-3}
              right={-3}
              rounded={"full"}
              width={6}
              height={6}
              borderWidth={4}
              borderColor={"black"}
            />
            )}
      </Box>
      <Text fontSize={"sm"} fontWeight={"medium"}>{name}</Text>
    </VStack>
  )
}