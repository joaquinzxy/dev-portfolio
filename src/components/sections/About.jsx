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
          Desde Uruguay y con 25 añitos, soy un desarrollador de software que
          disfruta viajar y conocer distintos puntos de vista. Tengo un lado
          nerd que se desvela más de lo que debería en algunas ocasiones, cuando
          encuentra herramientas que sirven para soluciones que aún no tengo;
          pero también el lado social que disfruta mucho de ir a la oficina para
          compartir con pares y crecer de forma continua, ayudándonos
          mutuamente.
        </p>
        <p>
          Creo que lo lindo que tiene este sector es que las soluciones y los
          procesos pueden ser refinados tanto como uno tenga curiosidad (o hasta
          que finalice el sprint), y eso es algo que me encanta: la posibilidad
          de la mejora y aprendizaje continuo mientras ofrecemos soluciones que
          pueden ayudar a una persona o a miles.
        </p>
        <p>
          Encuentro que es un área en la que es importante ser exigido para
          poder crecer, pero también es esencial estar rodeado de un buen equipo
          que nos pueda guiar para maximizar el aprendizaje y minimizar las
          caídas en producción. Estas dos cosas que mencioné, exigencia y buen
          acompañamiento, hoy día son cosas que me parecen intranzables en
          cualquier grupo de trabajo, sumado a que nos den lugar a expresar
          nuestras ideas y aportar tanto en lo técnico como en lo humano del
          equipo, creo que es la receta para no solo un buen ambiente laboral
          sino también generar productos de alto valor.
        </p>
        <p>
          Actualmente me encuentro estudiando en la Universidad ORT ya que estoy
          en busca de desarrollar mi pensamiento lógico y técnico. A veces con
          los tiempos ajustados de los sprints, es complicado dedicarle tiempo a
          las bases de la programación y esto me parece fundamental, ya que si
          bien soy fan de entregar soluciones de forma rápida, también me parece
          esencial que sean robustas, escalables y mantenibles.
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
