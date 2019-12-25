import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import { Container } from './styles';
import BeerDetails from '../../components/BeerDetails';

function Beer(props) {
  const { beer } = props;

  return (
    <Container>
      {beer && (
        <BeerDetails
          src={beer.image_url}
          name={beer.name}
          tagline={beer.tagline}
        />
      )}
    </Container>
  );
}

const mapStateToProps = state => ({
  beer: state.beer.beer,
});

export default connect(mapStateToProps)(Beer);
