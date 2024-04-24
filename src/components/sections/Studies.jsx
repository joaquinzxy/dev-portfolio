import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { ExperienceCard } from '../experience/ExperienceCard'
import { useTranslation } from 'react-i18next';

export const Studies = () => {

  const [t, i18n] = useTranslation('global');

  const studies = t('studies.items', { returnObjects: true });

  return (
    <Box mt={'2rem'}>
      <Heading size={'lg'} fontFamily={'Px-Grotesk'} mb={'1.5rem'}>{t('studies.section_title')}</Heading>
      <Box>
        {
            studies.map((position, index) => <ExperienceCard key={index} experience={position} />)
        }
      </Box>
    </Box>
  )
}
