import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 4px;
`;

export const BeerDetails = styled.div`
  width: 100%;
  display: flex;
  flex: row;

  img {
    height: 300px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }
`;
