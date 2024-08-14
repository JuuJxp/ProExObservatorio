import styled from 'styled-components';
import { responsiveHeight as rh, responsiveFontSize as rf, responsiveWidth as rw} from '../../utils/responsiveUtils';
import { Button } from '../../pages/Contato/style';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: ${rw(25)};
  border-radius: ${rf(10)};
  max-width: 80%;
  height: 90%;
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
`;

export const ModalImage = styled.img`
  width: 60%;
  height: 90%;
  border-radius: 8px;
  margin-right: ${rw(15)};
  object-fit: contain;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: ${rh(20)};
  right: ${rw(30)};
  background: none;
  color: #02203A;
  font-size: ${rf(25)};
  font-weight: bold;
  border: none;
  cursor: pointer;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 50%;
  height: 70%
`;

export const Title = styled.h2`
  color: #02203A;
  font-size: ${rf(25)};
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  color: #3BA6D7;
  font-size: ${rf(20)};
`;

export const CenterButton = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
  width: 100%;
`;

export const ButtonModal = styled.button`
    font-size: ${rf(18)};
    color: white;
    background-color: #02203A;
    width: 50%;
    padding-block: ${rh(18)};
    border: none;
    border-radius: ${rw(12)};
    transition: background-color 0.3s;
    cursor: pointer;
    &:hover{
        background-color: #164369
    }
`;

export const Bc = styled.span`
  color: black;
`;