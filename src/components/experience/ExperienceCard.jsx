import { Box, Heading, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

export const ExperienceCard = ({ experience = {} }) => {
  const { title, company, date, description, status } = experience;

  return (
    <Box display={'flex'} mt={'2rem'} gap={'2rem'}>
      <Box w={'20%'} color={useColorModeValue('gray.800','gray.300')} textAlign={'right'}>
        <Heading size={'sm'}  fontFamily={'Px-Grotesk'}  fontWeight={300}>{date}</Heading>
        {
            status && <Heading size={'xs'} mt={'0.3rem'} mb={'1rem'} fontFamily={'Px-Grotesk'} fontWeight={300}>{status}</Heading>
        }
      </Box>
      <Box w={'80%'}>
        <Heading size={'md'} style={{color: useColorModeValue('#00c899', '#00f7be')}}>{title}</Heading>
        <Heading size={'sm'} mt={'0.3rem'} mb={'1rem'} fontWeight={400}>{company}</Heading>
        <p>
          {description}
        </p>
      </Box>
    </Box>
  );
};
