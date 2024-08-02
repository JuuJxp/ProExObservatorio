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
  max-width: 400px;
  box-sizing: border-box;
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

export const TitlePlaceholder = styled.span`
  color: #3ba6b7;
  font-weight: 500;
  font-size: ${rf(18)};
`;

export const Subtitle = styled.p`
  font-size: ${rf(16)};
  margin-top: ${rh(10)};
  color: #808080;
`;

export const SubtitlePlaceholder = styled.span`
  font-size: ${rf(16)};
  color: #33333;
  margin-top: ${rh(15)};
  font-weight: 500;
`;

export const Placeholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${rh(400)};
  background-color: #eeeeef;
  border-radius: ${rw(15)};
  text-align: center;
  padding: ${rw(45)};
  padding-inline: ${rw(30)};
  box-sizing: border-box;
  color: #02203a;
  font-size: ${rf(18)};
  border: 1px solid #808080;
`;