import { Box, Text, Image } from '@chakra-ui/react'

const Banner = () => {
  return (
    <Box bgImage='url("/images/home.jpg")'>
      <Box
        w="100vw"
        h={{ base: '163px', md: '335px' }}
        zIndex={100}
        color="#fff"
        position="relative"
        px={{ base: '16px', md: '140px' }}
        pt={{ base: '28px', md: '80px' }}
        maxW="1440px"
        margin="0 auto"
      >
        <Text fontSize={{ base: '20px', md: '36px' }}>5 Continentes,</Text>
        <Text fontSize={{ base: '20px', md: '36px' }}>
          infinitas possibilidades.
        </Text>
        <Text fontSize={{ base: '14px', md: '20px' }} maxW="524px" mt="8px">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
        <Image
          display={{ base: 'none', md: 'inherit' }}
          src="Airplane.svg"
          alt="plane image"
          position="absolute"
          right="100px"
          bottom="-50px"
        />
      </Box>
    </Box>
  )
}

export default Banner
