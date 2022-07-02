import { Box, Flex, Center, Image, Text, Icon } from '@chakra-ui/react'

import { GoPrimitiveDot } from 'react-icons/go'

const Attractions = () => {
  const attractions = [
    {
      label: 'vida noturna',
      icon: 'cocktail.svg',
    },
    {
      label: 'praia',
      icon: 'surf.svg',
    },
    {
      label: 'moderno',
      icon: 'building.svg',
    },
    {
      label: 'clássico',
      icon: 'museum.svg',
    },
    {
      label: 'e mais...',
      icon: 'earth.svg',
    },
  ]

  return (
    <Box py={{ base: '36px', md: '80px' }}>
      <Flex
        justifyContent={{ base: 'space-evenly', md: 'space-between' }}
        maxW="1160px"
        margin="0 auto"
        flexWrap="wrap"
        px={{ base: '50px', md: '0' }}
      >
        {attractions.map((attraction) => (
          <Center flexDir="column" key={attraction.label}>
            <Image
              display={{ base: 'none', md: 'inherit' }}
              alt={`icone ${attraction.label}`}
              src={`icons/${attraction.icon}`}
            />
            <Text
              display="flex"
              alignItems="center"
              fontWeight="semibold"
              fontSize={{ base: '18px', md: '24px' }}
              mt="24px"
            >
              <Icon
                display={{ base: 'inherit', md: 'none' }}
                as={GoPrimitiveDot}
                color="#FFBA08"
              />
              {attraction.label}
            </Text>
          </Center>
        ))}
      </Flex>
    </Box>
  )
}

export default Attractions
