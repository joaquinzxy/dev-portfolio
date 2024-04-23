import { Box, Button, Heading } from '@chakra-ui/react';
import { FaLinkedin } from "react-icons/fa";
import React from 'react';
import { CurrentCard } from '../about/CurrentCard';

export const Contact = () => {

  return (
    <Box mb={'8rem'}>
      <Box gap={'1.5rem'} display={'flex'} flexDir={'column'} justifyContent={'flex-start'} alignItems={'center'} textAlign={'center'}>
        <Heading size={'lg'} fontFamily={'Px-Grotesk'}>
          📬 Get in touch
        </Heading>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quaerat voluptatibus, modi vel quasi rem debitis expedita quae earum sequi hic quas harum, placeat ipsam ipsum veniam, omnis consequatur repudiandae?
        </p>
        <Button leftIcon={<FaLinkedin/>} colorScheme='blue'>Linkedin</Button>
      </Box>
    </Box>
  );
};
