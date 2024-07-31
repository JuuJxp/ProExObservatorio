import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CarouselContainer, CarouselItem, Image, Info, Subtitle, Title } from './style';
import Slider from 'react-slick';

interface CarouselProps {
  items: {
    image: string;
    date: string;
    title?: string;
    author?: string;
  }[];
  showOnlyTitle?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ items, showOnlyTitle = false }) => {
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
    <CarouselContainer>
      <Slider {...settings}>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <Image src={item.image} alt={`Slide ${index + 1}`} />
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
  );
};

export default Carousel;
