import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export const HomeSlider = () => {
  const banners = [
    {
      id: 1,
      image: "/images/slideone.jpg",
    },
    {
      id: 2,
      image: "/images/slidetwo.jpg",
    },
    {
      id: 3,
      image: "/images/slidethree.jpg",
    },
  ];

  const autoplay = useRef(Autoplay({ delay: 3000 }));
  return (
    <Carousel
      withIndicators
      height={300}
      emblaOptions={{
        loop: true,
      }}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={() => autoplay.current.play()}
    >
      {banners.map((banner) => (
        <Carousel.Slide key={banner.id}>
          <Image src={banner.image} alt={`Slide ${banner.id}`} height={300} />
        </Carousel.Slide>
      ))}
      {/* ...other slides */}
    </Carousel>
  );
};
