import { Box, Center, Text } from '@chakra-ui/react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { useRouter } from 'next/router'

type CarouselItemProps = {
  title: string
  description: string
  url: string
}

const CarouselItem = ({ title, description, url }: CarouselItemProps) => {
  const router = useRouter()

  const handleRedirect = () => {
    router.push(`continente/${url}`)
  }

  return (
    <Center
      bgImage='url("/images/slider.png")'
      height={{ base: '250px', md: '450px' }}
      color="#fff"
      textAlign="center"
      flexDir="column"
      cursor="pointer"
      onClick={handleRedirect}
    >
      <Text fontSize={{ base: '24px', md: '48px' }} fontWeight="bold">
        {title}
      </Text>
      <Text fontSize={{ base: '14px', md: '24px' }} fontWeight="bold">
        {description}
      </Text>
    </Center>
  )
}

const Carousel = () => {
  const continents: CarouselItemProps[] = [
    {
      title: 'América do Norte',
      description: '',
      url: 'america-do-norte',
    },
    {
      title: 'América do Sul',
      description: '',
      url: 'america-do-sul',
    },
    {
      title: 'Ásia',
      description: '',
      url: 'asia',
    },
    {
      title: 'África',
      description: '',
      url: 'africa',
    },
    {
      title: 'Europa',
      description: '',
      url: 'europa',
    },
    {
      title: 'Oceania',
      description: '',
      url: 'oceania',
    },
  ]

  return (
    <Box mt={{ base: '24px', md: '52px' }}>
      <Box
        fontSize={{ base: '20px', md: '36px' }}
        textAlign="center"
        fontWeight="medium"
      >
        <Text>Vamos nessa?</Text>
        <Text>Então escolha seu continente</Text>
      </Box>
      <Box maxW="1240px" marginX="auto" marginY={{ base: '24px', md: '40px' }}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {continents.map((continent) => (
            <SwiperSlide key={continent.title}>
              <CarouselItem {...continent} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  )
}

export default Carousel
