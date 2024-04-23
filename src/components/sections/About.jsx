import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { CurrentCard } from '../about/CurrentCard';

export const About = () => {
  const currentStatus = [
    {
      title: 'Trabajo',
      at: 'Cencosud',
      position: 'Backend Software Developer',
    },
    {
      title: 'Estudio',
      at: 'Universidad ORT Uruguay',
      position: 'Analista en Tecnologías de la Información',
    },
  ];

  return (
    <Box>
      <Box gap={'1.5rem'} display={'flex'} flexDir={'column'}>
        <Heading size={'lg'} fontFamily={'Px-Grotesk'}>
          🙋‍♂️ About me
        </Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          distinctio velit sequi voluptatum vel consequuntur voluptatem,
          temporibus rerum hic eveniet, mollitia odio reiciendis, odit nemo
          voluptas deserunt iusto magnam! Architecto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          quaerat voluptatibus, modi vel quasi rem debitis expedita quae earum
          sequi hic quas harum, placeat ipsam ipsum veniam, omnis consequatur
          repudiandae?
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quaerat voluptatibus, modi vel quasi rem debitis expedita quae earum sequi hic quas harum, placeat ipsam ipsum veniam, omnis consequatur repudiandae?
        </p>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        flexWrap={'wrap'}
        mt={'2rem'}
      >
        {currentStatus.map((status, i) => (
          <CurrentCard status={status} key={i} />
        ))}
      </Box>
    </Box>
  );
};
