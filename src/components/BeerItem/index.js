import React from 'react';

import { useDispatch } from 'react-redux';
import { Creators as BeerActions } from '../../store/ducks/beer';

import { FaBeer } from 'react-icons/fa';
import { Text, Ul } from './styles';

export default function BeerItem(props) {
  const dispatch = useDispatch();
  function seeDetails(id) {
    const { getBeerDetailsRequest } = BeerActions;
    dispatch(getBeerDetailsRequest(id));
  }

  return (
    <Ul key={props.id}>
      <img width="100" height="100" src={props.src} alt="Beer" />
      <span>{props.name}</span>
      <strong>{props.tagline}</strong>
      <button type="button" onClick={() => seeDetails(props.id)}>
        <div>
          <FaBeer size={16} color="#FFF" />
          <Text>DETALHES</Text>
        </div>
      </button>
    </Ul>
  );
}
