import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Title } from './styles';

export default function Header(props) {
  return (
    <Container>
      <Link to="/">
        <Title>BEERS</Title>
      </Link>
    </Container>
  );
}
