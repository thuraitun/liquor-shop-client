import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import { useSuspenseQuery } from "@tanstack/react-query";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { makeGetBanners } from "../../../api/banners/get-banners.api";

export const HomeSlider = () => {
  const { data: banners } = useSuspenseQuery(
    makeGetBanners({ is_active: true }),
  );

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
      {banners?.results?.map((banner) => (
        <Carousel.Slide key={banner.id}>
          <Image
            src={banner.image_url}
            alt={`Slide ${banner.id}`}
            height={300}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
