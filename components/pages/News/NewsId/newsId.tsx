import Image from "next/image";
import pic from "@/public/styles/image/blogs/1.jpg";
// import Css :
import style from "./newsId.module.css";
import { NewsIdSlider } from "@/components/sliders/blogs/newsId/newsIdSlider";
import { SuggestionSlider } from "@/components/sliders/blogs/suggestion/suggestion";
import tempPic from "@/public/icons/image/blogs/7.jpg";
import Link from "next/link";
import { Linkedin } from "@/public/icons/icons/svg/linkedin";
import { Instagram } from "@/public/icons/icons/svg/instagram";
import { Facebook } from "@/public/icons/icons/svg/facebook";
import { Twitter } from "@/public/icons/icons/svg/twitter";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState, useMemo } from "react";
import axios from "axios";
import { ErrorAlert } from "@/components/common/alert/warnAlert";
import queryString from "query-string";
import { GLOBAL_APIURL } from "@/constant/globalUrl";
import loadingSrc from "@/public/Video/loading-BCS.gif";
import Head from "next/head";
import { useIntl } from "react-intl";

export interface News extends Document {
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

export const NewsId = () => {
  const { locale, query, asPath } = useRouter();
  const [path, setPath] = useState<string>(asPath);
  const { nid } = useMemo(() => query, [query]);
  const [newsData, setNewsData] = useState<News>();
  const [loading, setLoading] = useState<boolean>(true);
  const fetchCategories = useCallback(async () => {
    try {
      if (typeof nid !== "string") return;
      setLoading(true);
      const { data } = await axios.get(
        `${GLOBAL_APIURL}/api/news/newsData/${nid}`
      );
      setNewsData(data.newsItem);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    } catch (error: any) {
      console.log(error);
    }
  }, [nid]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    fetchCategories();
  }, [fetchCategories]);
  const intl = useIntl();
  const title: string = intl.formatMessage({
    id: "page.news.head.title",
  });
  const titleMain: string = intl.formatMessage({
    id: "page.home.head.title",
  });
  const description: string = intl.formatMessage({
    id: "page.news.head.description",
  });
  const author: string = intl.formatMessage({ id: "page.home.head.author" });
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        {/* <!-- viewport --> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <!-- title --> */}
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />
        {/* <!-- description --> */}
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:description" content={description} />
        {/* <!-- image --> */}
        <meta property="og:image" content="/icons/image/logo/basparIcon.png" />
        <meta name="twitter:image" content="/icons/image/logo/basparIcon.png" />
        {/* <!-- ua --> */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        {/* <!-- more --> */}
        <meta property="og:site_name" content={titleMain} />
        <meta property="og:type" content="website" />
        {/* <!-- Minimal --> */}
        <link
          rel="icon"
          type="image/png"
          href="/icons/image/logo/basparIcon.png"
        />
        <link
          rel="icon"
          sizes="192x192"
          href="/icons/image/logo/basparIcon.png"
        />
        <link rel="apple-touch-icon" href="/icons/image/logo/basparIcon.png" />
        <meta
          name="msapplication-square310x310logo"
          content="/icons/image/logo/basparIcon.png"
        />
        {/* <!-- Apple --> */}
        <link rel="apple-touch-icon" href="/icons/image/logo/basparIcon.png" />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/icons/image/logo/basparIcon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/icons/image/logo/basparIcon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/image/logo/basparIcon.png"
        />
        {/* <!-- Microsoft --> */}
        <meta
          name="msapplication-square70x70logo"
          content="/icons/image/logo/basparIcon.png"
        />
        <meta
          name="msapplication-square150x150logo"
          content="/icons/image/logo/basparIcon.png"
        />
        <meta
          name="msapplication-wide310x150logo"
          content="/icons/image/logo/basparIcon.png"
        />
        <meta name="author" content={author} />

        {/* <link rel="canonical" href="https://www.example.com/" /> */}
      </Head>
      {loading ? (
        <div className={style.loadingBcs}>
          <Image
            src="/Video/loading-BCS.gif"
            alt="Loading"
            width={200}
            height={200}
            className={style.loading}
          />
        </div>
      ) : (
        <>
          <div className={style.navbarDistance}></div>
          <div className={style.allNewsPage}>
            <div className={style.partImageTitle}>
              <Image
                src={`${GLOBAL_APIURL}/newsPhotos/${newsData?.mainPic}`}
                alt="news Photo"
                width={1920}
                height={1080}
              />
              <span></span>
              {locale == "en" && <h1>{isClient ? newsData?.title : <></>}</h1>}
              {locale == "fa" && (
                <h1>{isClient ? newsData?.titleFa : <></>}</h1>
              )}
              {locale == "ar" && (
                <h1>{isClient ? newsData?.titleAr : <></>}</h1>
              )}
            </div>
            <div className={style.DiscriptionNavbar}>
              <div className={style.partLeftDiscription}>
                {locale == "en" && isClient && (
                  <p>{isClient ? newsData?.fullText : <></>}</p>
                )}
                {locale == "fa" && isClient && (
                  <p>{isClient ? newsData?.fullTextFa : <></>}</p>
                )}
                {locale == "ar" && isClient && (
                  <p>{isClient ? newsData?.fullTextAr : <></>}</p>
                )}

                <div className={style.shareAndCate}>
                  {/* category : */}
                  {locale == "en" && isClient && (
                    <div className={style.categoryOfNews}>
                      <h2>Labels:</h2>
                      <p>{isClient ? newsData?.category : <></>}</p>
                    </div>
                  )}
                  {locale == "fa" && isClient && (
                    <div className={style.categoryOfNews}>
                      <h2>برچسب:</h2>
                      <p>{isClient ? newsData?.categoryFa : <></>}</p>
                    </div>
                  )}
                  {locale == "ar" && isClient && (
                    <div className={style.categoryOfNews}>
                      <h2>تسميات:</h2>
                      <p>{isClient ? newsData?.categoryAr : <></>}</p>
                    </div>
                  )}
                  {/* share : */}
                  <div className={style.allIcons}>
                    <Link
                      className={style.links}
                      href={`https://twitter.com/intent/tweet?text=${path}`}
                      rel="nofollow"
                      target="_blank"
                    >
                      <Twitter className={style.linksSvgOne} />
                    </Link>
                    <Link
                      className={style.links}
                      href={`https://www.linkedin.com/cws/share?url=${path}`}
                    >
                      <Linkedin className={style.linksSvgTwo} />
                    </Link>
                    <Link
                      className={style.links}
                      href={`https://www.facebook.com/sharer/sharer.php?u=${path}`}
                    >
                      <Facebook className={style.linksSvgThree} />
                    </Link>
                    {/* <Link className={style.links} href={``}>
                  <Instagram className={style.linksSvgFour} />
                </Link> */}
                  </div>
                </div>
                {newsData && <NewsIdSlider photos={newsData.pics} />}
              </div>
            </div>
            <SuggestionSlider />
          </div>
        </>
      )}
    </>
  );
};
