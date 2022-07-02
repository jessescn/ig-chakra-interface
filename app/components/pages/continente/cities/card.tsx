import { Box, Image, Text, WrapItem } from '@chakra-ui/react'

type Props = {
  city: string
  country: string
}

const Card = ({ city, country }: Props) => {
  return (
    <WrapItem>
      <Box
        w="256px"
        h="279px"
        borderWidth="1px"
        borderColor="#FFBA08"
        borderRadius="2px"
      >
        <Image alt="" src="/images/city.png" w="256px" height="auto" />
        <Box px="24px" py="18px">
          <Text fontSize="20px" fontWeight="bold">
            {city}
          </Text>
          <Text>{country}</Text>
        </Box>
      </Box>
    </WrapItem>
  )
}

export default Card
