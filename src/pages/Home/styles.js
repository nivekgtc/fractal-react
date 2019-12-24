import styled from 'styled-components';
import { darken } from 'polished';

export const Text = styled.p`
  color: white;
  text-align: center;
  font: 14px;
`;

export const BeerList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  li {
    display: flex;
    width: 210px;
    height: 290px;
    margin: 40px;

    flex-direction: column;
    background: #fff;
    border-radius: 5px;
    padding: 20px;
    margin: 10px;

    img {
      align-self: center;
      max-width: 250px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 19px;
      font-weight: bold;
      margin: 5px 0 10px;
    }

    button {
      background-color: #088a85;
      height: 20%;
      border: 0;
      border-radius: 5px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#088A85')};
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
