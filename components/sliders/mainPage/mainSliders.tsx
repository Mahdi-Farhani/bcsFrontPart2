import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import slide1 from "@/asset/banner/8.jpg";
import slide1en from "@/asset/banner/8en.jpg";
import slide1Ar from "@/asset/banner/8ar.jpg";
import slide2 from "@/asset/banner/7.jpg";
import slide2en from "@/asset/banner/7en.jpg";
import slide2ar from "@/asset/banner/7ar.jpg";
import slide3 from "@/asset/banner/6.jpg";
import slide3en from "@/asset/banner/6en.jpg";
import slide3ar from "@/asset/banner/6ar.jpg";
import style from "./mainSlider.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { CSSProperties } from "react";
interface SwiperProps {
  stylePagination: CSSProperties & {
    "--swiper-pagination-color": string;
    "--swiper-pagination-bullet-inactive-color": string;
    "--swiper-pagination-bullet-inactive-opacity": string;
    "--swiper-pagination-bullet-horizontal-gap": string;
  };
}
export const MainSlider: React.FC<SwiperProps> = ({ stylePagination }) => {
  const { locale } = useRouter();

  return (
    <>
      <div></div>
      <Swiper
        modules={[
          Navigation,
          Pagination,
          EffectCoverflow,
          EffectFade,
          Autoplay,
        ]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        effect={"fade"}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{ delay: 3000 }}
        className={style.allMainSlider}
        style={stylePagination}
      >
        <SwiperSlide className={style.slides}>
          {locale == "en" && (
            <Image
              className={style.imageSlider}
              src={slide1en}
              alt="page one (slider)"
            />
          )}
          {locale == "ar" && (
            <Image
              className={style.imageSlider}
              src={slide1Ar}
              alt="page one (slider)"
            />
          )}
          {locale == "fa" && (
            <Image
              className={style.imageSlider}
              src={slide1}
              alt="page one (slider)"
            />
          )}
        </SwiperSlide>
        <SwiperSlide className={style.slides}>
          {locale == "en" && (
            <Image
              className={style.imageSlider}
              src={slide2en}
              alt="page one (slider)"
            />
          )}
          {locale == "ar" && (
            <Image
              className={style.imageSlider}
              src={slide2ar}
              alt="page one (slider)"
            />
          )}
          {locale == "fa" && (
            <Image
              className={style.imageSlider}
              src={slide2}
              alt="page one (slider)"
            />
          )}
        </SwiperSlide>
        <SwiperSlide className={style.slides}>
          {locale == "en" && (
            <Image
              className={style.imageSlider}
              src={slide3en}
              alt="page one (slider)"
            />
          )}
          {locale == "ar" && (
            <Image
              className={style.imageSlider}
              src={slide3ar}
              alt="page one (slider)"
            />
          )}
          {locale == "fa" && (
            <Image
              className={style.imageSlider}
              src={slide3}
              alt="page one (slider)"
            />
          )}
        </SwiperSlide>
      </Swiper>
      {/* <SliderArrow id="my-next-button" className={style.nextButton} />
            <SliderArrow id="my-prev-button" className={style.prevButton} /> */}
    </>
  );
};
