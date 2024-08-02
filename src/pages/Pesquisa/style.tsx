import styled from 'styled-components';
import { responsiveHeight as rh, responsiveWidth as rw, responsiveFontSize as rf } from '../../utils/responsiveUtils';
import arrow from '../../assets/sinal-de-seta-para-baixo-para-navegar (1).png'
import { Input, InputWrapper } from '../Contato/style';

export const SELECT = styled.select`
    border-radius: ${rf(8)};
    width: 100%; 
    box-sizing: border-box;
    padding-block: ${rh(15)};
    box-shadow: 2px 3px 4px rgba(0,0,0,0.2);
    background-color: #eaeaea;
    border: none;
    padding-left: ${rw(15)};
    box-sizing: border-box;
    font-size: ${rf(16)};

    // Mudando aparência da seta.
    appearance: none;
    background-image: url(${arrow});
    background-size: ${rf(15)};
    background-repeat: no-repeat;
    background-position: right ${rw(25)} center;
    
    &:focus {
        outline: none;
    }
`;
export const InputResearch = styled(Input)`
    padding-inline: ${rw(15)};
    width: ${rw(800)};
`;

export const SearchIcon = styled.div`
    position: absolute;
    left: 92%;
    top: 55%;
    transform: translateY(-50%);
    font-size: ${rf(19)};
    color: #3ba6d7;
`;

export const Container = styled.div`
    padding-inline: ${rw(20)};
    font-weight: 500;
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: ${rh(20)};
`;

export const FilterTag = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #eaeaea; 
    color: #02203a;
    width: fit-content;
    padding: ${rw(8)};
    border-radius: ${rf(5)};
    margin: ${rh(20)} ${rw(20)};
`;
export const Flexend = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: ${rw(80)}
`;

export const ClearButton = styled.span`
    background: none;
    border: none;
    color: #3ba6d7;
    font-size: ${rf(20)};
    cursor: pointer;
    margin-left: ${rw(10)};
    
    &:hover {
        color: #ff4d4d;
    }
`;