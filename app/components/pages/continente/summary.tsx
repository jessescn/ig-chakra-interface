import { AiOutlineInfoCircle } from 'react-icons/ai'

import { Box, Flex, Icon, Text, Tooltip } from '@chakra-ui/react'
import { ContinentInfo } from '../../../pages/api/continents'

type Props = {
  info: ContinentInfo
}

const Summary = ({ info }: Props) => {
  const cities100Count = Object.values(info.cities100).length

  const content = [
    { label: 'países', value: info.countries },
    { label: 'línguas', value: info.languages },
    {
      label: 'cidades +100',
      value: cities100Count,
      tooltip:
        'Quantidade de cidades deste continente que estão entre as 100 cidades mais visitadas do mundo.',
    },
  ]

  return (
    <Flex
      maxWidth="490px"
      w="100%"
      justifyContent="space-between"
      margin={{ base: '16px 0', md: '0 0 0 70px' }}
    >
      {content.map((elemento) => (
        <Box key={elemento.label} textAlign={{ base: 'start', md: 'center' }}>
          <Text
            fontSize={{ base: '24px', md: '48px' }}
            color="#FFBA08"
            fontWeight="bold"
          >
            {elemento.value}
          </Text>
          <Flex alignItems="center">
            <Text fontSize={{ base: '16px', md: '28px' }}>
              {elemento.label}
            </Text>
            {elemento.tooltip && (
              <Tooltip label={elemento.tooltip}>
                <span>
                  <Icon
                    ml="8px"
                    as={AiOutlineInfoCircle}
                    fontSize={{ base: '10px', md: '16px' }}
                  />
                </span>
              </Tooltip>
            )}
          </Flex>
        </Box>
      ))}
    </Flex>
  )
}

export default Summary
