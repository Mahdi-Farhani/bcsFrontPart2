import {
  Navigation,
  Pagination,
  A11y,
  Scrollbar,
  Autoplay,
} from "swiper/modules";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { MainCartBlog } from "@/components/common/card/mainBlog/mainBlog";
// import { SliderArrow } from '@/public/icons/icons/svg/slider/navigation';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
// import Css :
import style from "./mainSliderBlog.module.css";
import axios from "axios";
import { GLOBAL_APIURL } from "@/constant/globalUrl";
export interface News extends Document {
  _id: string;
  title: string;
  titleFa: string;
  titleAr: string;
  category: string;
  categoryFa: string;
  categoryAr: string;
  create_at: number;
  update_at?: number;
  publicationStatus: string;
  fullText: string;
  fullTextFa: string;
  fullTextAr: string;
  mainPic: string;
  isDelete: boolean;
  pics: string[];
}

export const MainSliderBlog = () => {
  const [newsData, setNewsData] = useState<News[]>([]);
  const fetchNewsData = async () => {
    try {
      const response = await axios.get(`${GLOBAL_APIURL}/api/news/newsData`);
      console.log(response, "response");

      setNewsData(response.data.newsData);
    } catch (error) {
      console.error("Error fetching news data:", error);
    }
  };
  useEffect(() => {
    fetchNewsData();
  }, []);
  const [slidesPerView, setSlidesPerView] = useState(1);
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      slidesPerView={slidesPerView}
      pagination={{ clickable: true }}
      className={style.mainSliderBlog}
      navigation
      dir="ltr"
      loop={true}
      autoplay={{ delay: 3000 }}
    >
      {newsData.map((blogData) => (
        <SwiperSlide key={blogData._id}>
          <MainCartBlog
            mainPic={blogData.mainPic}
            title={blogData.title}
            titleFa={blogData.titleFa}
            titleAr={blogData.titleAr}
            date={blogData.create_at}
            fullText={blogData.fullText}
            fullTextFa={blogData.fullText}
            fullTextAr={blogData.fullText}
            id={blogData._id}
            category={blogData.category}
            categoryFa={blogData.categoryFa}
            categoryAr={blogData.categoryAr}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
