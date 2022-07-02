import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        color: '#47585B',
      },
    }),
  },
  fonts: {
    heading: `"Poppins", sans-serif`,
    body: `"Poppins", sans-serif`,
  },
})

export default theme
