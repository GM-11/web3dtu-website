import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Carousel = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      autoplay={{ delay: 1500, disableOnInteraction: false }}
    >
      <SwiperSlide>
        <img src="/carousel_image1.jpg" alt="img1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/carousel_image2.jpg" alt="img2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/carousel_image3.jpg" alt="img3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/carousel_image4.jpg" alt="img4" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/carousel_image5.jpg" alt="img5" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/carousel_image6.jpg" alt="img6" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
