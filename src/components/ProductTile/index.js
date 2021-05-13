import React from 'react';
import Img from 'gatsby-image';
import { StyledLink } from '../StyledLink';
import styled from "styled-components"


const StyledImg = styled(Img)`
@media screen and ( max-width: 1024px ) {
  width: auto; 
  }
  display: block;
  width: 250px;
  height:250px;
`

export function ProductTile({
  title,
  imageFluid,
  minPrice,
  handle,
}) {
  return (
    <div className=" mb-5 mr-5 hover:opacity-80">
      <StyledLink to={`/produits/${handle}`}>
      <StyledImg  fluid={imageFluid} />
      <div className="bg-white">
      <div className=" title-article title-article-list DancingScript text-2xl md:text-xl  h-auto  md:mb-2">
      {title}
      </div>
      <div className=" mt-3 md:mt-0 md:m-auto  couleurboutique text-l">{parseFloat(minPrice).toFixed(2)}€
      </div>
      </div>
      </StyledLink>
      </div>
  );
}
