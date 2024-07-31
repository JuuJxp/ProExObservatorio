import styled from "styled-components";
import { responsiveHeight as rh, responsiveFontSize as rf, responsiveWidth as rw} from "../../utils/responsiveUtils";

export const Title = styled.div`
    text-align: center;
    color: #3BA6D7;
    font-size: ${rf(25)};
    margin-block: ${rh(30)};
    font-weight: 500;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-inline: ${rw(50)};
    font-size: ${rf(20)};
    font-weight: 500;
`;

export const Imagem = styled.img`
    border-radius: 50%;
    width: ${rw(200)};
    height: ${rw(200)};
    margin-bottom: ${rh(12)};
`;

export const Linhas = styled.div`
    margin-block: ${rh(30)};
    display: flex;
    flex-direction: column;
`;

export const Linha = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: ${rh(20)};
`;

export const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${rh(20)};
  width: 100%;
  justify-content: space-between;
`;