import Image from "next/image";
import style from "./vision.module.css";
import mainImg from "@/asset/banner/Vision.png";
import { FormattedMessage, useIntl } from "react-intl";
import Head from "next/head";
export const VisionPage = () => {
  const intl = useIntl();
  const title: string = intl.formatMessage({
    id: "page.vision.head.title",
  });
  const titleMain: string = intl.formatMessage({
    id: "page.home.head.title",
  });
  const description: string = intl.formatMessage({
    id: "page.vision.head.description",
  });
  const author: string = intl.formatMessage({ id: "page.home.head.author" });
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
          alt="History"
          title="History"
          width={2560}
          height={1440}
        />
      </div>
      <div className={style.historyBody}>
        <div className={style.part1}>
          <h3>
            <FormattedMessage id="page.aboutUs.Vision.title" />
          </h3>
          <p>
            <FormattedMessage id="page.aboutUs.Vision.sub" />
          </p>
        </div>
        <div className={style.part2}>
          <iframe
            width={1600}
            height={900}
            src={
              "https://www.aparat.com/video/video/embed/videohash/fK2UA/vt/frame?titleShow=true&recom=self"
            }
            allowFullScreen
          />
          {/*  */}
        </div>
      </div>
    </div>
  );
};
