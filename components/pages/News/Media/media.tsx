import Image from "next/image";
import style from "./media.module.css";
import mainImg from "@/asset/banner/34.png";
import Iframe from "@/components/common/video/video";
import { Fragment, useState } from "react";
import { videoData } from "@/data/urlAparat";
import { LeftAngle } from "@/public/icons/icons/svg/cards/blog/leftAngle";
import { RightAngle } from "@/public/icons/icons/svg/cards/blog/rightAngle";
import Pagination from "rc-pagination";

export const MediaPage = () => {
  const [perPage, setPerPage] = useState<number>(24);
  const [size, setSize] = useState<number>(perPage);
  const [current, setCurrent] = useState<number>(1);
  const PerPageChange = (value: number) => {
    setSize(value);
    const newPerPage = Math.ceil(videoData.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };
  const getData = (current: number, pageSize: number) => {
    // Normally you should get the data from the server
    return videoData.slice((current - 1) * pageSize, current * pageSize);
  };
  const PaginationChange = (page: number, pageSize: number) => {
    setCurrent(page);
    setSize(pageSize);
  };
  const PrevNextArrow = (
    current: number,
    type: string,
    originalElement: any
  ) => {
    if (type === "prev") {
      return (
        <button title="Back">
          <LeftAngle className={style.LeftAngle} />
        </button>
      );
    }
    if (type === "next") {
      return (
        <button title="Next">
          <RightAngle className={style.RightAngle} />
        </button>
      );
    }
    return originalElement;
  };
  return (
    <div>
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
        {getData(current, size).map((data, index) => (
          <Fragment key={index}>
            <Iframe src={data.src} />
          </Fragment>
        ))}
      </div>
      <Pagination
        className={style.paginationData}
        onChange={PaginationChange}
        total={videoData.length}
        current={current}
        pageSize={size}
        showSizeChanger={false}
        itemRender={PrevNextArrow}
        onShowSizeChange={PerPageChange}
      />
    </div>
  );
};
