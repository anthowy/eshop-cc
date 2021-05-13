import styled from 'styled-components';

export const ImageThumbnailWrapper = styled.div`
 > cursor: pointer;
  border: 0px solid ${props => (props.isActive ? 'blue' : '#eee')};
  width: 100px;

  >img {
    display:block
    width:100px;
    height:100px;
  }
`;

