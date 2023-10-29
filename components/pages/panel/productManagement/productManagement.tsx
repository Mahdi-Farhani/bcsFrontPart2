import { FormEvent, useEffect, useState } from "react";
import style from "./productManagement.module.css";
import { UploadP } from "@/public/icons/icons/svg/panel/productManagement/upload";
import {
  ErrorAlert,
  SuccessAlert,
  WarnAlert,
} from "@/components/common/alert/warnAlert";
import axios from "axios";
import { useUserStore } from "@/lib/slices/userSlice";
import { useRouter } from "next/router";
import { Add } from "@/public/icons/icons/svg/panel/contentManage/add";
import Image from "next/image";
import { GLOBAL_APIURL } from "@/constant/globalUrl";
const MAX_FILE_SIZE = 1 * 1024 * 1024; // 20MB in bytes
type FormData = {
  pdfFile: FileList;
};

const imageMimeType = /image\/(png|jpg|jpeg)/i;
export const ProductManagement = () => {
  const [category, setCategory] = useState<string>("");
  const [persianCategory, setPersianCategory] = useState<string>("");
  const [arabicCategory, setArabicCategory] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);
  // POST (Category):
  const { user } = useUserStore();
  const router = useRouter();
  const categoryHandler = async () => {
    if (category == "" || persianCategory == "" || arabicCategory == "") {
      WarnAlert("Please fill in the category field!");
    } else {
      try {
        const { data } = await axios.post(
          `${GLOBAL_APIURL}/api/products/category`,
          {
            name: category,
            name_persian: persianCategory,
            name_arabic: arabicCategory,
          },
          {
            headers: {
              authorization: `Bearer ${user.token}`,
            },
          }
        );
        SuccessAlert(data.message);
      } catch (error: any) {
        ErrorAlert(error.response.data.message);
        if (error.response.data.message == "jwt expired") {
          router.push("/SignIn");
          // resetUser()
        } else {
          ErrorAlert(error.message);
        }
      }
    }
  };
  // GET (Category):

  useEffect(() => {
    async function fetchCategories() {
      try {
        const { data } = await axios.get(
          `${GLOBAL_APIURL}/api/products/categoryData`,
          {
            headers: {
              authorization: `Bearer ${user.token}`,
            },
          }
        );
        setCategories(data.categoryNames);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCategories();
  }, [user]);
  // POST (Product):
  const [titleValue, setTitleValue] = useState<string>("");
  const [persianTitleValue, setPersianTitleValue] = useState<string>("");
  const [arabicTitleValue, setArabicTitleValue] = useState<string>("");
  const [categoryValue, setCategoryValue] = useState<string>("");
  const [statusValue, setStatusValue] = useState<string>("");
  const [overViewValue, setOverViewValue] = useState<string>("");
  const [persianOverViewValue, setPersianOverViewValue] = useState<string>("");
  const [arabicOverViewValue, setArabicOverViewValue] = useState<string>("");
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [mainPhotos, setMainPhotos] = useState<File | undefined>();
  const formData = new FormData();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        alert("PDF file size exceeds limit");
      } else {
        setPdfFile(file);
      }
    }
  };

  const handleMainPhotoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile && imageMimeType.test(selectedFile.type)) {
      setMainPhotos(selectedFile);
    } else {
      WarnAlert("Error !");
    }
  };

  const productAddHandler = async () => {
    if (!titleValue) {
      WarnAlert("Write the topic you have in mind for your product!");
      return;
    }
    if (!categoryValue) {
      WarnAlert("Select your product category!");
      return;
    }
    if (!statusValue) {
      WarnAlert("Select your product Status!");
      return;
    }
    if (!overViewValue) {
      WarnAlert("Write your product OverView!");
      return;
    }
    if (!pdfFile) {
      WarnAlert("upload your product DataSheet!");
      return;
    }

    formData.append("title", titleValue);
    formData.append("title_persian", persianTitleValue);
    formData.append("title_arabic", arabicTitleValue);
    formData.append("category", categoryValue);
    formData.append("status", statusValue);
    if (pdfFile) {
      formData.append("file", pdfFile);
    }
    if (mainPhotos) {
      formData.append("img", mainPhotos);
    }
    formData.append("overView", overViewValue);
    formData.append("overView_persian", persianOverViewValue);
    formData.append("overView_arabic", arabicOverViewValue);
    try {
      const { data } = await axios.post(
        `${GLOBAL_APIURL}/api/products/productAdd`,
        formData,
        {
          headers: {
            authorization: `Bearer ${user.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      SuccessAlert("Product Created !");
    } catch (error: any) {
      WarnAlert(error.message);
    }
  };
  return (
    <div className={style.productManagement}>
      <div className={style.categoryPart1}>
        <h1>Categorys</h1>
        <table className={style.tableOfCategory}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Category Name</th>
              <th>Number Of Member</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data}</td>
                <td>8</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={style.createCategory}>
          <h1>Add Category</h1>
          <p>Please enter the name of the new category you want.</p>
          <div className={style.addCategoryPart1}>
            <label htmlFor="categoryLabel">Category(English):</label>
            <input
              type="text"
              id="categoryLabel"
              className={style.inputProduct}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Write the name of the new category you are considering..."
            />
          </div>
          <div className={style.addCategoryPart1}>
            <label htmlFor="faCategoryLabel">Category(Persian):</label>
            <input
              type="text"
              id="faCategoryLabel"
              className={style.inputProductFa}
              onChange={(e) => setPersianCategory(e.target.value)}
              placeholder="نام دسته جدیدی که مد نظر دارید را بنویسید..."
            />
          </div>
          <div className={style.addCategoryPart1}>
            <label htmlFor="arCategoryLabel">Category(Arabic):</label>
            <input
              type="text"
              id="arCategoryLabel"
              className={style.inputProductFa}
              onChange={(e) => setArabicCategory(e.target.value)}
              placeholder="اكتب اسم الفئة الجديدة التي تفكر فيها ..."
            />
          </div>
          <button
            type="button"
            onClick={categoryHandler}
            className={style.categoryBTN}
          >
            Submit
          </button>
        </div>
      </div>
      {/* Product Part : */}
      <div className={style.addProduct}>
        <h1>product management</h1>
        <div className={style.ProductMPart1}>
          <label htmlFor="title">Title Of Product:</label>
          <input
            type="text"
            id="title"
            className={style.inputProduct}
            onChange={(e) => setTitleValue(e.target.value)}
            placeholder="Write the topic you have in mind for your product..."
          />
        </div>
        <div className={style.ProductMPart1}>
          <label htmlFor="titlePersian">Title Of Product(Persian):</label>
          <input
            type="text"
            id="titlePersian"
            className={style.inputProductFa}
            onChange={(e) => setPersianTitleValue(e.target.value)}
            placeholder="موضوعی را که برای محصول خود در نظر دارید بنویسید..."
          />
        </div>
        <div className={style.ProductMPart1}>
          <label htmlFor="titleArabic">Title Of Product(Arabic):</label>
          <input
            type="text"
            id="titleArabic"
            className={style.inputProductFa}
            onChange={(e) => setArabicTitleValue(e.target.value)}
            placeholder="اكتب الموضوع الذي يدور في ذهنك لمنتجك ..."
          />
        </div>
        <div className={style.productMPart6}>
          <label htmlFor="categorySelect">category :</label>
          <select
            name="categorySelect"
            onChange={(e) => setCategoryValue(e.target.value)}
            id="categorySelect"
          >
            <option value="noOne" disabled>
              No One
            </option>
            {categories.map((data, index) => (
              <option key={index} value={data}>
                {data}
              </option>
            ))}
          </select>
        </div>
        <div className={style.productMPart2}>
          <p>Is it available?</p>
          <div className={style.productStatus}>
            <input
              type="radio"
              className={style.inputProduct}
              name="available"
              value={"true"}
              onChange={(e) => setStatusValue(e.target.value)}
            />
            <label htmlFor="">Yes</label>
            <input
              type="radio"
              className={style.inputProduct}
              name="available"
              value={"false"}
              onChange={(e) => setStatusValue(e.target.value)}
            />
            <label htmlFor="">No</label>
          </div>
        </div>
        <div className={style.productPart7}>
          <div className={style.mainPhotoPart1}>
            <p className={style.label}>
              Main Photo :
              <span className={style.photosDis}>
                (Choose the index photo you want)
              </span>
            </p>
            <label htmlFor="main-Photo">
              <Add className={style.photoSelect} />
            </label>
            <input
              className={style.inputPhoto}
              type="file"
              id="main-Photo"
              name="photo"
              onChange={handleMainPhotoChange}
            />
          </div>
          <div className={style.previewPhotos}>
            {mainPhotos ? (
              <div key={mainPhotos.name}>
                <Image
                  src={URL.createObjectURL(mainPhotos)}
                  alt={mainPhotos.name}
                  className={style.pPhotos}
                  title="News Photo"
                  width={200}
                  height={200}
                />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className={style.productPart3}>
          <p>Upload Data Sheet File:</p>
          <label htmlFor="pdfFile">
            <UploadP className={style.uploadIcon} />
          </label>
          <input
            type="file"
            id="pdfFile"
            accept=".pdf"
            onChange={handleFileChange}
          />
          {pdfFile?.name == null ? <p>No File !</p> : <p>{pdfFile?.name}</p>}
        </div>
        <div className={style.productPart4}>
          <label htmlFor="OverView">OverView :</label>
          <textarea
            name="OverView"
            id="OverView"
            cols={40}
            rows={2}
            className={style.productOVTextA}
            onChange={(e) => setOverViewValue(e.target.value)}
            placeholder="Write the overview you want..."
          ></textarea>
        </div>
        <div className={style.productPart4}>
          <label htmlFor="OverViewFa">OverView(Persian):</label>
          <textarea
            name="OverView"
            id="OverViewFa"
            cols={40}
            rows={2}
            className={style.productOVTextAFa}
            onChange={(e) => setPersianOverViewValue(e.target.value)}
            placeholder="نمای کلی مورد نظر خود را بنویسید..."
          ></textarea>
        </div>
        <div className={style.productPart4}>
          <label htmlFor="OverViewAr">OverView(Araic):</label>
          <textarea
            name="OverView"
            id="OverViewAr"
            cols={40}
            rows={2}
            className={style.productOVTextAFa}
            onChange={(e) => setArabicOverViewValue(e.target.value)}
            placeholder="اكتب النظرة العامة التي تريدها ..."
          ></textarea>
        </div>
        {/* <div className={style.productPart5}>
                    <label htmlFor="features">Features :</label>
                    <input type="text" name="features" id="features" placeholder='Write the features you want...' />
                </div> */}
        <button className={style.categoryBTN} onClick={productAddHandler}>
          Submit
        </button>
      </div>
    </div>
  );
};
