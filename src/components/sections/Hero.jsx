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

  const skillset = [
    {
      name: 'NodeJS',
      type: 'lang',
    },
    {
      name: 'NestJS',
      type: 'lang',
    },
    {
      name: 'TypeScript',
      type: 'lang',
    },
    {
      name: 'React',
      type: 'lang',
    },
    {
      name: 'Microservicios',
      type: 'integrations',
    },
    {
      name: 'RestAPI',
      type: 'integrations',
    },
    {
      name: 'GraphQL',
      type: 'integrations',
    },
    {
      name: 'Docker',
      type: 'devops',
    },
    {
      name: 'Terraform',
      type: 'devops',
    },
    {
      name: 'Git',
      type: 'devops',
    },
    {
      name: 'Github',
      type: 'devops',
    },
    {
      name: 'New Relic',
      type: 'devops',
    },
    {
      name: 'Lambda',
      type: 'aws',
    },
    {
      name: 'ECS',
      type: 'aws',
    },
    {
      name: 'Fargate',
      type: 'aws',
    },
    {
      name: 'S3',
      type: 'aws',
    },
    {
      name: 'SQS',
      type: 'aws',
    },
    {
      name: 'SNS',
      type: 'aws',
    },
    {
      name: 'Step Functions',
      type: 'aws',
    },
    {
      name: 'CloudWatch',
      type: 'aws',
    },
  ];

  return (
    <Box h={'90vh'}>
      <Box
        h={'10vh'}
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
        h={'80vh'}
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
          Sofware Developer
        </Heading>
        <Heading as="p" size={'md'} fontWeight={'300'}>
          Apasionado por el desarrollo y la tecnología 👨‍💻
        </Heading>
        <Heading as="p" size={'md'} fontWeight={'300'}>
        Me encanta resolver problemas y desarrollar soluciones que no solo cumplan con su propósito, sino que también lo hagan de la manera más óptima ✨
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
