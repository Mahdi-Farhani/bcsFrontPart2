import Image from "next/image";
import style from "./SocialResponsibility.module.css";
import mainImg from "@/asset/banner/19.png";
import img1 from "@/asset/banner/20.png";
import img2 from "@/asset/banner/21.png";
import img3 from "@/asset/banner/22.png";
import { FormattedMessage, useIntl } from "react-intl";
import Head from "next/head";
import { useState } from "react";
export const SocialResponsibilityPage = () => {
  const intl = useIntl();
  const title: string = intl.formatMessage({
    id: "page.socialResponsibility.head.title",
  });
  const titleMain: string = intl.formatMessage({
    id: "page.home.head.title",
  });
  const description: string = intl.formatMessage({
    id: "page.socialResponsibility.head.description",
  });
  const author: string = intl.formatMessage({ id: "page.home.head.author" });
  const [slide1, setSlide1] = useState<boolean>(true);
  const [slide2, setSlide2] = useState<boolean>(true);
  const [slide3, setSlide3] = useState<boolean>(true);
  const [slide4, setSlide4] = useState<boolean>(true);
  const [slide5, setSlide5] = useState<boolean>(true);
  const click1Handler = () => {
    if (slide1) {
      setSlide1(false);
    } else {
      setSlide1(true);
    }
  };
  const click2Handler = () => {
    if (slide2) {
      setSlide2(false);
    } else {
      setSlide2(true);
    }
  };
  const click3Handler = () => {
    if (slide3) {
      setSlide3(false);
    } else {
      setSlide3(true);
    }
  };
  const click4Handler = () => {
    if (slide4) {
      setSlide4(false);
    } else {
      setSlide4(true);
    }
  };
  const click5Handler = () => {
    if (slide5) {
      setSlide5(false);
    } else {
      setSlide5(true);
    }
  };
  return (
    <div>
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
      <div className={style.imageTop}>
        <Image
          src={mainImg}
          alt="Honors Image"
          title="Honors Image"
          width={2560}
          height={1440}
        />
      </div>
      <div className={style.socialBody}>
        <div className={style.part2}>
          <Image
            src={img1}
            alt="Business development and organizational innovation center"
            title="Business development and organizational innovation center"
            width={1000}
            height={1000}
          />
          <div className={style.part22}>
            <p>
              <FormattedMessage id="page.aboutUs.socialResponsibility.sub1" />
            </p>
          </div>
        </div>
        {/* <div className={style.part2}>
          <div className={style.part22}>
            <p>
              <FormattedMessage id="page.aboutUs.socialResponsibility.sub3" />
            </p>
          </div>
        </div> */}
        <div className={style.cardList}>
          <div
            onClick={click1Handler}
            className={slide1 ? style.card : style.cardFlipped}
          >
            <div
              className={style.cardFaceFront}
              style={{
                backgroundImage: "url(/icons/image/SocialResponsibility/1.jpg)",
              }}
            >
              <FormattedMessage id="page.aboutUs.SubsidiaryCompanies.card1Front" />
            </div>
            <div className={style.cardFaceBack}>
              <FormattedMessage id="page.aboutUs.SubsidiaryCompanies.card1Back" />
            </div>
          </div>
          <div
            onClick={click2Handler}
            className={slide2 ? style.card : style.cardFlipped}
          >
            <div
              className={style.cardFaceFront}
              style={{
                backgroundImage: "url(/icons/image/SocialResponsibility/2.jpg)",
              }}
            >
              <FormattedMessage id="page.aboutUs.SubsidiaryCompanies.card2Front" />
            </div>
            <div className={style.cardFaceBack}>
              <FormattedMessage id="page.aboutUs.SubsidiaryCompanies.card2Back" />
            </div>
          </div>
          <div
            onClick={click3Handler}
            className={slide3 ? style.card : style.cardFlipped}
          >
            <div
              className={style.cardFaceFront}
              style={{
                backgroundImage: "url(/icons/image/SocialResponsibility/3.jpg)",
              }}
            >
              <FormattedMessage id="page.aboutUs.SubsidiaryCompanies.card3Front" />
            </div>
            <div className={style.cardFaceBack}>
              <FormattedMessage id="page.aboutUs.SubsidiaryCompanies.card3Back" />
            </div>
          </div>
          <div
            onClick={click4Handler}
            className={slide4 ? style.card : style.cardFlipped}
          >
            <div
              className={style.cardFaceFront}
              style={{
                backgroundImage: "url(/icons/image/SocialResponsibility/4.jpg)",
              }}
            >
              <FormattedMessage id="page.aboutUs.SubsidiaryCompanies.card4Front" />
            </div>
            <div className={style.cardFaceBack}>
              <FormattedMessage id="page.aboutUs.SubsidiaryCompanies.card4Back" />
            </div>
          </div>
          <div
            onClick={click5Handler}
            className={slide5 ? style.card : style.cardFlipped}
          >
            <div
              className={style.cardFaceFront}
              style={{
                backgroundImage:
                  "url(/icons/image/SocialResponsibility/5.jpeg)",
              }}
            >
              <FormattedMessage id="page.aboutUs.SubsidiaryCompanies.card5Front" />
            </div>
            <div className={style.cardFaceBack}>
              <FormattedMessage id="page.aboutUs.SubsidiaryCompanies.card5Back" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
