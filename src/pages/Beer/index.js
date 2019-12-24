import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import { Container, BeerDetails } from './styles';

function Beer(props) {
  const { beer } = props;

  return (
    <Container>
      {beer && (
        <BeerDetails>
          <div>
            <img width="100%" height="100%" src={beer.image_url} alt="Beer" />
          </div>

          <div>
            <strong>{beer.name}</strong>
            <span>{beer.tagline}</span>
          </div>
        </BeerDetails>
      )}
    </Container>
  );
}

const mapStateToProps = state => ({
  beer: state.beer.beer,
});

export default connect(mapStateToProps)(Beer);
