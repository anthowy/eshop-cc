import styled from 'styled-components';
import { StyledLink } from '../StyledLink';

export const ProductTileWrapper = styled.div`
  border: 1px solid #ddd;


  > ${StyledLink} {
    border: 1px solid black;
    text-decoration: none;
    display: block;
    padding: 10px;
    text-align: center;
    font-weight: bold;
    color: black;
  }
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 20px;

`;

export const Description = styled.div`
  color: #999;
  text-align: left;
  padding: 0 20px 10px 20px;
`;

export const Price = styled.div`
  font-style: italic;
  font-weight: bold;
`;
