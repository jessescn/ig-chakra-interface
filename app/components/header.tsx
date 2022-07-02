import { Center, Image, IconButton, Icon } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'

type Props = {
  backTo?: string
}

const Header = ({ backTo }: Props) => {
  const router = useRouter()

  const handleBack = () => {
    if (!backTo) return

    router.push(backTo)
  }

  return (
    <Center h={{ base: '50px', md: '100px' }}>
      {backTo && (
        <IconButton
          position="absolute"
          left={{ base: '16px', md: '120px' }}
          variant="unstyled"
          aria-label="back button"
          onClick={handleBack}
          icon={<Icon as={MdOutlineArrowBackIosNew} />}
        />
      )}
      <Image
        src="/Logo.svg"
        alt="page logo"
        height={{ base: '20px', md: '45px' }}
      />
    </Center>
  )
}

export default Header
