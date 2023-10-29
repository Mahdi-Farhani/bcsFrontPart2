import { useState, useEffect } from "react"
// import { useTheme } from "@/components/hooks/useDarkMode";
import style from "./navbar.module.css"
import { Notification } from "@/public/icons/icons/svg/navbar/panel/notification"
import { ActiveNotification } from "@/public/icons/icons/svg/navbar/panel/activeNotificatio"
import { LightIcon } from "@/public/icons/icons/svg/navbar/panel/light"
import { DarkPanel } from "@/public/icons/icons/svg/navbar/panel/dark"
import { Profile } from "@/public/icons/icons/svg/navbar/panel/profile"
import { Ticket } from "@/public/icons/icons/svg/navbar/panel/ticket"
import { Logout } from "@/public/icons/icons/svg/navbar/panel/logout"
import pImage from "@/public/icons/image/profile/profImg1.png"
import Image from "next/image";
import { NotificationBox } from "@/components/common/alert/notification/notification";
import { useRouter } from "next/router";
import { useUserStore } from "@/lib/slices/userSlice";
import { Alert } from "@/components/common/alert/alertClose/alert";
import { AlertClose } from "@/public/icons/icons/svg/cards/alert/close";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const NavbarPanel = () => {
    // const { theme, toggleTheme } = useTheme();
    // profile button on navbar :
    const [profileC, setProfileC] = useState<boolean>(false);
    const profileHandler = () => {
        if (profileC) {
            setProfileC(false)
        } else {
            setProfileC(true)
        }
        if (notificationBox) {
            setNotificationBox(false)
        }
    }
    // notification button on navbar :
    const [notification, setNotification] = useState<boolean>(false)
    const [notificationBox, setNotificationBox] = useState<boolean>(false)
    const notificationHandler = () => {
        if (notificationBox) {
            setNotificationBox(false)
        } else {
            setNotificationBox(true)
        }
        if (profileC) {
            setProfileC(false)
        }
    }
    //router part :
    const [cancel, setCancel] = useState(false)
    const router = useRouter()
    const { user, resetUser } = useUserStore()

    useEffect(() => {
        if (user.name === "") {
            router.push("/")
        }
    }, [])
    //signOt part :
    const signOutHandler = () => {
        resetUser()
        router.push("/")
    }
    const cancelSignOutHandler = () => {
        setCancel(false)
    }
    const showSignOutHandler = () => {
        setCancel(true)
    }
    return (
        <div className={style.header}>
            <div className={style.partOne}>
                {/* theme part : */}
                {/* <button type="button" onClick={toggleTheme}>{theme === "dark" ? (<span><LightIcon className={style.themeIcon} /></span>) : (<span><DarkPanel className={style.themeIcon} /></span>)}</button> */}
                {/* notification : */}
                <span className={style.noti}>
                    {notification ? (<ActiveNotification className={style.activeNotiIcons} onClick={notificationHandler} />) : (<Notification className={style.notiIcons} onClick={notificationHandler} />)}
                    <span className={style.notiNumber}>23</span>
                    <div className={notificationBox ? style.notiDetail : style.notiContentClose}>
                        <div className={style.notiTitle}>
                            <p>Notification</p>
                            <p>20 new</p>
                        </div>
                        <div className={style.notiContent}>
                            <NotificationBox />
                        </div>
                    </div>
                </span>
                {/* profile : */}
                <div className={style.profilePic}>
                    <Image src={pImage} alt="Profile Pic" onClick={profileHandler} />
                    <span></span>
                    {/* DD : Dropdown* */}
                    <div className={profileC ? style.profileDD : style.profileDDClose}>
                        {/* profile Details Part : */}
                        <div className={style.pofileDetail}>
                            <Image src={pImage} alt="Profile Pic" />
                            <div className={style.Pdetails}>
                                <p>Arian</p>
                                <p>Admin</p>
                            </div>
                        </div>
                        {/*content Menu Part : */}
                        <div className={style.pofileDetail2}>
                            <div>
                                <Profile className={style.Icons} />
                                <p>profile</p>
                            </div>
                            <div>
                                <Ticket className={style.Icons} />
                                <p>ticket</p>
                            </div>
                        </div>
                        {/* logOut And Other Part : */}
                        <div className={style.pofileDetail3}>
                            <div onClick={showSignOutHandler} >
                                <Logout className={style.Icons} />
                                <p>sign Out</p>
                            </div>
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
            <ToastContainer />
        </div>
    )
}