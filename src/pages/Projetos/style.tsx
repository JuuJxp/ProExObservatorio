import styled from "styled-components";
import { responsiveHeight as rh, responsiveFontSize as rf, responsiveWidth as rw} from "../../utils/responsiveUtils";

export const Subtitle = styled.div`
    text-align: center;
    color: #02203a;
    font-size: ${rf(18)};
    font-weight: 500;
    margin-top: -${rh(30)};
    border-bottom: 1px solid #02203a;
    width: fit-content;
`;
export const NuvemTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;