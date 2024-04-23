import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

export const ExperienceCard = ({ experience = {} }) => {
  const { position, company, dates, description, status } = experience;

  return (
    <Box display={'flex'} mt={'2rem'} gap={'2rem'}>
      <Box w={'20%'} color='gray.300' textAlign={'right'}>
        <Heading size={'sm'}  fontFamily={'Px-Grotesk'}  fontWeight={300}>{dates}</Heading>
        {
            status && <Heading size={'xs'} mt={'0.3rem'} mb={'1rem'} fontFamily={'Px-Grotesk'} fontWeight={300}>{status}</Heading>
        }
      </Box>
      <Box w={'80%'}>
        <Heading size={'md'}>{position}</Heading>
        <Heading size={'sm'} mt={'0.3rem'} mb={'1rem'} fontWeight={400}>{company}</Heading>
        <p>
          {description}
        </p>
      </Box>
    </Box>
  );
};
