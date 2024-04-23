import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { ExperienceCard } from '../experience/ExperienceCard'

export const Studies = () => {

  const positions = [
    {
      position: 'IT Analyst',
      company: 'ORT University',
      dates: '2023 - Now',
      status: 'Estimating Graduation: 2026',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui placeat quisquam quaerat? Voluptate hic sed libero id omnis quas! Itaque consectetur similique unde, error inventore explicabo esse? Commodi, ex nostrum.'
    },
    {
      position: 'Certified Tech Developer',
      company: 'Digital House',
      dates: '2022 - 2023',
      status: 'Not Completed',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui placeat quisquam quaerat? Voluptate hic sed libero id omnis quas! Itaque consectetur similique unde, error inventore explicabo esse? Commodi, ex nostrum.'
    },
    {
      position: 'IT Technician',
      company: 'ESI - Buceo',
      status: 'Completed',
      dates: '2014 - 2018',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui placeat quisquam quaerat? Voluptate hic sed libero id omnis quas! Itaque consectetur similique unde, error inventore explicabo esse? Commodi, ex nostrum.'
    },
  ]

  return (
    <Box mt={'2rem'}>
      <Heading size={'lg'} fontFamily={'Px-Grotesk'} mb={'1.5rem'}>📚 Studies</Heading>
      <Box>
        {
            positions.map((position, index) => <ExperienceCard key={index} experience={position} />)
        }
      </Box>
    </Box>
  )
}
