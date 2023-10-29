import { useState } from "react";
import style from "./newsIdSlider.module.css";
import SwiperCore from "swiper";
import { Thumbs, FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import { GLOBAL_APIURL } from "@/constant/globalUrl";

export const NewsIdSlider = ({ photos }: { photos: string[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  return (
    <div className={style.allNewsPicSlider}>
      <Swiper
        // install Swiper modules
        spaceBetween={5}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className={style.newsPicSlider}
      >
        {photos &&
          photos.map((data, index) => (
            <SwiperSlide key={index}>
              <Image
                className={style.mainImage}
                src={`${GLOBAL_APIURL}/newsPhotosSub/${data}`}
                alt={`picture-${index}`}
                width={1920}
                height={1080}
              />
            </SwiperSlide>
          ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={5}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={style.newsPicSlider}
      >
        {photos &&
          photos.map((data, index) => (
            <SwiperSlide key={index}>
              <Image
                className={style.mainImage}
                src={`${GLOBAL_APIURL}/newsPhotosSub/${data}`}
                alt={`picture-${index}`}
                width={1920}
                height={1080}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
