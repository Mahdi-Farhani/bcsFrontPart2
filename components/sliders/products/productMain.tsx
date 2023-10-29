import A11y from "swiper";
import Pagination from "swiper";
import Scrollbar from "swiper";
import Navigation from "swiper";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fragment } from "react";
import Link from "next/link";
import { ProductCardVertical } from "@/components/common/card/product/vertical/productCardVertical";
import { SliderArrow } from "@/public/icons/icons/svg/slider/navigation";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import data :
// import Css :
import style from "./productMain.module.css";

export const ProductMainSlider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={4}
      pagination={{ clickable: true }}
      className={style.mainSliderBlog}
      navigation={{ nextEl: "#my-next-button", prevEl: "#my-prev-button" }}
    >
      {/* {
                productData.map((productData) => (
                    <SwiperSlide key={productData.id}>
                        <ProductCardVertical
                            mainPic={productData.mainPic}
                            title={productData.title}
                            href={productData.href}
                            alt={productData.alt}
                            bookMarkA={false}
                        />
                    </SwiperSlide>)
                )
            } */}
      <SliderArrow id="my-next-button" className={style.nextButton} />
      <SliderArrow id="my-prev-button" className={style.prevButton} />
    </Swiper>
  );
};
