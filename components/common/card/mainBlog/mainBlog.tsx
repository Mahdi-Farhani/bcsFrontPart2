import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { HTMLAttributes, useEffect, useState } from "react";
import style from "./mainBlog.module.css";
import dateIcon from "@/public/icons/image/icons/clock.png";
import { useRouter } from "next/router";
import moment from "moment-jalaali";
import axios from "axios";
import { GLOBAL_APIURL } from "@/constant/globalUrl";
interface DownItem extends HTMLAttributes<HTMLAnchorElement> {
  mainPic: string;
  title: string;
  date: number;
  titleFa: string;
  titleAr: string;
  category: string;
  categoryFa: string;
  categoryAr: string;
  fullText: string;
  fullTextFa: string;
  fullTextAr: string;
  id: string;
}
interface MonthNames {
  [key: string]: string;
}
interface Text {
  text: string;
  limit: number;
}

export const MainCartBlog = ({
  mainPic,
  title,
  date,
  id,
  titleFa,
  titleAr,
  category,
  categoryFa,
  categoryAr,
  fullText,
  fullTextFa,
  fullTextAr,
}: DownItem) => {
  const [currentMonthName, setCurrentMonthName] = useState<string>("");
  const dates = new Date(date);
  const year = dates.getFullYear();
  const month = dates.getMonth() + 1;
  const day = dates.getDate();
  const currDate = `${month}/${day}/${year}`;
  const { locale } = useRouter();
  const currDateFa: string = moment.unix(date / 1000).format("jYYYY/jM/jD");
  const [photoUrl, setPhotoUrl] = useState<string>("");

  const TextHanlder = ({ text, limit }: Text) => {
    const truncatedText = text.split(" ").slice(0, limit).join(" ");

    return (
      <div>
        <p>
          {truncatedText} {text.split(" ").length > limit ? "..." : ""}
        </p>
      </div>
    );
  };

  useEffect(() => {
    console.log(mainPic);
  }, [mainPic]);
  return (
    <div className={locale == "en" ? style.cardBlogEn : style.cardBlog}>
      <div className={style.mainImgBlogDate}>
        <Link href={`/News/${id}`} className={style.mainImgBlog}>
          <Image
            src={`${GLOBAL_APIURL}/newsPhotos/${mainPic}`}
            alt={title}
            title={title}
            width={300}
            height={150}
          />
        </Link>
      </div>
      <div className={style.titleBlog}>
        <h1>
          <Link href={`/News/${id}`}>
            {locale == "en" && title}
            {locale == "fa" && titleFa}
            {locale == "ar" && titleAr}
          </Link>
        </h1>
        <p>
          {locale == "en" && <TextHanlder text={fullText} limit={30} />}
          {locale == "fa" && <TextHanlder text={fullTextFa} limit={30} />}
          {locale == "ar" && <TextHanlder text={fullTextAr} limit={30} />}
        </p>
        <div className={style.dateOfBlogReadMore}>
          <div className={style.dateOfBlog}>
            <Image src={dateIcon} alt="date Icon" width={30} height={30} />
            {locale == "en" && <p>{currDate}</p>}
            {locale == "ar" && <p>{currDate}</p>}
            {locale == "fa" && <p>{currDateFa}</p>}
          </div>
          <Link href={`/News/${id}`} className={style.readMore}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};
