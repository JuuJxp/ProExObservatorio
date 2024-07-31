import styled from "styled-components";
import { responsiveHeight as rh, responsiveFontSize as rf, responsiveWidth as rw } from "../../utils/responsiveUtils";

export const Input = styled.input`
    width: 100%;
    padding-block: ${rh(15)};
    box-shadow: 2px 3px 4px rgba(0,0,0,0.2);
    background-color: #eaeaea;
    border: none;
    padding-left: ${rw(15)};
    box-sizing: border-box;
    font-size: ${rf(16)};
`;

export const InputMessage = styled(Input)`
    padding-bottom: ${rh(120)};
`;

export const Label = styled.span`
    color: #02203A;
    margin-bottom: ${rw(6)};
    font-size: ${rf(16)};
`;

export const ButtonWrapper = styled.div`
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.button`
    font-size: ${rf(18)};
    color: white;
    background-color: #02203A;
    margin-block: ${rw(30)};
    width: 20%;
    padding-block: ${rh(18)};
    border: none;
    border-radius: ${rw(12)};
    transition: background-color 0.3s;
    cursor: pointer;
    &:hover{
        background-color: #164369
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-inline: ${rw(120)};
    justify-content: space-around;
    align-items: center;
    font-weight: 500;
    width: 100%;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin-bottom: ${rh(20)};
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-inline: ${rw(30)};
    flex: 1;
`;
