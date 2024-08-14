import React from 'react';
import { CloseButton, ModalContent, ModalImage, ModalOverlay, InfoContainer, Title, Subtitle, CenterButton, ButtonModal, Bc } from './style';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  image?: string;
  title?: string;
  date: string;
  author?: string;
  link?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, image, title, date, author, link }) => {
  if (!isOpen) return null;
  const handleClick = (link?: string) => {
    if (link) {
      window.location.href = link;
    }
  };
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>X</CloseButton>
        <ModalImage src={image} alt={title} />
        <InfoContainer>
          <Title>{title}</Title>
          <Subtitle>Autor(a): <Bc> {author} </Bc></Subtitle>
          <Subtitle>Data: <Bc>{date}</Bc></Subtitle>
          <CenterButton>
            <ButtonModal onClick={() => handleClick(link)}>Saiba mais</ButtonModal>
          </CenterButton>
        </InfoContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
