import { LeftAngle } from "@/public/icons/icons/svg/cards/blog/leftAngle";
import { RightAngle } from "@/public/icons/icons/svg/cards/blog/rightAngle";
import style from "./productTable.module.css";
import { useEffect, useState } from "react";
import { DeleteAcc } from "@/public/icons/icons/svg/dashboard/delete";
import { EditAcc } from "@/public/icons/icons/svg/dashboard/edit";
import Pagination from "rc-pagination";
import { useRouter } from "next/router";
import axios from "axios";
import { useUserStore } from "@/lib/slices/userSlice";
import { ErrorAlert, SuccessAlert } from "../../alert/warnAlert";
import Link from "next/link";
import { GLOBAL_APIURL } from "@/constant/globalUrl";

export const ProductTable = () => {
  // GET (Product):
  const [products, setProducts] = useState<string[]>([]);
  const { user } = useUserStore();
  // useEffect(() => {

  //     async function fetchCategories() {
  //         try {
  //             const { data } = await axios.get(`${GLOBAL_APIURL}/products/productList`, {
  //                 headers: {
  //                     authorization: `Bearer ${user.token}`,
  //                 },
  //             });
  //             setProducts(data.products);

  //         } catch (error: any) {
  //             ErrorAlert(error);
  //         }
  //     }
  //     fetchCategories();
  // }, [user.token])
  // DELETE (Product):
  const deleteProHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    try {
      const { data } = await axios.delete(
        `${GLOBAL_APIURL}/api/products/deleteProduct/` + value,
        {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        }
      );
      SuccessAlert("deleted !");
    } catch (error: any) {
      ErrorAlert(error);
    }
  };
  // EDIT (Product):
  const editProHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    try {
      const { data } = await axios.delete(
        `${GLOBAL_APIURL}/products/editProduct/` + value,
        {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        }
      );
      SuccessAlert("deleted !");
    } catch (error: any) {
      ErrorAlert(error);
    }
  };
  const [perPage, setPerPage] = useState<number>(5);
  const [size, setSize] = useState<number>(perPage);
  const [current, setCurrent] = useState<number>(1);
  const PerPageChange = (value: number) => {
    setSize(value);
    const newPerPage = Math.ceil(products.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };
  const getData = (current: number, pageSize: number) => {
    // Normally you should get the data from the server
    return products.slice((current - 1) * pageSize, current * pageSize);
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
  // Product List :
  interface productL {
    _id: string;
    id: string;
    Name: string;
    Category: string;
    Amount: number;
    views: number;
  }
  const ProductList = ({
    _id,
    id,
    Name,
    Category,
    Amount,
    views,
  }: productL) => {
    return (
      <tr>
        <td>
          <Link href={"/Products/" + id}>{Name}</Link>
        </td>
        <td>{Category}</td>
        <td>{Amount}</td>
        <td>{views}</td>
        <td className={style.editSide}>
          <button title="Delete Account" value={_id} onClick={deleteProHandler}>
            <DeleteAcc className={style.deleteIcon} />
          </button>
          <button title="Edit Account" value={_id} onClick={editProHandler}>
            <EditAcc className={style.editIcon} />
          </button>
        </td>
      </tr>
    );
  };
  // add product button :
  const [add, setAdd] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const addPermission = router.pathname.split("/")[2];
    if (addPermission === "productList") {
      setAdd(true);
    } else {
      setAdd(false);
    }
  }, [router.pathname]);
  const addProductHandler = () => {
    router.push("/Panel/productManagement");
  };
  return (
    <div className={style.productList}>
      <h1>Product List</h1>
      <table className={style.productListAll}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>َAmount</th>
            <th>views</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {getData(current, size).map((data, index) => (
            <ProductList
              key={""}
              id={""}
              _id={""}
              Name={""}
              Category={""}
              Amount={0}
              views={0}
            />
          ))}
        </tbody>
      </table>
      {products.length == 0 ? (
        <>
          <p className={style.nullProduct}>
            You have not created a product on the site!
          </p>
          <button
            type="button"
            onClick={addProductHandler}
            className={add ? style.addBtnOn : style.addBtnOff}
          >
            Add Product
          </button>
        </>
      ) : (
        <>
          <Pagination
            className={style.paginationData}
            onChange={PaginationChange}
            total={products.length}
            current={current}
            pageSize={size}
            showSizeChanger={false}
            itemRender={PrevNextArrow}
            onShowSizeChange={PerPageChange}
          />
        </>
      )}
    </div>
  );
};
