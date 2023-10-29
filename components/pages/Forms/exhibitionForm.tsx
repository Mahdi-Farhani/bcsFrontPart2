import { useState } from "react";
import Image from "next/image";
import style from "./exhibitionForm.module.css";
import companyPhoto from "@/public/icons/image/logo/mainLogo3.png";
import { FormattedMessage } from "react-intl";
import Link from "next/link";
import { Instagram } from "@/public/icons/icons/svg/instagram";
import { Linkedin } from "@/public/icons/icons/svg/linkedin";
import { Twitter } from "@/public/icons/icons/svg/twitter";
import { Facebook } from "@/public/icons/icons/svg/facebook";
import { SuccessAlert, WarnAlert } from "@/components/common/alert/warnAlert";
import { GLOBAL_APIURL } from "@/constant/globalUrl";
import axios from "axios";
import { useRouter } from "next/router";
export const ExhibitionForm = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [compName, setcompName] = useState<string>("");
  const [industry, setIndustry] = useState<string>("");
  const [fieldOfActivity, setFieldOfActivity] = useState<string>("");
  const [jobPosition, setJobPosition] = useState<string>("");
  const router = useRouter();
  const handleFormSubmit = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (!name) {
      WarnAlert("اسم‌تان را وارد نکردید");
    } else {
      if (!phone) {
        WarnAlert("شماره تلفن‌تان را وارد نکردید");
      } else {
        try {
          const response = await axios.post(
            `${GLOBAL_APIURL}/api/forms/Exhibition`,
            {
              name,
              phone,
              compName,
              industry,
              fieldOfActivity,
              jobPosition,
            }
          );
          SuccessAlert("ارسال شد");
          setTimeout(() => {
            router.reload();
          }, 2000);
        } catch (error) {
          console.error("Error:", error);
        }
      }
    }
  };
  const [confirm, setConfirm] = useState<boolean>(false);
  const confirmHandler = () => {
    if (confirm) {
      setConfirm(false);
    } else {
      setConfirm(true);
    }
  };
  return (
    <>
      <div className={style.form}>
        <Image
          src={companyPhoto}
          alt="Baspar Chemi Sepidan"
          width={500}
          height={500}
        />
        <h1>فرم مشخصات</h1>
        <div className={style.formPart}>
          <strong>نام و نام‌خانوادگی را وارد کنید :</strong>

          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label placeholder="نام و نام‌خانوادگی"></label>
        </div>
        <div className={style.formPart}>
          <strong>شماره تماس را وارد کنید :</strong>

          <input
            type="text"
            required
            onChange={(e) => setPhone(e.target.value)}
          />
          <label placeholder="شماره تلفن"></label>
        </div>
        <div className={style.formPart}>
          <strong>نام شرکت یا موسسه را وارد کنید :</strong>

          <input
            type="text"
            required
            onChange={(e) => setcompName(e.target.value)}
          />
          <label placeholder="نام شرکت/موسسه"></label>
        </div>
        <div className={style.formPart}>
          <strong>نوع صنعت را وارد کنید :</strong>

          <input
            type="text"
            required
            onChange={(e) => setIndustry(e.target.value)}
          />
          <label placeholder="صنعت"></label>
        </div>
        <div className={style.formPart}>
          <strong>زمینه فعالیت را وارد کنید :</strong>

          <input
            type="text"
            required
            onChange={(e) => setFieldOfActivity(e.target.value)}
          />
          <label placeholder="زمینه فعالیت"></label>
        </div>
        <div className={style.formPart}>
          <strong>سمت شغلی را وارد کنید :</strong>

          <input
            type="text"
            required
            onChange={(e) => setJobPosition(e.target.value)}
          />
          <label placeholder="سمت شغلی"></label>
        </div>
        <button type="button" onClick={handleFormSubmit}>
          ثبت اطلاعات
        </button>
      </div>
      <footer className={style.footer}>
        <div className={style.footerSocialMedia}>
          <ul>
            <li>
              <Link
                className={style.socialBtn}
                href="https://www.facebook.com/"
                target="_blank"
              >
                <Facebook className={style.socialIcon} />
              </Link>
            </li>
            <li>
              <Link
                className={style.socialBtn}
                href="https://www.twitter.com/"
                target="_blank"
              >
                <Twitter className={style.socialIcon} />
              </Link>
            </li>
            <li>
              <Link
                className={style.socialBtn}
                href="https://www.linkedin.com/company/holding-bcs/"
                target="_blank"
              >
                <Linkedin className={style.socialIcon} />
              </Link>
            </li>
            <li>
              <Link
                className={style.socialBtn}
                href="https://instagram.com/holding_bcs?igshid=YmMyMTA2M2Y="
                target="_blank"
              >
                <Instagram className={style.socialIcon} />
              </Link>
            </li>
          </ul>
        </div>
        <div className={style.footerDisclaimer}>
          <p>
            &copy;
            <FormattedMessage id="page.layout.footer.footer" />
          </p>
        </div>
      </footer>
    </>
  );
};
