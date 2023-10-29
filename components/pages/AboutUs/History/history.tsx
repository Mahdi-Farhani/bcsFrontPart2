import Image from "next/image";
import style from "./history.module.css";
import mainImg from "@/asset/banner/11.png";
import subImg from "@/asset/banner/12.jpg";
import history from "@/asset/banner/13.png";
import historyFa from "@/asset/banner/13fa.png";
import { FormattedMessage, useIntl } from "react-intl";
import { useRouter } from "next/router";
import Head from "next/head";
export const HistoryPage = () => {
  const { locale } = useRouter();
  const intl = useIntl();
  const title: string = intl.formatMessage({ id: "page.history.head.title" });
  const titleMain: string = intl.formatMessage({
    id: "page.home.head.title",
  });
  const description: string = intl.formatMessage({
    id: "page.history.head.description",
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
          <h2>
            <FormattedMessage id="page.aboutUs.History.titleBaspar" />
          </h2>
          <h3>
            <FormattedMessage id="page.aboutUs.History.title2Baspar" />
          </h3>
          <p>
            <FormattedMessage id="page.aboutUs.History.sub1Baspar" />
          </p>
        </div>
        <div className={style.part2}>
          <Image
            src={subImg}
            alt="Business development and organizational innovation center"
            title="Business development and organizational innovation center"
            width={1000}
            height={1000}
          />
          <div className={style.part22}>
            <h2>
              <FormattedMessage id="page.aboutUs.History.titleBaspar2" />
            </h2>
            <p>
              <FormattedMessage id="page.aboutUs.History.sub2Baspar" />
            </p>
          </div>
        </div>
        {locale == "en" && (
          <Image
            src={history}
            alt="History Details"
            title="History Details"
            className={style.historyImage}
          />
        )}
        {locale == "ar" && (
          <Image
            src={history}
            alt="History Details"
            title="History Details"
            className={style.historyImage}
          />
        )}
        {locale == "fa" && (
          <Image
            src={historyFa}
            alt="History Details"
            title="History Details"
            className={style.historyImage}
          />
        )}
      </div>
    </div>
  );
};
