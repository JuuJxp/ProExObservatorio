import styled from 'styled-components';
import { responsiveWidth as rw, responsiveHeight as rh, responsiveFontSize as rf} from '../../utils/responsiveUtils';

export const CarouselContainer = styled.div`
  width: 100%;
  padding-inline: ${rw(30)};
  padding-bottom: ${rh(30)};
`;

export const CarouselItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${rw(15)};
`;

export const Image = styled.img`
  width: 100%;
  height: ${rh(400)};
  border-radius: ${rw(15)};
`;

export const Info = styled.div`
  text-align: flex-start;
  margin-top: ${rh(10)};
  text-align: center;

`;

export const Title = styled.h3`
  color: #02203a;
  font-size: ${rf(22)};
`;

export const Subtitle = styled.p`
  font-size: ${rf(16)};
  margin-top: ${rh(10)};
  color: gray;
`;
