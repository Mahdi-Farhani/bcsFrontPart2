import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { HTMLAttributes, useEffect, useState } from "react";
import { BookMarkAdd } from "@/public/icons/icons/svg/cards/product/bookMarkAdd";
import { BookMarkAdded } from "@/public/icons/icons/svg/cards/product/bookMarkAdded";
import style from "./productCardVertical.module.css";
import compoundIcon from "@/public/icons/image/products/compunds.png";
import masterBatchIcon from "@/public/icons/image/products/masterBatch.png";
import { useRouter } from "next/router";
export interface Product {
  id: number;
  name: string;
  mainCategory: string;
  category: string;
  shortDisc: string;
  overView?: string;
  overView_persian?: string;
  overView_arabic?: string;
  featureOne: string;
  featureTwo: string;
  featureThree: string;
  featureFour: string;
}
interface Text {
  text: string;
  limit: number;
}
export const ProductCardVertical = ({
  id,
  name,
  mainCategory,
  category,
  shortDisc,
  overView,
  overView_persian,
  overView_arabic,
  featureOne,
  featureTwo,
  featureThree,
  featureFour,
}: Product) => {
  // const [bookMark, setBookMark] = useState<boolean>(bookMarkA || false);
  // const saveHandler = () => {
  //   if (bookMark === true) {
  //     setBookMark(false);
  //   } else {
  //     setBookMark(true);
  //   }
  // };
  const TextHanlder = ({ text, limit }: Text) => {
    const truncatedText = text?.split(" ").slice(0, limit).join(" ");

    return (
      <div className={style.discription}>
        <p>
          {truncatedText} {text?.split(" ").length > limit ? "..." : ""}
        </p>
      </div>
    );
  };
  const router = useRouter();
  const { locale } = useRouter();
  const clickHandler = () => {
    router.push(`/Products/${id}`);
  };
  return (
    <>
      <div className={style.cardBlog}>
        <div className={style.mainImgBlogDate}>
          <Image
            src={compoundIcon}
            alt={mainCategory}
            title={mainCategory}
            width={150}
            height={150}
          />
          <div className={style.productTitle}>
            <h2>
              {mainCategory}/{category}
            </h2>
            <p>{name}</p>
          </div>
        </div>

        <div className={style.productVertDetail}>
          <div className={style.detailsPart}>
            <p>
              <b>Discription :</b>
            </p>
            <p>{shortDisc}</p>
          </div>
          <div className={style.detailsPart}>
            <p>
              <b>Color :</b>
            </p>
            <p>{featureOne}</p>
          </div>
          <div className={style.detailsPart}>
            <p>
              <b>MFI :</b>
            </p>
            <p>{featureTwo}</p>
          </div>
          <div className={style.detailsPart}>
            <p>
              <b>Tensile Strength :</b>
            </p>
            <p>{featureThree}</p>
          </div>
          <div className={style.detailsPart}>
            <p>
              <b>Hardness :</b>
            </p>
            <p>{featureFour}</p>
          </div>
        </div>
        {overView && (
          <>{locale == "en" && <TextHanlder text={overView} limit={10} />}</>
        )}
        {overView_persian && (
          <>
            {locale == "fa" && (
              <TextHanlder text={overView_persian} limit={10} />
            )}
          </>
        )}
        {overView_arabic && (
          <>
            {locale == "ar" && (
              <TextHanlder text={overView_arabic} limit={10} />
            )}
          </>
        )}
        <button type="button" onClick={clickHandler} className={style.buttons}>
          Details
        </button>
      </div>
    </>
  );
};
