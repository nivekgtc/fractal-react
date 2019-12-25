import React from 'react';

import { connect } from 'react-redux';

import { BeerList } from './styles';
import BeerItem from '../../components/BeerItem';

function Home(props) {
  const { beers } = props;

  return (
    <BeerList>
      {beers &&
        beers.map((beer, index) => (
          <BeerItem
            key={index}
            name={beer.name}
            tagline={beer.tagline}
            src={beer.image_url}
            id={beer.id}
          />
        ))}
    </BeerList>
  );
}

const mapStateToProps = state => ({
  beers: state.beer.beers,
});

export default connect(mapStateToProps, null)(Home);
