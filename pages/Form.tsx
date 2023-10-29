import { Layout } from "@/components/common/layout/mainPage/layout";
import { ExhibitionForm } from "@/components/pages/Forms/exhibitionForm";
import { NewsPage } from "@/components/pages/News/news";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Form = () => {
  return (
    <>
      <ExhibitionForm />
      <ToastContainer />
    </>
  );
};

export default Form;
