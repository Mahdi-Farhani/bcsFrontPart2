import { Layout } from "@/components/common/layout/mainPage/layout";
import { MainSliderBlog } from "@/components/sliders/blogs/mainSliderBlog";
import { MainSlider } from "@/components/sliders/mainPage/mainSliders";
import aboutBaspar from "@/asset/banner/37.png";
import indImg1 from "@/public/icons/image/mainPage/raffia.png";
import indImg2 from "@/public/icons/image/mainPage/textile.png";
import indImg3 from "@/public/icons/image/mainPage/electrical.png";
import indImg4 from "@/public/icons/image/mainPage/packaging.png";
import indImg5 from "@/public/icons/image/mainPage/pipe.png";
import indImg6 from "@/public/icons/image/mainPage/injection.png";
import indImg7 from "@/public/icons/image/mainPage/Home appliance.png";
import indImg8 from "@/public/icons/image/mainPage/Mining.png";
import indImg9 from "@/public/icons/image/mainPage/Automotive.png";
import productPart from "@/public/icons/image/mainPage/product.png";
// import Css :
import { useState } from "react";
import style from "./home.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";
import { useUserStore } from "@/lib/slices/userSlice";
import { useEffect } from "react";
import title1 from "@/public/icons/image/icons/title1.png";
import title2 from "@/public/icons/image/icons/title2.png";
import axios from "axios";
import { GLOBAL_APIURL } from "@/constant/globalUrl";
import dateIcon from "@/public/icons/image/icons/clock.png";
import { HomeCartBlog } from "../common/card/mainBlog/main/mainBlog";
import Head from "next/head";
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
const HomePage = () => {
  const { locale, push } = useRouter();
  const [newsData, setNewsData] = useState<News[]>([]);
  const fetchNewsData = async () => {
    try {
      const response = await axios.get(`${GLOBAL_APIURL}/api/news/mainNews`);
      console.log(response, "response");

      setNewsData(response.data);
    } catch (error) {
      console.error("Error fetching news data:", error);
    }
  };
  useEffect(() => {
    fetchNewsData();
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
  const clickHandler1 = () => {
    push("/AboutUs/History");
  };
  const clickHandler2 = () => {
    push("/Products");
  };
  const clickHandler3 = () => {
    push("/News");
  };
  return (
    <>
      <Head>
        <meta name="description" />
      </Head>
      <Layout>
        <div>
          <div className={style.home}>
            <span></span>
            <MainSlider
              stylePagination={{
                "--swiper-pagination-color": "#FFBA08",
                "--swiper-pagination-bullet-inactive-color": "#999999",
                "--swiper-pagination-bullet-inactive-opacity": "1",
                "--swiper-pagination-bullet-horizontal-gap": "6px",
              }}
            />
            <div className={style.subNav}>
              {/* catalogs */}
              <div className={style.subNavDet}>
                <Image
                  src={"/icons/image/icons/catalog.png"}
                  alt="catalog icon"
                  width={150}
                  height={150}
                />
                <Link href={"/Catalogues"}>
                  <FormattedMessage id="page.layout.homepage.catalogs" />
                </Link>
              </div>
              {/* complaint Form */}
              {/* <div className={style.subNavDet}>
              <Image
                src={"/icons/image/icons/complaint.png"}
                alt="Complaint Form icon"
                width={150}
                height={150}
              />
              <Link href={"/Complaint"}>
                <FormattedMessage id="page.layout.homepage.complaintForm" />
              </Link>
            </div> */}
              {/* Recruitment Form */}
              <div className={style.subNavDet}>
                <Image
                  src={"/icons/image/icons/form.png"}
                  alt="Recruitment Form Icon"
                  width={150}
                  height={150}
                />
                <Link href={"/Recruitment"}>
                  <FormattedMessage id="page.layout.homepage.recruitmentForm" />
                </Link>
              </div>
              {/* complaint Form */}
              <div className={style.subNavDet}>
                <Image
                  src={"/icons/image/icons/introductionVideo.png"}
                  alt="Introduction Video Icon"
                  width={150}
                  height={150}
                />
                <Link href={"/AboutUs/Vision"}>
                  <FormattedMessage id="page.layout.homepage.introductionVideo" />
                </Link>
              </div>
            </div>
            {/* info of baspar chemi sepidan :  */}
            <div className={style.MainInfo}>
              <Image src={aboutBaspar} alt="" width={500} height={500} />
              <div className={style.MainInfoDetail}>
                <h2>
                  <FormattedMessage id="page.home.title1" />
                </h2>
                <p className={style.MainInfoDetailSub}>
                  <FormattedMessage id="page.home.sub1" />
                </p>
                <p className={style.MainInfoDetailSub2}>
                  <FormattedMessage id="page.home.sub2" />
                </p>
                <button type="button" onClick={clickHandler1}>
                  <FormattedMessage id="page.home.sub3" />
                </button>
              </div>
            </div>
            <h1 className={style.mainTitles}>
              <FormattedMessage id="page.home.sub4" />
            </h1>
            <div className={style.industrypart}>
              <span className={style.mainBorder1}></span>
              <div className={style.mainIndustries}>
                <div className={style.industryCard}>
                  <Image
                    src={indImg1}
                    alt="Raffia Icon"
                    width={200}
                    height={200}
                  />
                  <h4>Raffia</h4>
                </div>
                <div className={style.industryCard}>
                  <Image
                    src={indImg2}
                    alt="Raffia Icon"
                    width={200}
                    height={200}
                  />
                  <h4>Textile</h4>
                </div>
                <div className={style.industryCard}>
                  <Image
                    src={indImg3}
                    alt="Raffia Icon"
                    width={200}
                    height={200}
                  />
                  <h4>Electrical</h4>
                </div>
                <div className={style.industryCard}>
                  <Image
                    src={indImg4}
                    alt="Raffia Icon"
                    width={200}
                    height={200}
                  />
                  <h4>Packaging</h4>
                </div>
                <div className={style.industryCard}>
                  <Image
                    src={indImg5}
                    alt="Raffia Icon"
                    width={200}
                    height={200}
                  />
                  <h4>Pipe</h4>
                </div>
                <div className={style.industryCard}>
                  <Image
                    src={indImg6}
                    alt="Raffia Icon"
                    width={200}
                    height={200}
                  />
                  <h4>Injection</h4>
                </div>
                <div className={style.industryCard}>
                  <Image
                    src={indImg7}
                    alt="Raffia Icon"
                    width={200}
                    height={200}
                  />
                  <h4>Home appliance</h4>
                </div>
                <div className={style.industryCard}>
                  <Image
                    src={indImg8}
                    alt="Raffia Icon"
                    width={200}
                    height={200}
                  />
                  <h4>Mining</h4>
                </div>
                <div className={style.industryCard}>
                  <Image
                    src={indImg9}
                    alt="Raffia Icon"
                    width={200}
                    height={200}
                  />
                  <h4>Automotive</h4>
                </div>
              </div>
              <span className={style.mainBorder2}></span>
            </div>
            {/* products : */}
            <div className={style.MainInfo}>
              <div className={style.MainInfoDetail}>
                <h2>
                  <FormattedMessage id="page.home.sub5" />
                </h2>
                <p className={style.MainInfoDetailSub2}>
                  <FormattedMessage id="page.home.sub6" />
                </p>
                <button type="button" onClick={clickHandler2}>
                  <FormattedMessage id="page.home.sub7" />
                </button>
              </div>
              <Image src={productPart} alt="" width={500} height={500} />
            </div>
            {/* news : */}

            <div className={style.newsPart}>
              <div className={style.newsPartTop1}>
                {locale == "fa" && (
                  <Image src={title1} alt="" width={1920} height={1080} />
                )}
                {locale == "ar" && (
                  <Image src={title1} alt="" width={1920} height={1080} />
                )}
                {locale == "en" && (
                  <Image src={title1} alt="" width={1920} height={1080} />
                )}
                <h1 className={style.newsPartH1}>
                  <FormattedMessage id="page.layout.homepage.news" />
                </h1>
              </div>
            </div>
            <div className={style.mainNewsPart}>
              {getData(current, size).map((data, index) => (
                <HomeCartBlog
                  key={data._id}
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
              ))}
            </div>
            <button className={style.newsBtnArsh} onClick={clickHandler3}>
              آرشیو اخبار
            </button>
            {/* <h1 className={style.allTitle}>Products</h1>
        <ProductMainSlider /> */}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
