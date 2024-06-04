import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import peer from "../assets/peer.svg";

const Carousel = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
    >
      <SwiperSlide>
        <img src={peer} alt="peer" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={peer} alt="peer" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={peer} alt="peer" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={peer} alt="peer" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={peer} alt="peer" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={peer} alt="peer" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
