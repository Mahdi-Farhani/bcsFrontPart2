import { ProductCardVertical } from "@/components/common/card/product/vertical/productCardVertical";
import { ProductCardHorizontal } from "@/components/common/card/product/horizontal/productCardHorizontal";
// import icons:
import style from "./productsPage.module.css";
import { Fragment, useCallback, useEffect, useState } from "react";
import Pagination from "rc-pagination";
import { LeftAngle } from "@/public/icons/icons/svg/cards/blog/leftAngle";
import { RightAngle } from "@/public/icons/icons/svg/cards/blog/rightAngle";
// import { FilterBoxP } from "@/components/common/filterBox/products/filterBox";
import { ListView } from "@/public/icons/icons/svg/show/listView";
import { GridView } from "@/public/icons/icons/svg/show/GridView";
import topic from "@/public/icons/image/blogs/topicBackGround.png";
import Image from "next/image";
import axios from "axios";
import { GLOBAL_APIURL } from "@/constant/globalUrl";
import { useRouter } from "next/router";

export interface Product extends Document {
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
export const ProductsPage = () => {
  // Load Products :
  const [newsData, setNewsData] = useState<Product[]>([]);
  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(
        `${GLOBAL_APIURL}/api/products/productList`
      );
      setNewsData(data.products);
    } catch (error: any) {
      console.log(error);
    }
  };

  // Load Search :
  const router = useRouter();
  const params = router.query;
  const [nameProduct, setNameroduct] = useState<string>("");
  const [categoryProduct, setCategoryProduct] = useState<string>("none");
  const [productType, setProductType] = useState<string>("none");
  const [productIndustry, setProductIndustry] = useState<string>("none");

  const searchBtn = () => {
    const query = {
      name: nameProduct,
      mainCategory: categoryProduct,
      categoryType: productType,
      industry: productIndustry,
    };
    router.push({
      pathname: "/Products",
      query,
    });
    router.reload;
  };

  const { name, mainCategory, categoryType, industry } = router.query;
  const [searchData, setSearchData] = useState<Product[]>([]);
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`${GLOBAL_APIURL}/api/products/Search`, {
        params: {
          name: name,
          mainCategory: mainCategory,
          categoryType: categoryType,
          industry: industry,
        },
      });
      console.log(response.data);
      setNewsData(response.data);
      setSearchData(response.data);
    } catch (error) {
      // پردازش خطاهای API
      console.error(error);
    }
  }, [name, mainCategory, categoryType, industry]);
  useEffect(() => {
    if (mainCategory) {
      fetchData();
    } else {
      fetchCategories();
    }
  }, [name, mainCategory, categoryType, industry, fetchData]);

  // change Show : false = gridView , true = listView
  const [show, setShow] = useState<boolean>(false);
  const gridHandler = () => {
    if (show === true) {
      setShow(false);
    }
  };
  const listHandler = () => {
    if (show === false) {
      setShow(true);
    }
  };
  const [perPage, setPerPage] = useState<number>(24);
  const [size, setSize] = useState<number>(perPage);
  const [current, setCurrent] = useState<number>(1);
  const PerPageChange = (value: number) => {
    setSize(value);
    const newPerPage = Math.ceil(newsData.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };
  const getData = (current: number, pageSize: number) => {
    // Normally you should get the data from the server
    return newsData.slice((current - 1) * pageSize, current * pageSize);
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
  const [optionBar, setOptionBar] = useState<string>("default");
  return (
    <>
      <div className={style.titleOfBlogs}>
        <Image src={topic} alt="News Topic Background" />
        <h1>Products</h1>
      </div>
      {/* search bar part : */}
      <div className={style.allFilterBox}>
        <div className={style.part1Search}>
          <div className={style.searchBarPart}>
            <p>Search by CodeName</p>
            <input
              onChange={(e) => setNameroduct(e.target.value)}
              type="text"
              placeholder="Search by CodeName ..."
            />
            {/* <div className={style.resultPart}></div> */}
          </div>
          <div className={style.optionBarPart}>
            <p>Search by category</p>
            <div className={style.optionBarPartDetail}>
              <select
                name="category"
                id="categoryFilter"
                placeholder={optionBar}
                onChange={(e) => setCategoryProduct(e.target.value)}
              >
                <option value="none">None</option>
                <option value="MasterBatch">MasterBatch</option>
                <option value="Compounds">Compounds</option>
                <option value="Alloy">Alloy</option>
              </select>
            </div>
          </div>
        </div>
        <div className={style.part2Search}>
          <div className={style.optionBarPart}>
            <p>Search by Industry</p>
            <div className={style.optionBarPartDetail}>
              <select
                name="category"
                id="categoryFilter"
                placeholder={optionBar}
                onChange={(e) => setProductIndustry(e.target.value)}
              >
                <option value="none">None</option>
                <option value="Electrical">Electrical</option>
                <option value="Home Appliances">Home Appliances</option>
                <option value="Automotive">Automotive</option>
              </select>
            </div>
          </div>
          <div className={style.optionBarPart}>
            <p>Search by Type</p>
            <div className={style.optionBarPartDetail}>
              <select
                name="category"
                id="categoryFilter"
                placeholder={optionBar}
                onChange={(e) => setProductType(e.target.value)}
              >
                <option value="none">None</option>
                <option value="TPV/TPE ">TPV/TPE</option>
                <option value="PP">PP</option>
                <option value="ABS">ABS</option>
                <option value="PC/ABS">PC/ABS</option>
                <option value="PMMA">PMMA</option>
                <option value="PA">PA</option>
                <option value="HIPS">HIPS</option>
                <option value="MABS">MABS</option>
                <option value="PC">PC</option>
                <option value="TPE">TPE</option>
                <option value="TPV">TPV</option>
              </select>
            </div>
          </div>
        </div>

        <button onClick={searchBtn} className={style.searchBtn}>
          Search
        </button>
      </div>
      <span className={style.borderOnderOfFilterBox}></span>
      {/* <div className={style.changeSize}>
        <button className={style.ListView} onClick={listHandler}>
          <ListView />
        </button>
        <span></span>
        <button className={style.GridView} onClick={gridHandler}>
          <GridView />
        </button>
      </div> */}
      {newsData.length !== 0 ? (
        <div className={style.allNewsPartPagination}>
          <div className={style.allNewsPart}>
            {getData(current, size).map((data, index) => (
              <Fragment key={data._id}>
                <ProductCardVertical
                  name={data.name}
                  mainCategory={data.mainCategory}
                  category={data.category}
                  shortDisc={data.shortDisc}
                  overView={data.overView}
                  overView_persian={data.overView_persian}
                  overView_arabic={data.overView_arabic}
                  featureOne={data.featureOne}
                  featureTwo={data.featureTwo}
                  featureThree={data.featureThree}
                  featureFour={data.featureFour}
                  id={data._id}
                />
              </Fragment>
            ))}
          </div>
          {/* {show ? (
          <>
            <span className={style.borderOnderOfFilterBox}></span>
            <div className={style.allNewsPartList}>
              {getData(current, size).map((data, index) => (
                <Fragment key={data._id}>
                  <ProductCardHorizontal
                    name={data.name}
                    category={data.category}
                    mainCategory={data.mainCategory}
                    shortDisc={data.shortDisc}
                    overView={data.overView}
                    overView_persian={data.overView_persian}
                    overView_arabic={data.overView_arabic}
                  />
                </Fragment>
              ))}
            </div>
          </>
        ) : (
          <div className={style.allNewsPart}>
            {getData(current, size).map((data, index) => (
              <Fragment key={data._id}>
                <ProductCardVertical
                  name={data.name}
                  mainCategory={data.mainCategory}
                  category={data.category}
                  shortDisc={data.shortDisc}
                  overView={data.overView}
                  overView_persian={data.overView_persian}
                  overView_arabic={data.overView_arabic}
                  featureOne={data.featureOne}
                  featureTwo={data.featureTwo}
                  featureThree={data.featureThree}
                  featureFour={data.featureFour}
                />
              </Fragment>
            ))}
          </div>
        )} */}
          <Pagination
            className={style.paginationData}
            onChange={PaginationChange}
            total={newsData.length}
            current={current}
            pageSize={size}
            showSizeChanger={false}
            itemRender={PrevNextArrow}
            onShowSizeChange={PerPageChange}
          />
        </div>
      ) : (
        <div>
          <p className={style.notFound}>Products Not Founded !</p>
        </div>
      )}
    </>
  );
};
