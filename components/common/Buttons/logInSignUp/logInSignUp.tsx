import { useState, useEffect } from "react"
import Image from "next/image"
import style from "./logInSignUp.module.css"
import { useRouter } from "next/router";
// import { User, useUserStore } from "@/lib/slices/userSlice";
import pImage from "@/public/icons/image/profile/profImg1.png"
import { Profile } from "@/public/icons/icons/svg/navbar/panel/profile";
import { FavListIcon } from "@/public/icons/icons/svg/navbar/panel/vertical/favList";
import { Logout } from "@/public/icons/icons/svg/navbar/panel/logout";
import { Alert } from "@/components/common/cart/alert/alert";
import { AlertClose } from "@/public/icons/icons/svg/cards/alert/close";
export const LogInSignUpBTN = () => {
    // const { user, resetUser } = useUserStore()
    // const userData: User = user
    const [profileC, setProfileC] = useState<boolean>(false);
    const [cancel, setCancel] = useState(false)
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);
    const router = useRouter()
    const profileHandler = () => {
        if (profileC) {
            setProfileC(false)
        } else {
            setProfileC(true)
        }
    }
    const dashboardHandler = () => {
        router.push("/Panel/dashboard")
    }
    //signOt part :
    const signOutHandler = () => {
        // resetUser()
        router.push("/")
    }
    const cancelSignOutHandler = () => {
        setCancel(false)
    }
    const showSignOutHandler = () => {
        setCancel(true)
    }
    return (

        <div className={style.partOfprofilePic}>
            <div className={style.profilePic}>
                <div onClick={profileHandler}>
                    <Image src={pImage} alt="Profile Pic" />
                    <span></span>
                </div>
                <div className={profileC ? style.profileDD : style.profileDDClose}>
                    <div className={style.pofileDetail}>
                        <Image src={pImage} alt="Profile Pic" />
                        <div className={style.Pdetails}>
                            {/* <p>{isClient ? userData.name : ""}</p> */}
                            <p>Admin</p>
                        </div>
                    </div>
                    <div className={style.pofileDetail2}>
                        <div onClick={dashboardHandler}>
                            <Profile className={style.Icons} />
                            <p>profile</p>
                        </div>
                        <div>
                            <FavListIcon className={style.Icons} />
                            <p>Favorite List</p>
                        </div>
                    </div>
                    <div className={style.pofileDetail3}>
                        <div onClick={showSignOutHandler} >
                            <Logout className={style.Icons} />
                            <p>sign Out</p>
                        </div>
                    </div>
                </div>
            </div>
            <Alert text={"Do you want to Sign Out?"} className={cancel ? style.alertCart : style.cancelAlert} >
                <>
                    <AlertClose className={style.alertClose} onClick={cancelSignOutHandler} />
                    <div className={style.alertBtn}>
                        <button type="button" className={style.yesBtn} onClick={signOutHandler}>Yes</button>
                        <button type="button" className={style.noBtn} onClick={cancelSignOutHandler}>No</button>
                    </div>
                </>
            </Alert>
        </div>
    )
}