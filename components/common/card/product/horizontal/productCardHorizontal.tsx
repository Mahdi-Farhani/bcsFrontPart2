import Image from "next/image";

import { HTMLAttributes, useEffect, useState } from "react";
import { BookMarkAdd } from "@/public/icons/icons/svg/cards/product/bookMarkAdd";
import { BookMarkAdded } from "@/public/icons/icons/svg/cards/product/bookMarkAdded";
import style from "./productCardHorizontal.module.css";
import compoundIcon from "@/public/icons/image/products/compunds.png";
import masterBatchIcon from "@/public/icons/image/products/masterBatch.png";
import { useRouter } from "next/router";
export interface Product {
  name: string;
  mainCategory: string;
  category: string;
  shortDisc: string;
  overView?: string;
  overView_persian?: string;
  overView_arabic?: string;
}
export const ProductCardHorizontal = ({
  name,
  category,
  mainCategory,
  shortDisc,
  overView,
  overView_persian,
  overView_arabic,
}: Product) => {
  const { locale } = useRouter();
  // const [bookMark, setBookMark] = useState<boolean>(bookMarkA || false);
  // const saveHandler = () => {
  //   if (bookMark === true) {
  //     setBookMark(false);
  //   } else {
  //     setBookMark(true);
  //   }
  // };
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
        <div>
          <p className={style.miniDiscription}>
            <div className={style.detailsPart}>
              <p>
                <b>Discription :</b>
              </p>
              <p>{shortDisc}</p>
            </div>
            {/* {locale == "en" && overView}
            {locale == "fa" && overView_persian}
            {locale == "ar" && overView_arabic} */}
          </p>
          <button className={style.buttons}>See Details</button>
        </div>
      </div>
      <span className={style.borderOnderOfFilterBox}></span>
    </>
  );
};
