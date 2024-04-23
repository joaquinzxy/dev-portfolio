import React from 'react';
import { Header } from '../components/header/Header';
import { About, Contact, Experience, Hero } from '../components/sections';
import { Box } from '@chakra-ui/react';
import { Studies } from '../components/sections/Studies';

export const Home = () => {

  return (
    <Box paddingLeft={'8rem'} paddingRight={'8rem'} display={'flex'} flexDir={'column'} gap={'5rem'}>
      {/* <Header /> */}
      <Hero />
      <About />
      <Experience />
      <Studies/>
      <Contact />
    </Box>
  );
};
