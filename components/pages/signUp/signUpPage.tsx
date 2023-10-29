import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import style from "./signUpPage.module.css";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import axios from "axios";
import companyLogo from "@/public/icons/image/logo/mainLogo3.png";
// import { User, useUserStore } from "@/lib/slices/userSlice"
// import Icons :
import { Google } from "@/public/icons/icons/svg/logos/google";
import { Facebook } from "@/public/icons/icons/svg/logos/facebook";
import { Twitter } from "@/public/icons/icons/svg/logos/twitter";
import { HideIcon } from "@/public/icons/icons/svg/show/password/hide";
import { ShowIcon } from "@/public/icons/icons/svg/show/password/show";
import { useRouter } from "next/router";
import { User, useUserStore } from "@/lib/slices/userSlice";
import { ErrorAlert, WarnAlert } from "@/components/common/alert/warnAlert";
import { FormattedMessage } from "react-intl";

export const SignUpPage = () => {
  const [valueName, setValueName] = useState<string>("");
  const [valueLastName, setValueLastName] = useState<string>("");
  const [valueCompanyName, setValueCompanyName] = useState<string>("");
  const [valuePhone, setValuePhone] = useState<string>("");
  const [valueEmail, setValueEmail] = useState<string>("");
  const [valueEmailCon, setValueEmailCon] = useState<string>("");
  const [valuePassword, setValuePassword] = useState<string>("");
  const [valuePasswordCon, setValuePasswordCon] = useState<string>("");
  const nameInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValueName(event.target.value);
  };
  const lastNameInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValueLastName(event.target.value);
  };
  const companyNameInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValueCompanyName(event.target.value);
  };
  const phoneInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValuePhone(event.target.value);
  };
  const emailInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValueEmail(event.target.value);
  };
  const emailConInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValueEmailCon(event.target.value);
  };
  const passwordInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValuePassword(event.target.value);
    console.log(valuePassword);
  };
  const passwordConInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValuePasswordCon(event.target.value);
  };
  // show password :
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordCon, setShowPasswordCon] = useState<boolean>(false);
  const showHandler = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };
  const showConHandler = () => {
    if (showPasswordCon) {
      setShowPasswordCon(false);
    } else {
      setShowPasswordCon(true);
    }
  };
  const inputType = showPassword ? "text" : "password";
  const inputTypeCon = showPasswordCon ? "text" : "password";

  // set api signUp :
  const router = useRouter();
  const { addUser, user } = useUserStore();
  // const userAgent = typeof window === 'undefined' ? router?.req?.headers['user-agent'] : navigator.userAgent;
  // console.log(userAgent, "userAgent");

  useEffect(() => {
    // if (user.name !== "") {
    //   router.push("/");
    // }
  }, [router, user.name]);
  const formHandler = async () => {
    // Validate form inputs
    if (
      valueName === "" ||
      valueLastName === "" ||
      valueCompanyName === "" ||
      valuePhone === "" ||
      valueEmail === "" ||
      valueEmailCon === "" ||
      valuePassword === "" ||
      valuePasswordCon === ""
    ) {
      WarnAlert("Please fill in all fields!");
      return;
    } else {
      if (valueEmail !== valueEmailCon) {
        WarnAlert("Emails do not match!");
        return;
      } else {
        if (valuePassword !== valuePasswordCon) {
          WarnAlert("Passwords do not match!");
          return;
        } else {
          try {
            const { data } = await axios.post(
              `${process.env.GLOBAL_APIURL}/api/users/signUp`,
              {
                name: valueName,
                lastName: valueLastName,
                companyName: valueCompanyName,
                phoneNumber: valuePhone,
                email: valueEmail,
                password: valuePassword,
                userAgent: " ",
              }
            );
            const dataUser: User = {
              name: data.user.name,
              lastName: data.user.lastName,
              companyName: data.user.companyName,
              phone: data.user.phoneNumber,
              email: data.user.email,
              token: data.user.token,
              publicKey: data.user.publicKey,
            };
            addUser(dataUser);
            router.push("/Panel/dashboard");
          } catch (error) {
            ErrorAlert("Account not created!");
          }
        }
      }
    }
  };
  return (
    <div className={style.box}>
      <Link href={"/"}>
        <Image src={companyLogo} alt="company Logo" />
      </Link>
      <h2>
        <FormattedMessage id="page.signIn.title" />
      </h2>
      <form>
        <div className={style.inputBox}>
          <input type="text" name="Name" required onChange={nameInputHandler} />
          <label>
            <FormattedMessage id="page.signIn.name" />
          </label>
        </div>
        <div className={style.inputBox}>
          <input
            type="text"
            name="LastName"
            required
            onChange={lastNameInputHandler}
          />
          <label>
            <FormattedMessage id="page.signIn.lastName" />
          </label>
        </div>
        <div className={style.inputBox}>
          <input
            type="text"
            name="companyName"
            required
            onChange={companyNameInputHandler}
          />
          <label>
            <FormattedMessage id="page.signIn.companyName" />
          </label>
        </div>
        <div className={style.inputBox}>
          <input
            type="tel"
            name="PhoneNumber"
            required
            pattern="^[0-9]{10}$"
            maxLength={10}
            autoComplete="off"
            onChange={phoneInputHandler}
          />
          <label>
            <FormattedMessage id="page.signIn.phoneNumber" />
          </label>
        </div>
        <div className={style.inputBox}>
          <input
            type="email"
            name="email"
            required
            autoComplete="off"
            onChange={emailInputHandler}
          />
          <label>
            <FormattedMessage id="page.signIn.email" />
          </label>
        </div>
        <div className={style.inputBox}>
          <input
            type="email"
            name="emailConfirmation"
            required
            autoComplete="off"
            onChange={emailConInputHandler}
            aria-describedby="emailConfirmationDescription"
          />
          <label>
            <FormattedMessage id="page.signIn.emailConfirmation" />
          </label>
        </div>
        <div className={style.inputBox}>
          <input
            type={inputType}
            name="password"
            required
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            autoComplete="off"
            onChange={passwordInputHandler}
            aria-describedby="passwordDescription"
          />
          {showPassword ? (
            <button type="button" onClick={showHandler}>
              <ShowIcon className={style.showIcon} />
            </button>
          ) : (
            <button type="button" onClick={showHandler}>
              <HideIcon className={style.showIcon} />
            </button>
          )}
          <label>
            <FormattedMessage id="page.signIn.password" />
          </label>
        </div>
        <div className={style.inputBox}>
          <input
            type={inputTypeCon}
            name="passwordConfirmation"
            required
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            autoComplete="off"
            onChange={passwordConInputHandler}
            aria-describedby="passwordConfirmationDescription"
          />
          {showPasswordCon ? (
            <button type="button" onClick={showConHandler}>
              <ShowIcon className={style.showIcon} />
            </button>
          ) : (
            <button type="button" onClick={showConHandler}>
              <HideIcon className={style.showIcon} />
            </button>
          )}
          <label>
            <FormattedMessage id="page.signIn.passwordConfirmationLabel" />
          </label>
        </div>
        {/* <div className={style.policy}>
                    <input type="checkbox" id="policy" />
                    <label htmlFor="policy">I agree to privacy policy & terms</label>
                </div> */}
        <button
          className={style.submitBTN}
          type="button"
          name="sign-in"
          onClick={formHandler}
        >
          <FormattedMessage id="page.signIn.signIn" />
        </button>
      </form>
      <div className={style.footer}>
        <p>
          <FormattedMessage id="page.signIn.alreadyAccount" />
        </p>
        <Link href={"/SignIn/"}>
          <FormattedMessage id="page.signIn.signInstead" />
        </Link>
      </div>
      {/* <div className={style.footer2}>
                <span className={style.line}></span>
                <p>Or</p>
                <span className={style.line}></span>
            </div> */}
      {/* Login with Others : */}
      {/* <div className={style.allIcons}>
                <Link href={"#"} className={style.icons}><Google className={style.iconsSvg} /></Link>
                <Link href={"#"} className={style.icons}><Facebook className={style.iconsSvg} /></Link>
                <Link href={"#"} className={style.icons}><Twitter className={style.iconsSvg} /></Link>
            </div> */}
    </div>
  );
};

export default SignUpPage;
