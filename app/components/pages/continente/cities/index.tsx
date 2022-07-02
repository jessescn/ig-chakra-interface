import { Box, Text, Wrap } from '@chakra-ui/react'
import { City100 } from '../../../../pages/api/continents'
import Card from './card'

type Props = {
  cities: City100[]
}

const Cities100 = ({ cities }: Props) => {
  return (
    <Box maxW="1160px" marginX="auto" mt={{ base: '0', md: '80px' }}>
      <Text
        px={{ base: '16px', md: 0 }}
        fontSize={{ base: '24px', md: '36px' }}
        fontWeight="semibold"
      >
        Cidade +100
      </Text>
      <Wrap
        mb="16px"
        mt="40px"
        spacing="45px"
        justify={{ base: 'center', md: 'start' }}
      >
        {cities.map((city100, idx) => (
          <Card
            key={`${city100.name}-${idx}`}
            city={city100.name}
            country={city100.country}
          />
        ))}
      </Wrap>
    </Box>
  )
}

export default Cities100
