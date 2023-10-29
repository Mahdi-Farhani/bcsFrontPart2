import Image, { StaticImageData } from "next/image";
import style from "./BoardOfDirectors.module.css";
import drKarimianImg from "@/asset/banner/manager profiles/dr.karimian.jpg";
import halajBashi from "@/asset/banner/manager profiles/Halaj-Bashi.jpg";
import aliKhani from "@/asset/banner/manager profiles/Alikhani.jpg";
import mosayebi from "@/asset/banner/manager profiles/mosayebi.jpg";
import nosrati from "@/asset/banner/manager profiles/Nosrati-Nia.jpg";
import mainImg from "@/asset/banner/16.png";
import { FormattedMessage, useIntl } from "react-intl";
import Head from "next/head";
interface Manager {
  name: string;
  jobPosition: string;
  disc1: string;
  disc2?: string;
  disc3?: string;
  img: StaticImageData;
}
export const BoardOfDirectorsPage = () => {
  const ManagerCart = ({
    name,
    jobPosition,
    disc1,
    disc2,
    disc3,
    img,
  }: Manager) => {
    return (
      <div className={style.managerCart}>
        <Image src={img} alt={name} title={name} />
        <div className={style.managerCartDetail}>
          <h1>
            <FormattedMessage id={name} />
          </h1>
          <h4>
            <FormattedMessage id={jobPosition} />
          </h4>
          <ul>
            <li>
              <FormattedMessage id={disc1} />
            </li>
            {!disc2 ? (
              <></>
            ) : (
              <li>
                <FormattedMessage id={disc2} />
              </li>
            )}
            {!disc3 ? (
              <></>
            ) : (
              <li>
                <FormattedMessage id={disc3} />
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  };
  const intl = useIntl();
  const title: string = intl.formatMessage({
    id: "page.boardOfDirectors.head.title",
  });
  const titleMain: string = intl.formatMessage({
    id: "page.home.head.title",
  });
  const description: string = intl.formatMessage({
    id: "page.boardOfDirectors.head.description",
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
      </Head>
      <div className={style.imageTop}>
        <Image src={mainImg} alt="History" title="History" />
      </div>
      <div className={style.historyBody}>
        <div className={style.part1}>
          <h3>
            <FormattedMessage id="page.aboutUs.boardOfDirectors.Title" />
          </h3>
          <div className={style.row1}>
            <ManagerCart
              name="page.layout.boardOfDirectors.manager1Name"
              jobPosition="page.layout.boardOfDirectors.profile1Manager1"
              disc1="page.layout.boardOfDirectors.profile2Manager1"
              disc2="page.layout.boardOfDirectors.profile3Manager1"
              img={drKarimianImg}
            />
            <ManagerCart
              name="page.layout.boardOfDirectors.manager2Name"
              jobPosition="page.layout.boardOfDirectors.profile1Manager2"
              disc1="page.layout.boardOfDirectors.profile2Manager2"
              img={halajBashi}
            />
            <ManagerCart
              name="page.layout.boardOfDirectors.manager3Name"
              jobPosition="page.layout.boardOfDirectors.profile1Manager3"
              disc1="page.layout.boardOfDirectors.profile2Manager3"
              disc2="page.layout.boardOfDirectors.profile3Manager3"
              img={aliKhani}
            />
            <ManagerCart
              name="page.layout.boardOfDirectors.manager4Name"
              jobPosition="page.layout.boardOfDirectors.profile1Manager4"
              disc1="page.layout.boardOfDirectors.profile2Manager4"
              img={nosrati}
            />
            <ManagerCart
              name="page.layout.boardOfDirectors.manager5Name"
              jobPosition="page.layout.boardOfDirectors.profile1Manager5"
              disc1="page.layout.boardOfDirectors.profile2Manager5"
              img={mosayebi}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
