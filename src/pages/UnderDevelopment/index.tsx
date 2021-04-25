import React from 'react';

import { Strings } from './strings';
import { Container, Title } from './styles';

const UnderDevelopment: React.FC = () => {
  return (
    <Container>
      <Title>{Strings.TITLE}</Title>
    </Container>
  );
};

export default UnderDevelopment;
