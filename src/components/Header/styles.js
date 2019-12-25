import styled from 'styled-components';
import { Link as Links } from 'react-router-dom';

export const Link = styled(Links).attrs(props => ({
  to: props.to,
}))`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
`;

export const Title = styled.h1`
  color: white;
  font: 42px Roboto, sans-serif;
`;
