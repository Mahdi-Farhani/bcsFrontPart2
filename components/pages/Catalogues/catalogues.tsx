import Image from "next/image";
import style from "./catalogues.module.css";
import mainImg from "@/asset/banner/35.png";
import img1 from "@/public/icons/image/catalogues/Compound.jpg";
import img2 from "@/public/icons/image/catalogues/masterbatch.jpg";
import img3 from "@/public/icons/image/catalogues/rubber.jpg";
import img4 from "@/public/icons/image/catalogues/General.jpg";
import { useIntl } from "react-intl";
import Head from "next/head";

interface fileNames {
  fileName: string;
  fileBtn: string;
}
export const CataloguesPage = () => {
  const DownloadButton = ({ fileName, fileBtn }: fileNames) => {
    const fileUrl = `/catalogues/${fileName}`;

    return (
      <a href={fileUrl} download>
        <button className={style.downloadBtn}>{fileBtn}</button>
      </a>
    );
  };
  const intl = useIntl();
  const title: string = intl.formatMessage({ id: "page.catalog.head.title" });
  const titleMain: string = intl.formatMessage({
    id: "page.home.head.title",
  });
  const description: string = intl.formatMessage({
    id: "page.catalog.head.description",
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
          alt="Media Banner"
          title="media"
          width={2560}
          height={1440}
        />
      </div>
      <div className={style.historyBody}>
        <div className={style.catalogPart1}>
          <div className={style.catalogCart}>
            <Image src={img1} alt="" width={500} height={500} />
            <DownloadButton
              fileName={"Compoundcatalog.pdf"}
              fileBtn={"Compound Catalog"}
            />
          </div>
          <div className={style.catalogCart}>
            <Image src={img2} alt="" width={500} height={500} />
            <DownloadButton
              fileName={"Masterbatchescatalog.pdf"}
              fileBtn={"Masterbatch Catalog"}
            />
          </div>
        </div>
        <div className={style.catalogPart1}>
          <div className={style.catalogCart}>
            <Image src={img3} alt="" width={500} height={500} />
            <DownloadButton
              fileName={"rubberCompoundcatalog.pdf"}
              fileBtn={"Rubber Catalog"}
            />
          </div>
          <div className={style.catalogCart}>
            <Image src={img4} alt="" width={500} height={500} />
            <DownloadButton
              fileName={"GeneralCatalog.pdf"}
              fileBtn={"General Catalog"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
