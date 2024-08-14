import styled from "styled-components";
import { responsiveHeight as rh, responsiveFontSize as rf, responsiveWidth as rw} from "../../utils/responsiveUtils";
import { Imagem, Linha } from "../LinhasDePesquisa/style";

export const Label = styled.span`
    word-wrap: break-word;
    text-align: center;
    max-width: ${rw(200)}; // Limita a largura do texto para evitar que ele quebre o layout
    margin-bottom: ${rh(8)};
`;

export const Img = styled(Imagem)`
    cursor: default;
    object-fit: cover;
`;