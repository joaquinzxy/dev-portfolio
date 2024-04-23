import { Box, Button, Heading, Icon, useColorMode } from '@chakra-ui/react';
import { LuSunMedium, LuMoonStar } from "react-icons/lu";
import React from 'react';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const [ t, i18n] = useTranslation("global");
  const { toggleColorMode, colorMode } = useColorMode();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  }

  return (
    <Box h={'90vh'}>
      <Box h={'10vh'} p={'1rem'} display={'flex'} justifyContent={'flex-end'} gap={'2rem'}>
        <Button onClick={toggleColorMode}>
        {
            colorMode === 'light' ? <Icon as={LuSunMedium} /> : <Icon as={LuMoonStar} />
        }
        </Button>
        <Button onClick={toggleLanguage}>
        {
            i18n.language === 'en' ? 'EN' : 'ES'
        }
        </Button>
      </Box>
      <Box h={'80vh'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDir={'column'} textAlign={'center'} gap={'3rem'}>
        <Heading as='h2' size={'2xl'} fontFamily={'Px-Grotesk'}>
        {t("hero.title")} 👋
        </Heading>
        <Heading as='h3' size={'xl'}>
        Sofware Developer
        </Heading>
        <Heading as='p' size={'md'} fontWeight={'300'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, molestiae molestias! Voluptas dolorum iure molestias fuga beatae debitis doloremque! Ipsum reprehenderit incidunt itaque vitae praesentium ipsam aperiam delectus similique obcaecati.
        </Heading>
      </Box>
    </Box>
  );
};
