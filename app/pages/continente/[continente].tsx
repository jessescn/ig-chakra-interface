import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ContinentData } from '../api/continents'

import { Box, Flex, Text } from '@chakra-ui/react'

import Header from '../../components/header'
import Cities100 from '../../components/pages/continente/cities'
import Summary from '../../components/pages/continente/summary'

const Continente: NextPage = () => {
  const router = useRouter()
  const { continente } = router.query

  const [infos, setInfos] = useState({} as ContinentData)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/continents')
      const data = await response.json()

      setInfos(data)
    }

    fetchData()
  }, [])

  const continentInfo = infos[continente as keyof ContinentData]

  return !continentInfo ? null : (
    <>
      <Header backTo="/" />
      <Box
        bgImage={`url("/images/continente.png")`}
        bgSize="cover"
        bgRepeat="no-repeat"
        height={{ base: '150px', md: '500px' }}
      >
        <Box
          height="100%"
          maxW="1240px"
          marginX="auto"
          px="50px"
          display="flex"
          justifyContent={{ base: 'center', md: 'start' }}
          alignItems={{ base: 'center', md: 'end' }}
        >
          <Text
            color="#fff"
            fontWeight="semibold"
            fontSize={{ base: '28px', md: '48px' }}
            mb={{ base: 0, md: '60px' }}
          >
            {continentInfo.name}
          </Text>
        </Box>
      </Box>
      <Flex
        py="24px"
        px="16px"
        maxW="1160px"
        marginX="auto"
        alignItems="center"
        flexDir={{ base: 'column', md: 'row' }}
      >
        <Text
          fontSize={{ base: '14px', md: '24px' }}
          textAlign="justify"
          maxW={{ base: 'none', md: '600px' }}
        >
          {continentInfo.about}
        </Text>
        <Summary info={continentInfo.info} />
      </Flex>
      <Cities100 cities={continentInfo.info.cities100} />
    </>
  )
}

export default Continente
