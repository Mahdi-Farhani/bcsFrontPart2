import Link from "next/link";
import style from "./footer.module.css";
// import all social icons :
import { Facebook } from "@/public/icons/icons/svg/facebook";
import { Twitter } from "@/public/icons/icons/svg/twitter";
import { Linkedin } from "@/public/icons/icons/svg/linkedin";
import { Instagram } from "@/public/icons/icons/svg/instagram";
import { FormattedMessage } from "react-intl";
import Image from "next/image";

interface IconProp {
  icon: String;
}

export const Footer = () => {
  return (
    <footer id={style.footer}>
      <div className={style.allFooterContent}>
        <div className={style.footerAboutUs}>
          <h2>
            <FormattedMessage id="page.layout.footer.companyName" />
          </h2>
          <ul>
            <li>
              <Link href="/News">
                <FormattedMessage id="page.layout.newsNav" />
              </Link>
            </li>
            <li>
              <Link href="/AboutUs/History">
                <FormattedMessage id="page.layout.history" />
              </Link>
            </li>
            <li>
              <Link href="/AboutUs/Vision">
                <FormattedMessage id="page.layout.vision" />
              </Link>
            </li>
          </ul>
        </div>
        <div className={style.footerAboutUs}>
          <h2>
            <FormattedMessage id="page.layout.products" />
          </h2>
          <ul>
            <li>
              <Link href="#">
                <FormattedMessage id="page.layout.compound" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <FormattedMessage id="page.layout.masterbach" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <FormattedMessage id="page.layout.rubber" />
              </Link>
            </li>
          </ul>
        </div>

        <div className={style.footerAboutUs}>
          <Image
            className={style.logoBaspar}
            src={"/icons/image/logo/mainLogo2.png"}
            alt="company Logo"
            width={200}
            height={200}
          />
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
                  href="https://www.linkedin.com/"
                  target="_blank"
                >
                  <Linkedin className={style.socialIcon} />
                </Link>
              </li>
              <li>
                <Link
                  className={style.socialBtn}
                  href="https://www.instagram.com/"
                  target="_blank"
                >
                  <Instagram className={style.socialIcon} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className={style.terms}>
            <Link href={"#"} >Terms Of Use</Link> |
            <Link href={"#"} >Privacy Notice</Link> |
            <Link href={"#"} >Terms Of Sale</Link> |
            <Link href={"#"} >Cookie Policy</Link>
        </div> */}

      <div className={style.footerDisclaimer}>
        <p>
          &copy;
          <FormattedMessage id="page.layout.footer.footer" />
        </p>
      </div>
    </footer>
  );
};
