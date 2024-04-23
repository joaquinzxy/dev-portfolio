import { Card, CardBody, CardHeader, Heading, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

export const CurrentCard = ({ status }) => {
  const { title, at, position } = status;

  
  return (
    <Card width={['100%', '100%', '40%', '40%', '40%']} mt={'2rem'} bgColor={useColorModeValue('gray.100', '#15171c')}>
      <CardHeader pb={0}>
        <Heading size="md">{title}</Heading>
      </CardHeader>
      <CardBody>
      <Heading size="sm">{at}</Heading>
        <p>{position}</p>
      </CardBody>
    </Card>
  );
};
