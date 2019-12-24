import React, { useState, useMemo, useEffect } from 'react';

import { connect, useDispatch } from 'react-redux';
import { FaBeer } from 'react-icons/fa';
import { Creators as BeerActions } from '../../store/ducks/beer';

import { BeerList, Text } from './styles';

function Home(props) {
  const dispatch = useDispatch();
  const { beers } = props;

  function seeDetails(id) {
    const { getBeerDetailsRequest } = BeerActions;
    dispatch(getBeerDetailsRequest(id));
  }

  return (
    <BeerList>
      {beers &&
        beers.map((beer, index) => (
          <li key={index}>
            <img width="100" height="100" src={beer.image_url} alt="Beer" />
            <span>{beer.name}</span>
            <strong>{beer.tagline}</strong>
            <button type="button" onClick={() => seeDetails(beer.id)}>
              <div>
                <FaBeer size={16} color="#FFF" />
                <Text>DETALHES</Text>
              </div>
            </button>
            {/* nome, tagline, descrição e imagem. */}
          </li>
        ))}
    </BeerList>
  );
}

const mapStateToProps = state => ({
  beers: state.beer.beers,
});

export default connect(mapStateToProps, null)(Home);
