import { Box, Button, Heading } from '@chakra-ui/react';
import { FaLinkedin } from "react-icons/fa";
import React from 'react';
import { CurrentCard } from '../about/CurrentCard';
import { useTranslation } from 'react-i18next';

export const Contact = () => {

  const [t, i18n] = useTranslation('global');

  const handleOpenLinkedin = () => {
    const profileUrl = 'http://www.linkedin.com/in/joaquin-de-sosa'
    window.open(profileUrl, '_blank');
  }

  return (
    <Box mb={'8rem'}>
      <Box gap={'1.5rem'} display={'flex'} flexDir={'column'} justifyContent={'flex-start'} alignItems={'center'} textAlign={'center'}>
        <Heading size={'lg'} fontFamily={'Px-Grotesk'}>
          {t('contact.section_title')}
        </Heading>
        <p>
        {t('contact.section_intro')}
        </p>
        <Button leftIcon={<FaLinkedin/>} colorScheme='blue' onClick={handleOpenLinkedin}>Linkedin</Button>
      </Box>
    </Box>
  );
};
