import Image from "next/image";

// import Css :
import style from "./product.module.css";
import { Download } from "@/public/icons/icons/svg/cards/product/download";
import { NewsIdSlider } from "@/components/sliders/blogs/newsId/newsIdSlider";
import { SuggestionSlider } from "@/components/sliders/products/suggestion/suggestion";
import Link from "next/link";
import { useState, useMemo, useCallback, useEffect } from "react";
import compoundIcon from "@/public/icons/image/products/compunds.png";
import masterBatchIcon from "@/public/icons/image/products/masterBatch.png";
import documentIcon from "@/public/icons/image/products/document.png";
import contactIcon from "@/public/icons/image/products/contactUs.png";
import informationIcon from "@/public/icons/image/products/information.png";
import discriptionIcon from "@/public/icons/image/products/discription.png";
import axios from "axios";
import { useRouter } from "next/router";
import { GLOBAL_APIURL } from "@/constant/globalUrl";
import { FormattedMessage, useIntl } from "react-intl";
import Head from "next/head";
export interface Product {
  _id: number;
  name: string;
  price?: string;
  amount?: string;
  create_at: number;
  update_at?: number;
  inventoryStatus: string;
  status: boolean;
  mainCategory: string;
  category: string;
  categoryType: string;
  industry: string;
  dataSheet?: string;
  shortDisc: string;
  overView?: string;
  overView_persian?: string;
  overView_arabic?: string;
  featureOne: string;
  featureTwo: string;
  featureThree: string;
  featureFour: string;
  featureFive: string;
  featureSix: string;
  isDelete: boolean;
}
interface fileNames {
  fileName: string;
}
const DownloadButton = ({ fileName }: fileNames) => {
  const fileUrl = `/downloads/${fileName}`;

  return (
    <a href={fileUrl} download>
      <button className={style.downloadBtn}>download</button>
    </a>
  );
};

export const Productpage = () => {
  const [newsData, setNewsData] = useState<Product>();
  const { locale, query } = useRouter();
  const { pid } = useMemo(() => query, [query]);

  const fetchCategories = useCallback(async () => {
    try {
      if (typeof pid !== "string") return; // arian kid
      const { data } = await axios.get(
        `${GLOBAL_APIURL}/api/products/productList/${pid}`
      );
      setNewsData(data.newsItem);
    } catch (error: any) {
      console.log(error);
    }
  }, [pid]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    fetchCategories();
  }, [fetchCategories]);

  const intl = useIntl();

  const titleMain: string = intl.formatMessage({
    id: "page.home.head.title",
  });

  const author: string = intl.formatMessage({ id: "page.home.head.author" });
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        {/* <!-- viewport --> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <!-- title --> */}
        <title>{newsData?.name}</title>
        <meta property="og:title" content={newsData?.name} />
        <meta name="twitter:title" content={newsData?.name} />
        {/* <!-- description --> */}
        {locale == "en" && (
          <>
            <meta name="description" content={newsData?.overView} />
            <meta property="og:description" content={newsData?.overView} />
            <meta name="twitter:description" content={newsData?.overView} />
          </>
        )}
        {locale == "fa" && (
          <>
            <meta name="description" content={newsData?.overView_persian} />
            <meta
              property="og:description"
              content={newsData?.overView_persian}
            />
            <meta
              name="twitter:description"
              content={newsData?.overView_persian}
            />
          </>
        )}
        {locale == "ar" && (
          <>
            <meta name="description" content={newsData?.overView_arabic} />
            <meta
              property="og:description"
              content={newsData?.overView_arabic}
            />
            <meta
              name="twitter:description"
              content={newsData?.overView_arabic}
            />
          </>
        )}
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
      {/* header : */}
      <div className={style.topSProduct} dir="ltr">
        {/* <Image
          src={background}
          alt=""
          width={1920}
          height={1080}
          className={style.background}
        /> */}
        <div className={style.topSProductDetail}>
          {/* photo Part : */}
          <div className={style.imgPart}>
            <Image
              src={compoundIcon}
              alt={""}
              title={""}
              width={1000}
              height={1000}
            />
          </div>
          {/* information Part : */}
          <div className={style.detailPart}>
            <h2>
              {newsData?.mainCategory}/{newsData?.category}
            </h2>
            <p>{newsData?.name}</p>
          </div>
          {/* button Part : */}
          <div className={style.buttonPart}>
            {newsData?.dataSheet !== " " ? (
              <a
                href={`${GLOBAL_APIURL}/productFile/${newsData?.dataSheet}`}
                download
              >
                <button>
                  <Image
                    src={documentIcon}
                    alt="DataSheet"
                    width={100}
                    height={100}
                  />
                  <p>DataSheet</p>
                </button>
              </a>
            ) : (
              <></>
            )}
            <Link href={"tel:00982158462000"}>
              <button>
                <Image
                  src={contactIcon}
                  alt="Contact The Expert"
                  width={100}
                  height={100}
                />
                <p>Contact The Expert</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Body : */}
      <div className={style.bodyDetail}>
        {newsData?.dataSheet !== " " ? (
          <>
            <div className={style.titleBodyPart}>
              <Image
                src={discriptionIcon}
                alt="information Icon"
                width={100}
                height={100}
              />
              <h1>
                <FormattedMessage id="page.product.description" />
              </h1>
            </div>
            <p className={style.discriptionPart}>
              {locale == "en" && <>{newsData?.overView}</>}
              {locale == "fa" && <>{newsData?.overView_persian}</>}
              {locale == "ar" && <>{newsData?.overView_arabic}</>}
            </p>
          </>
        ) : (
          <></>
        )}
        <div className={style.bodyDetail}>
          <div className={style.titleBodyPart}>
            <Image
              src={informationIcon}
              alt="information Icon"
              width={100}
              height={100}
            />
            <h1>
              <FormattedMessage id="page.product.information" />
            </h1>
          </div>

          <table className={style.tablePart} dir="ltr">
            <tbody>
              <tr>
                <th>Short Description</th>
                <td>{newsData?.shortDisc}</td>
              </tr>
              <tr>
                <th>Color</th>
                <td>{newsData?.featureOne}</td>
              </tr>
              <tr>
                <th>MFI</th>
                <td>{newsData?.featureTwo}</td>
              </tr>
              <tr>
                <th>Tensile Strength</th>
                <td>{newsData?.featureThree}</td>
              </tr>
              <tr>
                <th>Tensile Strain Break</th>
                <td>{newsData?.featureFour}</td>
              </tr>
              <tr>
                <th>Izod Impact Strength</th>
                <td>{newsData?.featureFive}</td>
              </tr>
              <tr>
                <th>Processing Technology</th>
                <td>{newsData?.featureSix}</td>
              </tr>
              <tr>
                <th>Industries</th>
                <td>{newsData?.industry}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
