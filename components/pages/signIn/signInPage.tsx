// Import required modules
import { useState, ChangeEvent, FormEvent, useEffect } from "react"; // React hooks
import style from "./signInPage.module.css"; // Styles
import Link from "next/link"; // Next.js link
import Image from "next/image"; // Next.js image
import companyLogo from "@/public/icons/image/logo/mainLogo3.png"; // Company logo
import { HideIcon } from "@/public/icons/icons/svg/show/password/hide"; // Hide password icon
import { ShowIcon } from "@/public/icons/icons/svg/show/password/show"; // Show password icon
import { Google } from "@/public/icons/icons/svg/logos/google"; // Google logo
import { Facebook } from "@/public/icons/icons/svg/logos/facebook"; // Facebook logo
import { Twitter } from "@/public/icons/icons/svg/logos/twitter"; // Twitter logo
// import { User, useUserStore } from "@/lib/slices/userSlice";
import axios from "axios";
import { useRouter } from "next/router";
import { User, useUserStore } from "@/lib/slices/userSlice";
import { ErrorAlert, WarnAlert } from "@/components/common/alert/warnAlert";
import { GLOBAL_APIURL } from "@/constant/globalUrl";

// Create a SignInPage component
export const SignInPage = () => {
  // Create state variables for email and password inputs
  const [valueEmail, setValueEmail] = useState<string>(""); // Email input
  const [valuePassword, setValuePassword] = useState<string>(""); // Password input

  // Input change handlers
  const emailInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValueEmail(event.target.value);
  };

  const passwordInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValuePassword(event.target.value);
  };

  // Show/hide password
  const [showPassword, setShowPassword] = useState<boolean>(false); // Show/hide password state
  const showHandler = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };
  const inputType = showPassword ? "text" : "password"; // Input type based on show/hide state
  //sign in part :
  const router = useRouter();
  const { addUser } = useUserStore();

  const formHandler = async () => {
    // Validate form inputs
    if (valueEmail === "" || valuePassword === "") {
      WarnAlert("Please fill in all fields!");
      return;
    } else {
      try {
        // #FixL
        const { data } = await axios.post(`${GLOBAL_APIURL}/api/users/signIn`, {
          emailOrPhoneNumber: valueEmail,
          password: valuePassword,
        });
        const dataUser: User = {
          name: data.name,
          lastName: data.lastName,
          companyName: data.companyName,
          phone: data.phone,
          email: data.email,
          token: data.token,
          publicKey: data.publicKey,
        };
        addUser(dataUser);
        router.push("/Panel/dashboard");
      } catch (error: any) {
        ErrorAlert(error.message);
      }
    }
  };
  // Render the SignInPage component
  return (
    <div className={style.box}>
      <Link href={"/"}>
        <Image src={companyLogo} alt="company Logo" />
      </Link>
      <h2>Welcome!</h2>
      <form>
        <div className={style.inputBox}>
          <input
            type="email"
            name="email"
            required
            onChange={emailInputHandler}
          />
          <label>Username</label>
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
          <label>Password</label>
          <span id="passwordDescription" className="sr-only">
            Please enter a strong password
          </span>
        </div>
        <div className={style.allQuestion}>
          {/* <div className={style.checkBox}>
                        <input type="checkbox" name="rememberMe" id="rememberMe" />
                        <label htmlFor="rememberMe">Remember Me</label>
                    </div> */}
          <Link href={"/Recovery"} className={style.forgotPass}>
            Forgot Password?
          </Link>
        </div>
        <button
          type="button"
          name="sign-in"
          className={style.signInBTN}
          onClick={formHandler}
        >
          sign In
        </button>
      </form>
      <div className={style.CreateAcc}>
        <p>New on our platform?</p>
        <Link href={"/SignUp"}>Create an account</Link>
      </div>
      {/* <div className={style.footer}>
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
