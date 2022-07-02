import { Box, Divider } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Header from '../components/header'
import Attractions from '../components/pages/home/attractions'
import Banner from '../components/pages/home/banner'
import Carousel from '../components/pages/home/carousel'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Box bgSize="cover">
        <Banner />
        <Attractions />
        <Box width={{ base: '60px', md: '90px' }} marginX="auto">
          <Divider
            borderColor="#47585B"
            borderWidth="1px"
            orientation="horizontal"
          />
        </Box>
        <Carousel />
      </Box>
    </>
  )
}

export default Home
