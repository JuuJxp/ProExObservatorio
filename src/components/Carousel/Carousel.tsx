import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CarouselContainer, CarouselItem, Image, Info, Placeholder, Subtitle, SubtitlePlaceholder, Title, TitlePlaceholder } from './style';
import Slider from 'react-slick';
import Modal from '../Modal';

// propriedades do carrossel
interface CarouselProps {
  items: {
    image?: string;
    date: string;
    title?: string;
    author?: string;
    link?: string;
  }[];
  showOnlyTitle?: boolean;
  showModal?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ items, showOnlyTitle = false, showModal = false }) => {
  const handleClick = (item: { image?: string; date: string; title?: string; author?: string; link?: string }) => {
    // se o item.link existir, necessita do redirecionamento de página
    if (item.link && !showModal) {
      window.location.href = item.link;
    }
    // se showModal for true, o carrossel precisa abrir o modal de informações (mapas e graficos)
    if(showModal){
      setSelectedItem(item);
    }
  };

  // fecha o modal.
  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  // O item selecionado deve receber as coisas que ele ira mostrar no modal, que deve ser o mesmo tipo passado no componente
  const [selectedItem, setSelectedItem] = useState<{
    image?: string;
    date: string;
    title?: string;
    author?: string;
    link?: string;
  } | null>(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: Math.min(items.length, 3),
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(items.length, 2),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: Math.min(items.length, 1),
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
    <CarouselContainer>
      <Slider {...settings}>
        {items.map((item, index) => (
          <CarouselItem key={index} onDoubleClick={() => handleClick(item)}>
            {item.image ? (
              <Image src={item.image} alt={`Slide ${index + 1}`} />
            ) : (
              <Placeholder onDoubleClick={() => handleClick(item)}>
                <TitlePlaceholder>{item.title}</TitlePlaceholder>
                <SubtitlePlaceholder>{item.author}</SubtitlePlaceholder>
              </Placeholder>
            )}
            <Info>
              <Title>{item.date}</Title>
              {!showOnlyTitle && (
                <>
                  <Subtitle>{item.title}</Subtitle>
                  <Subtitle>{item.author}</Subtitle>
                </>
              )}
            </Info>
          </CarouselItem>
        ))}
      </Slider>
    </CarouselContainer>
    {selectedItem && (
      <Modal
        isOpen={!!selectedItem}
        onClose={handleCloseModal}
        image={selectedItem.image}
        title={selectedItem.title}
        date={selectedItem.date}
        author={selectedItem.author}
        link={selectedItem.link}
      />
    )}
    </>
  );
};

export default Carousel;
