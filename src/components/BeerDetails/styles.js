import styled from 'styled-components';

export const BeerDetail = styled.div`
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
