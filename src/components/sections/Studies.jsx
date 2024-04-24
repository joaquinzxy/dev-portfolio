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
    },
    {
      position: 'Certified Tech Developer',
      company: 'Digital House',
      dates: '2022 - 2023',
      status: 'Not Completed',
    },
    {
      position: 'IT Technician',
      company: 'ESI - Buceo',
      status: 'Completed',
      dates: '2014 - 2018',
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
