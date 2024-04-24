import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { ExperienceCard } from '../experience/ExperienceCard'
import { useTranslation } from 'react-i18next';

export const Experience = () => {

  const [t, i18n] = useTranslation('global');

  const jobs = t('experience.jobs', { returnObjects: true });

  return (
    <Box>
      <Heading size={'lg'} fontFamily={'Px-Grotesk'} mb={'1.5rem'}>{t('experience.section_title')}</Heading>
      <Box>
        {
            jobs.map((position, index) => <ExperienceCard key={index} experience={position} />)
        }
      </Box>
    </Box>
  )
}
