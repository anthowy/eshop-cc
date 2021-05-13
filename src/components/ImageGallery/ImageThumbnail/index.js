import React from 'react';
import Image from 'gatsby-image';

export default function ImageThumbnail({ isActive, onClick, image }) {
  const handleClick = () => {
    onClick(image);
  };

  return (
    <div className="mr-1 mb-1" onClick={handleClick} isActive={isActive}>
      <Image className="produit-image-thumb block w-2" fluid={image.localFile.childImageSharp.fluid} /> 
                    </div>
               
  );
}
