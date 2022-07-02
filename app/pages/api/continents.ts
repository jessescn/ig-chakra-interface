import { NextApiRequest, NextApiResponse } from 'next'
import { faker } from '@faker-js/faker'

type Continent =
  | 'america-do-norte'
  | 'america-do-sul'
  | 'asia'
  | 'africa'
  | 'europa'
  | 'oceania'

export type City100 = {
  name: string
  country: string
}

export type ContinentInfo = {
  countries: number
  languages: number
  cities100: City100[]
}

export type ContinentData = {
  [name in Continent]: {
    name: string
    about: string
    info: ContinentInfo
  }
}

const generateCities = () => {
  return Array.from(
    { length: faker.datatype.number({ min: 1, max: 10 }) },
    () => ({
      name: faker.address.cityName(),
      country: faker.address.country(),
    }),
  )
}

const data: ContinentData = {
  'america-do-norte': {
    name: 'América do Norte',
    about:
      'A América do Norte é um subcontinente que compreende a porção setentrional do continente americano. Existem duas formas de classificar esse continente: a primeira considera que a América do Norte é apenas a parte mais setentrional da América.',
    info: {
      countries: 3,
      languages: 6,
      cities100: generateCities(),
    },
  },
  'america-do-sul': {
    name: 'América do Sul',
    about:
      'A América do Sul é um continente que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano. A sua extensão é de 17 819 100 km², abrangendo 12% da superfície terrestre e 6% da população mundial.',
    info: {
      countries: 12,
      languages: 9,
      cities100: generateCities(),
    },
  },
  africa: {
    name: 'África',
    about:
      'A África é o terceiro continente mais extenso (depois da Ásia e da América) com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra (atrás da Ásia) com cerca de um bilhão de pessoas (estimativa para 2005).',
    info: {
      countries: 54,
      languages: 3000,
      cities100: generateCities(),
    },
  },
  asia: {
    name: 'Ásia',
    about:
      'A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial. A Ásia faz fronteira no lado ocidental com a África e com a Europa, e no lado oriental com o oceano Pacífico, a Oceania e, em menor proporção, com a América do Norte, pelo Estreito de Bering.',
    info: {
      countries: 50,
      languages: 100,
      cities100: generateCities(),
    },
  },
  europa: {
    name: 'Europa',
    about:
      'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste. A Europa é limitada pelo oceano Glacial Ártico e outros corpos de água no norte, pelo oceano Atlântico a oeste, pelo mar Mediterrâneo ao sul, e pelo mar Negro e por vias navegáveis interligadas ao sudeste',
    info: {
      countries: 50,
      languages: 60,
      cities100: generateCities(),
    },
  },
  oceania: {
    name: 'Oceania',
    about:
      'Oceania ou Oceânia[nota 1] é uma região geográfica[1][2][3] composta por vários grupos de ilhas do oceano Pacífico (Polinésia, Melanésia e Micronésia). O termo Oceania foi criado em 1831 pelo explorador francês Dumont dUrville. O termo é usado hoje em vários idiomas para designar uma região geográfica e política que compreende o continente da Austrália e ilhas do Oceano Pacífico adjacentes.',
    info: {
      countries: 16,
      languages: 16,
      cities100: generateCities(),
    },
  },
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(data)
}
