import { MainCartBlog } from "@/components/common/card/mainBlog/mainBlog";
import { Pagination, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
// import Css :
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import style from "./newsPage.module.css";
export const NewsPageSlider = () => {
  const [slidesPerView, setSlidesPerView] = useState(4);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const screenWidth = window.innerWidth;
      if (screenWidth < 1300) {
        setSlidesPerView(3);
      }
      if (screenWidth < 992) {
        setSlidesPerView(2);
      }
      if (screenWidth < 786) {
        setSlidesPerView(2);
      }
      if (screenWidth < 450) {
        setSlidesPerView(2);
      }
      if (screenWidth < 200) {
        setSlidesPerView(2);
      }
    }
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 1300) {
        setSlidesPerView(4);
      }
      if (screenWidth < 1300) {
        setSlidesPerView(3);
      }
      if (screenWidth < 992) {
        setSlidesPerView(2);
      }
      if (screenWidth < 786) {
        setSlidesPerView(2);
      }
      if (screenWidth < 450) {
        setSlidesPerView(2);
      }
      if (screenWidth < 200) {
        setSlidesPerView(2);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <></>
    // <div className={style.allSlider}>
    //   <Swiper
    //     effect={"coverflow"}
    //     grabCursor={true}
    //     centeredSlides={true}
    //     slidesPerView={slidesPerView}
    //     coverflowEffect={{
    //       rotate: 50,
    //       stretch: 0,
    //       depth: 100,
    //       modifier: 1,
    //       slideShadows: false,
    //     }}
    //     pagination={true}
    //     modules={[EffectCoverflow, Pagination]}
    //     className={style.mySwiper}
    //   >
    //     {blogData.map((blogData) => (
    //       <SwiperSlide key={blogData.id} className={style.slides}>
    //         {/* <MainCartBlog
    //                             mainPic={blogData.mPhoto}
    //                             title={blogData.title}
    //                             year={blogData.year}
    //                             month={blogData.month}
    //                             day={blogData.day}
    //                             href={blogData.href}
    //                             alt={blogData.title}
    //                         /> */}
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </div>
  );
};
