import { useState, useEffect } from "react";
import style from "./contentManage.module.css";
import { toast } from "react-toastify";
import { Add } from "@/public/icons/icons/svg/panel/contentManage/add";
import {
  ErrorAlert,
  SuccessAlert,
  WarnAlert,
} from "@/components/common/alert/warnAlert";
import Image from "next/image";
import axios from "axios";
import { useUserStore } from "@/lib/slices/userSlice";
import { GLOBAL_APIURL } from "@/constant/globalUrl";

// Define a regex for image MIME types

const imageMimeType = /image\/(png|jpg|jpeg)/i;
// Define the ContentManage component
export const ContentManage = () => {
  // Define state variables for each image file
  const [photos, setPhotos] = useState<File[]>([]);
  const maxFiles = 10;
  const [numPhotos, setNumPhotos] = useState<number>(0);
  const [mainPhotos, setMainPhotos] = useState<File>();
  const [titleName, setTitleName] = useState<string>("");
  const [titleNameFa, setTitleNameFa] = useState<string>("");
  const [titleNameAr, setTitleNameAr] = useState<string>("");
  const [tagsName, setTagsName] = useState<string>("");
  const [discriptionName, setDiscriptionName] = useState<string>("");
  const [discriptionNameFa, setDiscriptionNameFa] = useState<string>("");
  const [discriptionNameAr, setDiscriptionNameAr] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const { user } = useUserStore();
  const formData = new FormData();
  // Handle the selection of multiple photos
  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedPhotos = Array.from(event.target.files ?? []);
    if (selectedPhotos.length > 0) {
      setPhotos(selectedPhotos);
      setNumPhotos(selectedPhotos.length);
    } else {
      ErrorAlert("No photos selected");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Do something with the selected photos
  };

  // Handle the selection of the main photo
  const handleMainPhotoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      if (imageMimeType.test(selectedFile.type)) {
        setMainPhotos(selectedFile);
      } else {
        ErrorAlert("Please select a valid image file (PNG, JPG, or JPEG)");
      }
    }
  };
  const productAddHandler = async () => {
    if (!photos) {
      WarnAlert("You did not choose news photos!");
      return;
    }
    if (!mainPhotos) {
      WarnAlert("You did not choose main photo!");
      return;
    }
    if (!titleName) {
      WarnAlert("Write the subject of the news!");
      return;
    }
    if (!discriptionName) {
      WarnAlert("Write the desired text!");
      return;
    }
    if (photos.length > maxFiles) {
      alert(`You can only import ${maxFiles} photo files`);
      return;
    }
    photos.forEach((pic) => {
      formData.append("pics", pic);
    });
    formData.append("mainPic", mainPhotos);
    formData.append("title", titleName);
    formData.append("titleFa", titleNameFa);
    formData.append("titleAr", titleNameAr);
    formData.append("fullText", discriptionName);
    formData.append("fullTextFa", discriptionNameFa);
    formData.append("fullTextAr", discriptionNameAr);
    try {
      const { data } = await axios.post(
        `${GLOBAL_APIURL}/api/news/addNews`,
        formData
        // {
        //     headers: {
        //         authorization: `Bearer ${user.token}`,
        //         "Content-Type": "multipart/form-data",
        //     },
        // }
      );
      SuccessAlert("News Created !");
    } catch (error: any) {
      WarnAlert(error.message);
    }
  };
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <form className={style.addNews}>
      <h1>Add News</h1>
      <div className={style.photosPart}>
        <div className={style.photosPart1}>
          {isClient ? (
            <p className={style.label}>
              photos :
              <p className={style.photosDis}>
                (Write the name of the new category you are considering)
              </p>
            </p>
          ) : (
            <></>
          )}
          <label htmlFor="photo-upload">
            <Add className={style.photoSelect} />
          </label>
          <input
            type="file"
            id="photo-upload"
            name="photos"
            multiple
            onChange={handlePhotoChange}
          />
        </div>
        {isClient ? (
          <p className={style.numSelected}>{numPhotos} file selected !</p>
        ) : (
          <></>
        )}
        <div className={style.previewPhotos}>
          {photos.map((photo) => (
            <div key={photo.name}>
              <Image
                src={URL.createObjectURL(photo)}
                alt={photo.name}
                className={style.pPhotos}
                title="News Photo"
                width={200}
                height={200}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={style.mainPhoto}>
        <div className={style.mainPhotoPart1}>
          {isClient ? (
            <p className={style.label}>
              Main Photo :
              <p className={style.photosDis}>
                (Choose the index photo you want)
              </p>
            </p>
          ) : (
            <></>
          )}
          <label htmlFor="main-Photo">
            <Add className={style.photoSelect} />
          </label>
          <input
            type="file"
            id="main-Photo"
            name="photos"
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
      <div className={style.titlePart}>
        <label htmlFor="newsTitle" className={style.label}>
          Title :
        </label>
        <input
          onChange={(e) => setTitleName(e.target.value)}
          type="text"
          id="newsTitle"
          className={style.textInput}
          placeholder="Write the topic you want for the news..."
        />
      </div>
      <div className={style.titlePart}>
        <label htmlFor="newsTitle" className={style.label}>
          Title(persian) :
        </label>
        <input
          onChange={(e) => setTitleNameFa(e.target.value)}
          type="text"
          id="newsTitle"
          className={style.textInput}
          placeholder="Write the topic you want for the news..."
        />
      </div>
      <div className={style.titlePart}>
        <label htmlFor="newsTitle" className={style.label}>
          Title(arabic) :
        </label>
        <input
          onChange={(e) => setTitleNameAr(e.target.value)}
          type="text"
          id="newsTitle"
          className={style.textInput}
          placeholder="Write the topic you want for the news..."
        />
      </div>
      {/* <div className={style.titlePart}>
                <label htmlFor="tagsTitle" className={style.label}>
                    Tags :
                </label>
                <input onChange={e => setTagsName(e.target.value)} type="text" id="tagsTitle" className={style.textInput} placeholder="Write the desired tags for the news..." />
            </div> */}
      <div className={style.titlePart}>
        <label htmlFor="tagsTitle" className={style.label}>
          Discription :
        </label>
        <textarea
          onChange={(e) => setDiscriptionName(e.target.value)}
          name="tagsTitle"
          id="tagsTitle"
          cols={30}
          rows={10}
          className={style.textInput}
          placeholder="Write your description..."
        ></textarea>
      </div>
      <div className={style.titlePart}>
        <label htmlFor="tagsTitle" className={style.label}>
          Discription(persian) :
        </label>
        <textarea
          onChange={(e) => setDiscriptionNameFa(e.target.value)}
          name="tagsTitle"
          id="tagsTitle"
          cols={30}
          rows={10}
          className={style.textInput}
          placeholder="Write your description..."
        ></textarea>
      </div>
      <div className={style.titlePart}>
        <label htmlFor="tagsTitle" className={style.label}>
          Discription(Arabic) :
        </label>
        <textarea
          onChange={(e) => setDiscriptionNameAr(e.target.value)}
          name="tagsTitle"
          id="tagsTitle"
          cols={30}
          rows={10}
          className={style.textInput}
          placeholder="Write your description..."
        ></textarea>
      </div>
      {/* <div className={style.showPart} >
                <p className={style.labelH}>Please select news status mode:</p>
                <div className={style.showPartRadio}>
                    <input type="radio" id="tagsTitle" name="status" className={style.radioInput} value={"on"} />
                    <label htmlFor="tagsTitle" className={style.label}>
                        Show
                    </label>
                </div>
                <div className={style.showPartRadio}>
                    <input type="radio" id="tagsTitle" name="status" className={style.radioInput} value={"off"} />
                    <label htmlFor="tagsTitle" className={style.label}>
                        Dont Show
                    </label>
                </div>
            </div> */}
      <button
        onClick={productAddHandler}
        type="button"
        className={style.uploadNews}
      >
        upload
      </button>
    </form>
  );
};
