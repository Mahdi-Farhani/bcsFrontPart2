import Image from "next/image";
import style from "./subsidiaryCompanies.module.css";
import mainImg from "@/asset/banner/25.png";
import img1 from "@/asset/banner/baspar.png";
import img2 from "@/asset/banner/26.jpg";
import img3 from "@/asset/banner/sepid.png";
import img4 from "@/asset/banner/rubber.png";
import img5 from "@/asset/banner/27.jpg";
import img6 from "@/asset/banner/28.jpg";
import img7 from "@/asset/banner/29.png";
import { FormattedMessage, useIntl } from "react-intl";
import Head from "next/head";
export const SubsidiaryCompaniesPage = () => {
  const intl = useIntl();
  const title: string = intl.formatMessage({
    id: "page.subsidiaryCompanies.head.title",
  });
  const titleMain: string = intl.formatMessage({
    id: "page.home.head.title",
  });
  const description: string = intl.formatMessage({
    id: "page.subsidiaryCompanies.head.description",
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
          alt="Honors Image"
          title="Honors Image"
          width={2560}
          height={1440}
        />
      </div>
      <div className={style.socialBody}>
        <div className={style.SubsidiaryCompaniesParts}>
          <Image
            src={img1}
            alt="baspar Chemi Sepidan"
            width={1000}
            height={1000}
            className={style.iconMain}
          />
          <div className={style.part2}>
            <p>
              <FormattedMessage id="page.aboutUs.SubsidiaryCompanies.sub1" />
            </p>
          </div>
        </div>
        <div className={style.SubsidiaryCompaniesParts}>
          <Image
            src={img3}
            alt="baspar Chemi Sepidan"
            width={1000}
            height={1000}
            className={style.iconMain}
          />
          <div className={style.part2}>
            <p>
              <FormattedMessage id="page.aboutUs.SubsidiaryCompanies.sub2" />
            </p>
          </div>
        </div>
        <div className={style.SubsidiaryCompaniesParts}>
          <Image
            src={img4}
            alt="baspar Chemi Sepidan"
            width={1000}
            height={1000}
            className={style.iconMain}
          />
          <div className={style.part2}>
            <p>
              <FormattedMessage id="page.aboutUs.SubsidiaryCompanies.sub3" />
            </p>
          </div>
        </div>
        <div className={style.SubsidiaryCompaniesParts}>
          <Image
            src={img7}
            alt="baspar Chemi Sepidan"
            width={1000}
            height={1000}
            className={style.iconMain}
          />
        </div>
      </div>
    </div>
  );
};
