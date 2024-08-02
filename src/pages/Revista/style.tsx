import styled from "styled-components";
import { responsiveHeight as rh, responsiveFontSize as rf, responsiveWidth as rw} from "../../utils/responsiveUtils";
import { Button } from "../Contato/style";
import { Image } from "../../components/Carousel/style";

export const RevistaWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-inline: ${rw(50)};
    margin-block: ${rh(30)};
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
`;
export const Span = styled.div`
    width: 30%;
    font-size: ${rf(20)};
    line-height: ${rf(35)};
    text-align: justify;
`;

export const Buttons = styled(Button)`
    width: 70%;
`;
export const ImageExtra = styled(Image)`
    width: 30%;
`;