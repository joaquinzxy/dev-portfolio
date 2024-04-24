import React from 'react';
import { Header } from '../components/header/Header';
import { About, Contact, Experience, Hero } from '../components/sections';
import { Box } from '@chakra-ui/react';
import { Studies } from '../components/sections/Studies';

export const Home = () => {

  return (
    <Box paddingLeft={'10%'} paddingRight={'10%'} display={'flex'} flexDir={'column'} gap={'5rem'}>
      {/* <Header /> */}
      <Hero />
      <About />
      <Experience />
      <Studies/>
      <Contact />
    </Box>
  );
};
