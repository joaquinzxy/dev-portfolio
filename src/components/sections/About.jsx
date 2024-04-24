import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { CurrentCard } from '../about/CurrentCard';
import { useTranslation } from 'react-i18next';

export const About = () => {

  const [t, i18n] = useTranslation('global');

  return (
    <Box>
      <Box gap={'1.5rem'} display={'flex'} flexDir={'column'}>
        <Heading size={'lg'} fontFamily={'Px-Grotesk'}>
          {t('about.section_title')}
        </Heading>
        <p>
          {t('about.paragraph_1')}
        </p>
        <p>
          {t('about.paragraph_2')}
        </p>
        <p>
          {t('about.paragraph_3')}
        </p>
        <p>
          {t('about.paragraph_4')}
        </p>
      </Box>
    </Box>
  );
};
