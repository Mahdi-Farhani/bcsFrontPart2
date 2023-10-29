import { Layout } from "@/components/common/layout/mainPage/layout";
import { Search } from "@/public/icons/icons/svg/navbar/search";
// import styles:
import style from "./news.module.css";
import { Fragment, useEffect, useState } from "react";
import Pagination from "rc-pagination";
import { LeftAngle } from "@/public/icons/icons/svg/cards/blog/leftAngle";
import { RightAngle } from "@/public/icons/icons/svg/cards/blog/rightAngle";
import { CartBlog } from "@/components/common/card/mainBlog/blog/blogCart";
import dateIcon from "@/public/icons/image/icons/clock2.png";
import topic from "@/public/icons/image/blogs/topicBackGround.png";
// import img1 from "@/public/icons/image/blogs/8.jpg";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { GLOBAL_APIURL } from "@/constant/globalUrl";
import { useRouter } from "next/router";
import moment from "moment-jalaali";
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
export const NewsPage = () => {
  const [isClient, setIsClient] = useState(false);
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
    setIsClient(true);
    fetchNewsData();
  }, []);
  const [newsDataa, setNewsDataa] = useState<News[]>([]);
  const fetch3NewsData = async () => {
    try {
      const response = await axios.get(`${GLOBAL_APIURL}/api/news/mainNews`);
      console.log(response, "response");

      setNewsDataa(response.data);
    } catch (error) {
      console.error("Error fetching news data:", error);
    }
  };
  useEffect(() => {
    fetch3NewsData();
  }, []);
  const [perPage, setPerPage] = useState<number>(12);
  const [size, setSize] = useState<number>(perPage);
  const [current, setCurrent] = useState<number>(1);
  const PerPageChange = (value: number) => {
    setSize(value);
    const newPerPage = Math.ceil(newsData.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };
  const getData = (current: number, pageSize: number) => {
    // Normally you should get the data from the server
    return newsData.slice((current - 1) * pageSize, current * pageSize);
  };
  const PaginationChange = (page: number, pageSize: number) => {
    setCurrent(page);
    setSize(pageSize);
  };
  const PrevNextArrow = (
    current: number,
    type: string,
    originalElement: any
  ) => {
    if (type === "prev") {
      return (
        <button>
          <LeftAngle className={style.LeftAngle} />
        </button>
      );
    }
    if (type === "next") {
      return (
        <button>
          <RightAngle className={style.RightAngle} />
        </button>
      );
    }
    return originalElement;
  };
  const { locale } = useRouter();
  const dates1 = new Date(newsDataa[0]?.create_at);
  const dates2 = new Date(newsDataa[1]?.create_at);
  const dates3 = new Date(newsDataa[2]?.create_at);
  const year1 = dates1.getFullYear();
  const year2 = dates2.getFullYear();
  const year3 = dates3.getFullYear();
  const month1 = dates1.getMonth() + 1;
  const month2 = dates2.getMonth() + 1;
  const month3 = dates3.getMonth() + 1;
  const day1 = dates1.getDate();
  const day2 = dates2.getDate();
  const day3 = dates3.getDate();
  const currDate1 = `${month1}/${day1}/${year1}`;
  const currDate2 = `${month2}/${day2}/${year2}`;
  const currDate3 = `${month3}/${day3}/${year3}`;
  const currDateFa1: string = moment
    .unix(newsDataa[0]?.create_at / 1000)
    .format("jYYYY/jM/jD");
  const currDateFa2: string = moment
    .unix(newsDataa[1]?.create_at / 1000)
    .format("jYYYY/jM/jD");
  const currDateFa3: string = moment
    .unix(newsDataa[2]?.create_at / 1000)
    .format("jYYYY/jM/jD");

  return (
    <>
      <div className={style.titleOfBlogs}>
        <Image src={topic} alt="News Topic Background" />
        <h1>News</h1>
      </div>
      <div className={style.headerNews} dir="ltr">
        <Link
          href={`/News/${newsDataa[0]?._id}`}
          className={style.headerNewsPart1}
        >
          <Image
            src={`${GLOBAL_APIURL}/newsPhotos/${newsDataa[0]?.mainPic}`}
            alt=""
            width={1000}
            height={600}
          />
          <span></span>
          <h2>
            {locale == "en" && newsDataa[0]?.title}
            {locale == "fa" && newsDataa[0]?.titleFa}
            {locale == "ar" && newsDataa[0]?.titleAr}
          </h2>
          <div className={style.dateHeaderNews}>
            <Image src={dateIcon} alt="date Icon" width={30} height={30} />
            {isClient ? (
              <p>
                {locale == "en" && <p>{currDate1}</p>}
                {locale == "ar" && <p>{currDate1}</p>}
                {locale == "fa" && <p>{currDateFa1}</p>}
              </p>
            ) : (
              <></>
            )}
          </div>
        </Link>
        <div className={style.headerNewsPart2}>
          <Link href={`/News/${newsDataa[1]?._id}`} className={style.impNews}>
            <Image
              src={`${GLOBAL_APIURL}/newsPhotos/${newsDataa[1]?.mainPic}`}
              alt=""
              width={400}
              height={400}
            />
            <span></span>
            <h4>
              {locale == "en" && newsDataa[1]?.title}
              {locale == "fa" && newsDataa[1]?.titleFa}
              {locale == "ar" && newsDataa[1]?.titleAr}
            </h4>
            <div className={style.dateHeaderNews}>
              <Image src={dateIcon} alt="date Icon" width={30} height={30} />
              {isClient ? (
                <p>
                  {locale == "en" && <p>{currDate2}</p>}
                  {locale == "ar" && <p>{currDate2}</p>}
                  {locale == "fa" && <p>{currDateFa2}</p>}
                </p>
              ) : (
                <></>
              )}
            </div>
          </Link>
          <Link href={`/News/${newsDataa[2]?._id}`} className={style.impNews}>
            <Image
              src={`${GLOBAL_APIURL}/newsPhotos/${newsDataa[2]?.mainPic}`}
              alt=""
              width={400}
              height={400}
            />
            <span></span>
            <h4>
              {locale == "en" && newsDataa[2]?.title}
              {locale == "fa" && newsDataa[2]?.titleFa}
              {locale == "ar" && newsDataa[2]?.titleAr}
            </h4>
            <div className={style.dateHeaderNews}>
              <Image src={dateIcon} alt="date Icon" width={30} height={30} />

              {isClient ? (
                <p>
                  {locale == "en" && <p>{currDate3}</p>}
                  {locale == "ar" && <p>{currDate3}</p>}
                  {locale == "fa" && <p>{currDateFa3}</p>}
                </p>
              ) : (
                <></>
              )}
            </div>
          </Link>
        </div>
      </div>
      {/* search bar part : */}
      <h2 className={style.topicNewsEvents}>News & Media</h2>
      <div className={style.allNewsPartPagination}>
        <div className={style.allNewsPart}>
          {getData(current, size).map((data, index) => (
            <Fragment key={data._id}>
              <CartBlog
                id={data._id}
                mainPic={data.mainPic}
                title={data.title}
                titleFa={data.titleFa}
                titleAr={data.titleAr}
                category={data.category}
                categoryFa={data.categoryFa}
                categoryAr={data.categoryAr}
                date={data.create_at}
                fullText={data.fullText}
                fullTextFa={data.fullTextFa}
                fullTextAr={data.fullTextAr}
              />
            </Fragment>
          ))}
        </div>
        <Pagination
          className={style.paginationData}
          onChange={PaginationChange}
          total={newsData.length}
          current={current}
          pageSize={size}
          showSizeChanger={false}
          itemRender={PrevNextArrow}
          onShowSizeChange={PerPageChange}
        />
      </div>
    </>
  );
};
