import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { CurrentCard } from '../about/CurrentCard';
import { useTranslation } from 'react-i18next';

export const About = () => {

  const [t, i18n] = useTranslation('global');

  const birthdate = new Date('1998-12-28');
  const today = new Date();
  let age = today.getFullYear() - birthdate.getFullYear();
  const hasHadBirthdayThisYear =
    today.getMonth() > birthdate.getMonth() ||
    (today.getMonth() === birthdate.getMonth() && today.getDate() >= birthdate.getDate());
  if (!hasHadBirthdayThisYear) {
    age -= 1;
  }

  return (
    <Box>
      <Box gap={'1.5rem'} display={'flex'} flexDir={'column'}>
        <Heading size={'lg'} fontFamily={'Px-Grotesk'}>
          {t('about.section_title')}
        </Heading>
        <p>
          {t('about.paragraph_1').replace('%%age%%', age)}
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
