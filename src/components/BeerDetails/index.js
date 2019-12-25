import React from 'react';

import { BeerDetail } from './styles';

export default function BeerDetails(props) {
  return (
    <BeerDetail>
      <div>
        <img width="100%" height="100%" src={props.src} alt="Beer" />
      </div>

      <div>
        <strong>{props.name}</strong>
        <span>{props.tagline}</span>
      </div>
    </BeerDetail>
  );
}
