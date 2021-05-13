import React from 'react';
import { Title, Price } from './styles';
import Img from 'gatsby-image';
import { StyledLink } from '../StyledLink';
import styled from "styled-components"


const StyledImg = styled(Img)`
@media screen and ( max-width: 1024px ) {
  width: auto; 
  }
  display: block;
  margin: 0 auto;
  width: 250px;
  height:250px;
`

export function AtelierTile({
  title,
  imageFluid,
  minPrice,
  handle,
}) {
  return (
    <div className=" mb-5 mr-5 hover:opacity-80">
      <StyledLink to={`/ateliers/${handle}`}>
      <div className="relative w-full pb-full">
      <StyledImg  fluid={imageFluid} />
      </div>
      <div className="bg-white">
      <div className=" title-article DancingScript h-10 md:h-20">
      <Title>{title}</Title>
      </div>
      <div className="mt-3 md:mt-0 couleuratelier text-l">
      <Price>{parseFloat(minPrice).toFixed(2)} €</Price>
      </div>
      </div>
      </StyledLink>
      </div>
  );
}
