import { Pagination, Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MainCartBlog } from "@/components/common/card/mainBlog/mainBlog";
import { SliderArrow } from "@/public/icons/icons/svg/slider/navigation";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import data :
// import Css :
import style from "./suggestion.module.css";

export const SuggestionSlider = () => {
  return (
    <></>
    // <Swiper
    //     // install Swiper modules
    //     modules={[Navigation, Pagination, Scrollbar, A11y]}
    //     slidesPerView={4}
    //     pagination={{ clickable: true }}
    //     className={style.mainSliderBlog}
    //     navigation={{ nextEl: '#my-next-button', prevEl: '#my-prev-button' }}
    // >
    //     {
    //         blogData.map((blogData) => (
    //             <SwiperSlide key={blogData.id}>
    //                 {/* <MainCartBlog
    //                     mainPic={blogData.mPhoto}
    //                     title={blogData.title}
    //                     year={blogData.year}
    //                     month={blogData.month}
    //                     day={blogData.day}
    //                     href={blogData.href}
    //                     alt={blogData.title}
    //                 /> */}
    //             </SwiperSlide>)
    //         )
    //     }
    //     <SliderArrow id="my-next-button" className={style.nextButton} />
    //     <SliderArrow id="my-prev-button" className={style.prevButton} />
    // </Swiper >
  );
};
