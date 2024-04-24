import {
  Badge,
  Box,
  Button,
  Heading,
  Icon,
  useColorMode,
} from '@chakra-ui/react';
import { LuSunMedium, LuMoonStar } from 'react-icons/lu';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const [t, i18n] = useTranslation('global');
  const { toggleColorMode, colorMode } = useColorMode();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  const skillset = t('hero.skillset', { returnObjects: true });

  return (
    <Box minH={'90vh'}>
      <Box
        minH={'10vh'}
        p={'1rem'}
        display={'flex'}
        justifyContent={'flex-end'}
        gap={'2rem'}
      >
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? (
            <Icon as={LuSunMedium} />
          ) : (
            <Icon as={LuMoonStar} />
          )}
        </Button>
        <Button onClick={toggleLanguage}>
          {i18n.language === 'en' ? 'EN' : 'ES'}
        </Button>
      </Box>
      <Box
        minH={'80vh'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        flexDir={'column'}
        textAlign={'center'}
        gap={'3rem'}
      >
        <Heading as="h2" size={'2xl'} fontFamily={'Px-Grotesk'}>
          {t('hero.title')} 👋
        </Heading>
        <Heading as="h3" size={'xl'}>
          {t('hero.subtitle')}
        </Heading>
        <Heading as="p" size={'md'} fontWeight={'300'}>
          {t('hero.intro_1')}
        </Heading>
        <Heading as="p" size={'md'} fontWeight={'300'}>
          {t('hero.intro_2')}
        </Heading>
        <Box mt={'8rem'}>
          <Box
            display={'flex'}
            flexWrap={'wrap'}
            gap={'0.5rem'}
            justifyContent={'center'}
            w={'80%'}
            margin={'0 auto'}
          >
            {skillset.map((skill, index) => (
              <Badge
                key={index}
                variant={'solid'}
                fontSize='1rem' 
                colorScheme={
                  skill.type === 'lang'
                    ? 'blue'
                    : skill.type === 'integrations'
                    ? 'green'
                    : skill.type === 'devops'
                    ? 'purple'
                    : 'yellow'
                }
              >
                {skill.name}
              </Badge>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
