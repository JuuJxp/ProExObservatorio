import styled from "styled-components";
import {responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf } from '../../utils/responsiveUtils';

export const Container = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    height: ${rh(150)};
    background-color: #02203a;
    font-size: ${rf(15)};
    padding-inline: ${rw(250)}; 
    padding-block: ${rh(10)};
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    font-size: ${rf(18)};
    width: -webkit-fill-available;
    margin-block: ${rh(20)};
    font-weight: 600;
`;
export const WhiteColor = styled.span`
    color: white;
`;
export const SecondaryColor = styled.span`
    color: #3ba6d7;
`;

export const Menu = styled.div`
    height: ${rh(45)};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding-inline: ${rw(70)};
    background-color: rgba(2, 32, 58, 0.9);
    position: relative;
`;

export const MenuItem = styled.div`
  position: relative;
  cursor: pointer;
  padding: ${rf(10)};
  color: white;

  &:hover .modal {
    display: block;
  }
`;

export const Modal = styled.div`
  display: none;
  position: absolute;
  top: 85%;
  left: 0;
  width: ${rw(200)};
  background-color: rgba(2, 32, 58, 0.9);
  color: white;
  padding-block: ${rh(8)};
  padding-left: ${rw(15)};
  border-radius: 0px 0px ${rf(5)} ${rf(5)};
  z-index: 10;
  ${MenuItem}:hover & {
    display: block;
  }
`;

export const Item = styled.p`
  margin-bottom: ${rh(10)};
  cursor: pointer;
`;

export const SubMenu = styled(Modal)`
  top: 0;
  left: 100%;
  padding-right: ${rw(6)};
  padding-block: ${rh(6)};
`;

export const SubMenuItem = styled.div`
  margin-bottom: ${rh(10)};
  cursor: pointer;
`;

export const Logo = styled.img`
  cursor: pointer;
`;

export const ItemWrapper = styled.div`
  display: flexx;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;