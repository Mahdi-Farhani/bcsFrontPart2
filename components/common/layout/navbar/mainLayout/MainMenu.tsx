import React, { useEffect, useState } from "react";
import Link from "next/link";
import style from "./mainMenu.module.css";
import Image from "next/image";
// import main logo:
import MainLogo from "@/public/icons/image/logo/mainLogo.png";
// import menu icon:
import { MenuIcon } from "@/public/icons/icons/svg/navbar/menu";
// import all language Flag:
import flag1 from "@/public/icons/image/language/iranFlag.png";
import flag2 from "@/public/icons/image/language/engFlag.png";
import flag3 from "@/public/icons/image/language/arabFlag.png";
import { ArrowDropDown } from "@/public/icons/icons/svg/arrow/arrowDropDown";
import navBarIcon from "@/public/icons/image/mainMenu/navBar.png";
import closeIcon from "@/public/icons/image/mainMenu/close.png";
import vector1 from "@/public/icons/image/mainMenu/vector1.png";
import vector2 from "@/public/icons/image/mainMenu/vector2.png";
import { useRouter } from "next/router";
// import { useUserStore } from "@/lib/slices/userSlice";
import { LogInSignUpBTN } from "@/components/common/Buttons/logInSignUp/logInSignUp";
import { LogInSignUpTMBTN } from "@/components/common/Buttons/logInSignUp/size(T,M)/logInSignUpTM";
import { VertMainMenu } from "@/components/common/layout/veticalMainMenu/vertMainMenu";
import dropdown from "@/public/icons/image/mainMenu/dropdown.png";
// Language :
import { i18n } from "next-i18next";
import { FormattedMessage } from "react-intl";
const MenuMain = () => {
  const [clickNav, setClickNav] = useState<boolean>(false);
  const [clickNav2, setClickNav2] = useState<boolean>(false);
  const [clickNav3, setClickNav3] = useState<boolean>(false);
  const [clickNav4, setClickNav4] = useState<boolean>(false);
  const [clickNav5, setClickNav5] = useState<boolean>(false);
  const [clickNav6, setClickNav6] = useState<boolean>(false);
  const [clickNav7, setClickNav7] = useState<boolean>(false);
  const click1Handler = () => {
    if (clickNav) {
      setClickNav(false);
    } else {
      setClickNav6(false);
      setClickNav2(false);
      setClickNav7(false);
      setClickNav(true);
    }
  };
  const click2Handler = () => {
    if (clickNav2) {
      setClickNav2(false);
    } else {
      setClickNav6(false);
      setClickNav2(true);
      setClickNav7(false);
      setClickNav(false);
    }
  };
  const click3Handler = () => {
    if (clickNav3) {
      setClickNav3(false);
    } else {
      setClickNav3(true);
    }
  };
  const click4Handler = () => {
    if (clickNav4) {
      setClickNav4(false);
    } else {
      setClickNav4(true);
    }
  };
  const click5Handler = () => {
    if (clickNav5) {
      setClickNav5(false);
    } else {
      setClickNav5(true);
    }
  };

  const click6Handler = () => {
    if (clickNav6) {
      setClickNav6(false);
    } else {
      setClickNav6(true);
      setClickNav2(false);
      setClickNav7(false);
      setClickNav(false);
    }
  };
  const click7Handler = () => {
    if (clickNav7) {
      setClickNav7(false);
    } else {
      setClickNav6(false);
      setClickNav2(false);
      setClickNav7(true);
      setClickNav(false);
    }
  };
  // this part for change navbar tab in short size (mobile or <1300px) :
  // const [tab, setTab] = useState<boolean>(false);
  // const tabHandler = () => {
  //   if (tab === false) {
  //     setTab(true)
  //   } else {
  //     setTab(false)
  //   }
  // }
  // // this part for scrolling and change navbar style :
  // const [scroll, setScroll] = useState<boolean>(false)
  // const [clientWindowHeight, setClientWindowHeight] = useState<number>(0);
  // const handleScroll = () => {
  //   setClientWindowHeight(window.scrollY);
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   if (clientWindowHeight > 1) {
  //     setScroll(true)
  //   } else {
  //     setScroll(false)
  //   }
  // }, [clientWindowHeight]);
  // language Toggle :
  const [engToggle, setEngToggle] = useState<string>("en");
  const [langEnable, setLangEnable] = useState<boolean>(false);
  const langHandler = () => {
    if (langEnable) {
      setLangEnable(false);
    } else {
      setLangEnable(true);
    }
  };
  // sign In and Sign Up part :
  const router = useRouter();
  // // responsive Menu :
  // const [width, setWidth] = useState<number>(0);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWidth(window.innerWidth);
  //   };

  //   handleResize();

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);
  //profile part :
  // const { user } = useUserStore()
  // const [show, setShow] = useState<boolean>()
  // useEffect(() => {
  //   if (user.token === "") {
  //     setShow(true)
  //   } else {
  //     setShow(false)
  //   }
  // }, [])
  const { locale } = useRouter();

  return (
    <>
      <div className={style.navbar1}>
        {/* language part : */}
        <div className={style.allLangInfoIcons}>
          <div className={style.allLang}>
            <div className={style.languageBtn}>
              <button type="button" onClick={langHandler}>
                <Image
                  src={"/icons/image/mainMenu/lang.png"}
                  alt="Change Language"
                  width={100}
                  height={100}
                />
                <ArrowDropDown className={style.arrowDown} />
              </button>
              {/* another language section : */}
              <div
                className={
                  langEnable
                    ? style.anotherLanguageBtn
                    : style.anotherLanguageBtnClose
                }
              >
                <Link href={"/"} locale="fa">
                  <Image
                    className={style.flagImage}
                    src={flag1}
                    alt="persian flag"
                  />
                </Link>
                <Link href={"/"} locale="ar">
                  <Image
                    className={style.flagImage}
                    src={flag3}
                    alt="arab flag"
                  />
                </Link>
                <Link href={"/"} locale="en">
                  <Image
                    className={style.flagImage}
                    src={flag2}
                    alt="english flag"
                  />
                </Link>
              </div>
            </div>
            <span></span>
            <div className={style.signInPartPc}>
              {/* <Link href={"/SignIn"} className={style.mainInfoCompany}>
                <FormattedMessage id="page.layout.signIn" />
              </Link>
              <p>|</p>
              <Link href={"/SignUp"} className={style.mainInfoCompany}>
                <FormattedMessage id="page.layout.signUp" />
              </Link> */}
              <p>Baspar Chemi Sepidan</p>
            </div>
            <span></span>
            <div className={style.iconsTop}>
              <Link
                href={"https://instagram.com/holding_bcs?igshid=YmMyMTA2M2Y="}
              >
                <Image
                  src={"/icons/image/mainMenu/insta.png"}
                  alt="Instagram Icon"
                  width={30}
                  height={30}
                ></Image>
              </Link>
              <Link href={"https://t.me/bcs_holding"}>
                <Image
                  src={"/icons/image/mainMenu/telegram.png"}
                  alt="telegram Icon"
                  width={30}
                  height={30}
                ></Image>
              </Link>
              <Link href={"https://www.linkedin.com/company/holding-bcs/"}>
                <Image
                  src={"/icons/image/mainMenu/linkdin.png"}
                  alt="linkdin Icon"
                  width={30}
                  height={30}
                ></Image>
              </Link>
              {/* <Link href={"#"}><Image src={"/icons/image/mainMenu/facebook.png"} alt="facebook Icon" width={30} height={30}></Image></Link> */}
              <Link href={"https://www.aparat.com/BCS.holding/BCS.holding"}>
                <Image
                  src={"/icons/image/mainMenu/aparat.png"}
                  alt="aparat Icon"
                  width={30}
                  height={30}
                ></Image>
              </Link>
            </div>
          </div>
        </div>
        <div className={style.phoneEmailTop}>
          <Link href={"tel:00982158462000"} className={style.phoneTop}>
            <Image
              src={"/icons/image/mainMenu/phone.png"}
              alt="Phone Icone"
              width={100}
              height={100}
            />
            <p>98-21-58462000+</p>
          </Link>
          <Link href={"mailto:info@holding-bcs.com"} className={style.emailTop}>
            <Image
              src={"/icons/image/mainMenu/email.png"}
              alt="Email Icone"
              width={100}
              height={100}
            />
            <p>info@holding-bcs.com</p>
          </Link>
        </div>
      </div>
      <nav className={style.navbar}>
        {locale == "fa" && (
          <Link href={"/"} className={style.brand}>
            <Image
              src={"/icons/image/logo/mainLogo5.png"}
              alt="Baspar Logo"
              width={300}
              height={300}
              className={style.mainlogoBrand}
            />
          </Link>
        )}
        {locale == "ar" && (
          <Link href={"/"} className={style.brand}>
            <Image
              src={"/icons/image/logo/mainLogo4.png"}
              alt="Baspar Logo"
              width={200}
              height={200}
              className={style.mainlogoBrand2}
            />
          </Link>
        )}
        {locale == "en" && (
          <Link href={"/"} className={style.brand}>
            <Image
              src={"/icons/image/logo/mainLogo4.png"}
              alt="Baspar Logo"
              width={200}
              height={200}
              className={style.mainlogoBrand2}
            ></Image>
          </Link>
        )}
        <div
          className={clickNav3 ? style.menuContainer : style.menuContainerClose}
        >
          <ul className={style.megaMenu}>
            {/* <!-- home --> */}
            <li className={style.dropdown}>
              <div>
                <Link href={"/"}>
                  <FormattedMessage id="page.layout.home" />
                </Link>
                <span className={style.materialSymbolsOutlined}>
                  chevron_right
                </span>
              </div>
            </li>
            {/* <!-- aboutUs --> */}
            <li className={style.dropdown}>
              <div onClick={click1Handler}>
                <span className={style.dropdownParent}>
                  <FormattedMessage id="page.layout.aboutUs" />
                  <Image
                    src={dropdown}
                    alt="Dropdown Icon"
                    width={15}
                    height={15}
                  />
                </span>
                <span className={style.materialSymbolsOutlined}>
                  chevron_right
                </span>
              </div>
              <ul className={clickNav ? style.menu : style.menuClose}>
                <li>
                  <span>
                    <FormattedMessage id="page.layout.aboutUs" />
                  </span>
                </li>
                <li className={style.subDropdown}>
                  <div>
                    <span>
                      <FormattedMessage id="page.layout.history" />
                    </span>
                    <span className={style.materialSymbolsOutlined}>
                      chevron_right
                    </span>
                  </div>
                  <ul className={style.subMenu}>
                    <li>
                      <Link href={"/AboutUs/History"}>
                        <FormattedMessage id="page.layout.history" />
                      </Link>
                    </li>
                    <li>
                      <Link href={"/AboutUs/Vision"}>
                        <FormattedMessage id="page.layout.vision" />
                      </Link>
                    </li>
                    <li>
                      <Link href={"/AboutUs/Values"}>
                        <FormattedMessage id="page.layout.values" />
                      </Link>
                    </li>
                    <li>
                      <Link href={"/AboutUs/BoardOfDirectors"}>
                        <FormattedMessage id="page.layout.boardOfDirectors" />
                      </Link>
                    </li>
                    <li>
                      <Link href={"/AboutUs/AchievementsAndHonors"}>
                        <FormattedMessage id="page.layout.achievementsAndHonors" />
                      </Link>
                    </li>
                    <li>
                      <Link href={"/AboutUs/SocialResponsibility"}>
                        <FormattedMessage id="page.layout.socialResponsibility" />
                      </Link>
                    </li>
                    <li>
                      <Link href={"/AboutUs/SubsidiaryCompanies"}>
                        <FormattedMessage id="page.layout.subsidiaryCompanies" />
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={style.subDropdown}>
                  <div>
                    <span>
                      <FormattedMessage id="page.layout.subsidiaryCompanies" />
                    </span>
                    <span className={style.materialSymbolsOutlined}>
                      chevron_right
                    </span>
                  </div>
                  <ul className={style.subMenu}>
                    <li>
                      <Link href={"/AboutUs/Trademark"}>
                        <FormattedMessage id="page.layout.trademark" />
                      </Link>
                    </li>
                    {/* <li>
                      <Link href={"/AboutUs/Investors"}>
                        <FormattedMessage id="page.layout.investors" />
                      </Link>
                    </li> */}
                  </ul>
                </li>
              </ul>
            </li>
            {/* <!-- news --> */}
            <li className={style.dropdown}>
              <div onClick={click6Handler}>
                <span className={style.dropdownParent}>
                  <FormattedMessage id="page.layout.blog" />
                  <Image
                    src={dropdown}
                    alt="Dropdown Icon"
                    width={15}
                    height={15}
                  />
                </span>
                <span className={style.materialSymbolsOutlined}>
                  chevron_right
                </span>
              </div>
              <ul className={clickNav6 ? style.menu : style.menuClose}>
                <li>
                  <span>
                    <FormattedMessage id="page.layout.blog" />
                  </span>
                </li>
                <li className={style.subDropdown}>
                  <div>
                    <span>
                      <FormattedMessage id="page.layout.newsNav" />
                    </span>
                    <span className={style.materialSymbolsOutlined}>
                      chevron_right
                    </span>
                  </div>
                  <ul className={style.subMenu}>
                    <li>
                      <Link href={"/News"}>
                        <FormattedMessage id="page.layout.newsNav" />
                      </Link>
                    </li>
                    <li>
                      <Link href={"/News/Media"}>
                        <FormattedMessage id="page.layout.media" />
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            {/* <!-- r&DCenter --> */}
            {/* <li className={style.dropdown}>
              <div>
                <Link href={"/R&DCenter"}>
                  <FormattedMessage id="page.layout.r&DCenter" />
                </Link>
                <span className={style.materialSymbolsOutlined}>
                  chevron_right
                </span>
              </div>
            </li> */}
            {/* <!-- products --> */}
            <li className={style.dropdown}>
              <div onClick={click2Handler}>
                <span className={style.dropdownParent}>
                  <FormattedMessage id="page.layout.products" />
                  <Image
                    src={dropdown}
                    alt="Dropdown Icon"
                    width={15}
                    height={15}
                  />
                </span>
                <span className={style.materialSymbolsOutlined}>
                  chevron_right
                </span>
              </div>
              <ul className={clickNav2 ? style.menu2 : style.menu2Close}>
                <li>
                  <span>
                    <FormattedMessage id="page.layout.products" />
                  </span>
                </li>
                <li className={style.subDropdown}>
                  <div>
                    <span>
                      <FormattedMessage id="page.layout.categories" />
                    </span>
                    <span className={style.materialSymbolsOutlined}>
                      chevron_right
                    </span>
                  </div>
                  <ul className={style.subMenu}>
                    <li>
                      <Link href={"/Products"}>
                        <FormattedMessage id="page.layout.compound" />
                      </Link>
                    </li>
                    <li>
                      <Link href={"/Products"}>
                        <FormattedMessage id="page.layout.masterbach" />
                      </Link>
                    </li>
                    <li>
                      <Link href={"/Products"}>
                        <FormattedMessage id="page.layout.rubber" />
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            {/* <!-- Contact Us --> */}
            <li className={style.dropdown}>
              <div onClick={click7Handler}>
                <span className={style.dropdownParent}>
                  <FormattedMessage id="page.layout.contactUs" />
                  <Image
                    src={dropdown}
                    alt="Dropdown Icon"
                    width={15}
                    height={15}
                  />
                </span>
                <span className={style.materialSymbolsOutlined}>
                  chevron_right
                </span>
              </div>
              <ul className={clickNav7 ? style.menu2 : style.menu2Close}>
                <li>
                  <span>
                    <FormattedMessage id="page.layout.contactUs" />
                  </span>
                </li>
                <li className={style.subDropdown}>
                  <div>
                    <span>
                      <FormattedMessage id="page.layout.addressOfBranches" />
                    </span>
                    <span className={style.materialSymbolsOutlined}>
                      chevron_right
                    </span>
                  </div>
                  <ul className={style.subMenu}>
                    <li>
                      <Link href={"/ContactUs"}>
                        <FormattedMessage id="page.layout.contactUs" />
                      </Link>
                    </li>
                    <li>
                      <Link href={"#"}>
                        <FormattedMessage id="page.layout.careerOpportunities" />
                      </Link>
                    </li>
                    <li>
                      <Link href={"#"}>
                        <FormattedMessage id="page.layout.receiveCustomerComments" />
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={clickNav3 ? style.openNav : style.closeNav}>
          <div className={style.closeMain}>
            <Link href={"/"} className={style.brandRes}>
              <Image
                src={"/icons/image/logo/mainLogo4.png"}
                alt="Baspar Chemi Logo"
                width={200}
                height={200}
              ></Image>
            </Link>
            <Image
              onClick={click3Handler}
              className={style.closeIcon}
              src={closeIcon}
              alt="Close Icon"
              title="Close Icon"
              width={40}
              height={40}
            />
          </div>
          {/* Mobile : */}
          <ul className={style.megaMenuM}>
            {/* <!-- home --> */}
            <li className={style.dropdownM}>
              <div className={style.topicsNav}>
                <Link href={"/"}>
                  <FormattedMessage id="page.layout.home" />
                </Link>
              </div>
            </li>
            {/* <!-- aboutUs --> */}
            <li className={style.dropdownM}>
              <div onClick={click1Handler} className={style.drops}>
                <span>
                  <FormattedMessage id="page.layout.aboutUs" />
                </span>
                <ArrowDropDown
                  className={style.navIcons}
                  onClick={click4Handler}
                />
              </div>
              <ul className={clickNav4 ? style.navOpen : style.navClose}>
                <li>
                  {locale == "en" && (
                    <Image src={vector1} alt="" width={20} height={20} />
                  )}
                  {locale == "fa" && (
                    <Image src={vector2} alt="" width={20} height={20} />
                  )}
                  {locale == "ar" && (
                    <Image src={vector2} alt="" width={20} height={20} />
                  )}
                  <Link href={"/AboutUs"}>
                    <FormattedMessage id="page.layout.aboutUs" />
                  </Link>
                </li>
                <li>
                  {locale == "en" && (
                    <Image src={vector1} alt="" width={20} height={20} />
                  )}
                  {locale == "fa" && (
                    <Image src={vector2} alt="" width={20} height={20} />
                  )}
                  {locale == "ar" && (
                    <Image src={vector2} alt="" width={20} height={20} />
                  )}
                  <Link href={"/AboutUs/History"}>
                    <FormattedMessage id="page.layout.history" />
                  </Link>
                </li>
                <li>
                  {locale == "en" && (
                    <Image src={vector1} alt="" width={20} height={20} />
                  )}
                  {locale == "fa" && (
                    <Image src={vector2} alt="" width={20} height={20} />
                  )}
                  {locale == "ar" && (
                    <Image src={vector2} alt="" width={20} height={20} />
                  )}
                  <Link href={"/AboutUs/Vision"}>
                    <FormattedMessage id="page.layout.vision" />
                  </Link>
                </li>
                <li>
                  {locale == "en" && (
                    <Image src={vector1} alt="" width={20} height={20} />
                  )}
                  {locale == "fa" && (
                    <Image src={vector2} alt="" width={20} height={20} />
                  )}
                  {locale == "ar" && (
                    <Image src={vector2} alt="" width={20} height={20} />
                  )}
                  <Link href={"/AboutUs/Values"}>
                    <FormattedMessage id="page.layout.values" />
                  </Link>
                </li>
                <li>
                  {locale == "en" && (
                    <Image src={vector1} alt="" width={20} height={20} />
                  )}
                  {locale == "fa" && (
                    <Image src={vector2} alt="" width={20} height={20} />
                  )}
                  {locale == "ar" && (
                    <Image src={vector2} alt="" width={20} height={20} />
                  )}
                  <Link href={"/AboutUs/BoardOfDirectors"}>
                    <FormattedMessage id="page.layout.boardOfDirectors" />
                  </Link>
                </li>
                <li>
                  {locale == "en" && (
                    <Image src={vector1} alt="" width={20} height={20} />
                  )}
                  {locale == "fa" && (
                    <Image src={vector2} alt="" width={20} height={20} />
                  )}
                  {locale == "ar" && (
                    <Image src={vector2} alt="" width={20} height={20} />
                  )}
                  <Link href={"/AboutUs/AchievementsAndHonors"}>
                    <FormattedMessage id="page.layout.achievementsAndHonors" />
                  </Link>
                </li>
                <li>
                  {locale == "en" && (
                    <Image src={vector1} alt="" width={20} height={20} />
                  )}
                  {locale == "fa" && (
                    <Image src={vector2} alt="" width={20} height={20} />
                  )}
                  {locale == "ar" && (
                    <Image src={vector2} alt="" width={20} height={20} />
                  )}
                  <Link href={"/AboutUs/SocialResponsibility"}>
                    <FormattedMessage id="page.layout.socialResponsibility" />
                  </Link>
                </li>
                <li>
                  {locale == "en" && (
                    <Image src={vector1} alt="" width={20} height={20} />
                  )}
                  {locale == "fa" && (
                    <Image src={vector2} alt="" width={20} height={20} />
                  )}
                  {locale == "ar" && (
                    <Image src={vector2} alt="" width={20} height={20} />
                  )}
                  <Link href={"/AboutUs/SubsidiaryCompanies"}>
                    <FormattedMessage id="page.layout.subsidiaryCompanies" />
                  </Link>
                </li>
                <li>
                  {locale == "en" && (
                    <Image src={vector1} alt="" width={20} height={20} />
                  )}
                  {locale == "fa" && (
                    <Image src={vector2} alt="" width={20} height={20} />
                  )}
                  {locale == "ar" && (
                    <Image src={vector2} alt="" width={20} height={20} />
                  )}
                  <Link href={"/AboutUs/Trademark"}>
                    <FormattedMessage id="page.layout.trademark" />
                  </Link>
                </li>
                {/* <li>
                  {locale == "en" && (
                    <Image src={vector1} alt="" width={20} height={20} />
                  )}
                  {locale == "fa" && (
                    <Image src={vector2} alt="" width={20} height={20} />
                  )}
                  {locale == "ar" && (
                    <Image src={vector2} alt="" width={20} height={20} />
                  )}
                  <Link href={"/AboutUs/Investors"}>
                    <FormattedMessage id="page.layout.investors" />
                  </Link>
                </li> */}
              </ul>
            </li>
            {/* <!-- blog --> */}
            <li className={style.dropdownM}>
              <div onClick={click2Handler} className={style.drops}>
                <span>
                  <FormattedMessage id="page.layout.blog" />
                </span>
                <ArrowDropDown
                  className={style.navIcons}
                  onClick={click5Handler}
                />
              </div>
              <ul className={clickNav2 ? style.navOpen2 : style.navClose2}>
                <li>
                  {locale == "en" && (
                    <Image src={vector1} alt="" width={20} height={20} />
                  )}
                  {locale == "fa" && (
                    <Image src={vector2} alt="" width={20} height={20} />
                  )}
                  {locale == "ar" && (
                    <Image src={vector2} alt="" width={20} height={20} />
                  )}
                  <Link href={"/News"}>
                    <FormattedMessage id="page.layout.newsNav" />
                  </Link>
                </li>
                <li>
                  {locale == "en" && (
                    <Image src={vector1} alt="" width={20} height={20} />
                  )}
                  {locale == "fa" && (
                    <Image src={vector2} alt="" width={20} height={20} />
                  )}
                  {locale == "ar" && (
                    <Image src={vector2} alt="" width={20} height={20} />
                  )}
                  <Link href={"/News/Media"}>
                    <FormattedMessage id="page.layout.media" />
                  </Link>
                </li>
              </ul>
            </li>
            {/* <!-- r&DCenter --> */}
            {/* <li className={style.dropdownM}>
              <div className={style.topicsNav}>
                <Link href={"/RDCenter"}>
                  <FormattedMessage id="page.layout.r&DCenter" />
                </Link>
              </div>
            </li> */}
            {/* <!-- products --> */}
            <li className={style.dropdownM}>
              <div onClick={click6Handler} className={style.drops}>
                <span>
                  <FormattedMessage id="page.layout.products" />
                </span>
                <ArrowDropDown
                  className={style.navIcons}
                  onClick={click5Handler}
                />
              </div>
              <ul className={clickNav6 ? style.navOpen2 : style.navClose2}>
                <li>
                  {locale == "en" && (
                    <Image src={vector1} alt="" width={20} height={20} />
                  )}
                  {locale == "fa" && (
                    <Image src={vector2} alt="" width={20} height={20} />
                  )}
                  {locale == "ar" && (
                    <Image src={vector2} alt="" width={20} height={20} />
                  )}
                  <Link href={"/Products"}>
                    <FormattedMessage id="page.layout.products" />
                  </Link>
                </li>
                <li>
                  {locale == "en" && (
                    <Image src={vector1} alt="" width={20} height={20} />
                  )}
                  {locale == "fa" && (
                    <Image src={vector2} alt="" width={20} height={20} />
                  )}
                  {locale == "ar" && (
                    <Image src={vector2} alt="" width={20} height={20} />
                  )}
                  <Link href={"/Products"}>
                    <FormattedMessage id="page.layout.compound" />
                  </Link>
                </li>
                <li>
                  {locale == "en" && (
                    <Image src={vector1} alt="" width={20} height={20} />
                  )}
                  {locale == "fa" && (
                    <Image src={vector2} alt="" width={20} height={20} />
                  )}
                  {locale == "ar" && (
                    <Image src={vector2} alt="" width={20} height={20} />
                  )}
                  <Link href={"/Products"}>
                    <FormattedMessage id="page.layout.masterbach" />
                  </Link>
                </li>
                <li>
                  {locale == "en" && (
                    <Image src={vector1} alt="" width={20} height={20} />
                  )}
                  {locale == "fa" && (
                    <Image src={vector2} alt="" width={20} height={20} />
                  )}
                  {locale == "ar" && (
                    <Image src={vector2} alt="" width={20} height={20} />
                  )}
                  <Link href={"/Products"}>
                    <FormattedMessage id="page.layout.rubber" />
                  </Link>
                </li>
              </ul>
            </li>
            {/* <!-- Contact Us --> */}
            <li className={style.dropdownM}>
              <div onClick={click7Handler} className={style.drops}>
                <span>
                  <FormattedMessage id="page.layout.contactUs" />
                </span>
                <ArrowDropDown
                  className={style.navIcons}
                  onClick={click5Handler}
                />
              </div>
              <ul className={clickNav7 ? style.navOpen2 : style.navClose2}>
                <li>
                  {locale == "en" && (
                    <Image src={vector1} alt="" width={20} height={20} />
                  )}
                  {locale == "fa" && (
                    <Image src={vector2} alt="" width={20} height={20} />
                  )}
                  {locale == "ar" && (
                    <Image src={vector2} alt="" width={20} height={20} />
                  )}
                  <Link href={"#"}>
                    <FormattedMessage id="page.layout.addressOfBranches" />
                  </Link>
                </li>
                <li>
                  {locale == "en" && (
                    <Image src={vector1} alt="" width={20} height={20} />
                  )}
                  {locale == "fa" && (
                    <Image src={vector2} alt="" width={20} height={20} />
                  )}
                  {locale == "ar" && (
                    <Image src={vector2} alt="" width={20} height={20} />
                  )}
                  <Link href={"#"}>
                    <FormattedMessage id="page.layout.careerOpportunities" />
                  </Link>
                </li>
                <li>
                  {locale == "en" && (
                    <Image src={vector1} alt="" width={20} height={20} />
                  )}
                  {locale == "fa" && (
                    <Image src={vector2} alt="" width={20} height={20} />
                  )}
                  {locale == "ar" && (
                    <Image src={vector2} alt="" width={20} height={20} />
                  )}
                  <Link href={"#"}>
                    <FormattedMessage id="page.layout.receiveCustomerComments" />
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={style.buttons}>
          <button onClick={click3Handler}>
            <Image src={navBarIcon} alt="Menu" width={100} height={100} />
          </button>
        </div>
      </nav>
    </>
  );
};
export default MenuMain;
