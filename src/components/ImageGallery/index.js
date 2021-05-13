import React from 'react';
import Img from 'gatsby-image';
import ImageThumbnail from './ImageThumbnail';
import styled from "styled-components"

const StyledImg = styled(Img)`
@media screen and ( max-width: 1024px ) {
  width: auto; 
  }
  display: block;
  width: 300px;
  height:300px;
  margin:auto;
`


export function ImageGallery({ selectedVariantImageId, images }) {
  const [activeImageThumbnail, setActiveImageThumbnail] = React.useState(
    images.find(({ id }) => id === selectedVariantImageId) || images[0]
  );

  React.useEffect(() => {
    setActiveImageThumbnail(
      images.find(({ id }) => id === selectedVariantImageId) || images[0]
    );
  }, [selectedVariantImageId, images, setActiveImageThumbnail]);

  const handleClick = image => {
    setActiveImageThumbnail(image);
  };

  return (
    <div className=" flex flex-col">
      <div className="w-11/12 md: w-full mb-2" >
        <StyledImg
        fluid={activeImageThumbnail.localFile.childImageSharp.fluid} />
      </div>
      <div className="flex flex-wrap">
        {images.map(image => {
          return (
            <ImageThumbnail
              key={image.id}
              isActive={activeImageThumbnail.id === image.id}
              onClick={handleClick}
              image={image}
            />
          );
        })}
      </div>
    </div>
  );
}
