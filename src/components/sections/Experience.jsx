import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { ExperienceCard } from '../experience/ExperienceCard'

export const Experience = () => {

  const positions = [
    {
      position: 'Backend Software Developer',
      company: 'Cencosud',
      dates: '02/2023 - Actualidad',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui placeat quisquam quaerat? Voluptate hic sed libero id omnis quas! Itaque consectetur similique unde, error inventore explicabo esse? Commodi, ex nostrum.'
    },
    {
      position: 'Salesforce Developer',
      company: 'Tata Consultancy Services',
      dates: '02/2022 - 02/2023',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui placeat quisquam quaerat? Voluptate hic sed libero id omnis quas! Itaque consectetur similique unde, error inventore explicabo esse? Commodi, ex nostrum.'
    },
    {
      position: 'Operador IT',
      company: 'OSE (DCA)',
      dates: '12/2020 - 01/2022',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui placeat quisquam quaerat? Voluptate hic sed libero id omnis quas! Itaque consectetur similique unde, error inventore explicabo esse? Commodi, ex nostrum.'
    },
  ]

  return (
    <Box>
      <Heading size={'lg'} fontFamily={'Px-Grotesk'} mb={'1.5rem'}>🖥️ IT Experience</Heading>
      <Box>
        {
            positions.map((position, index) => <ExperienceCard key={index} experience={position} />)
        }
      </Box>
    </Box>
  )
}
