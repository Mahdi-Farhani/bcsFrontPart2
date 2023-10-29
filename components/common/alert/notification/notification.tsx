//This part is for panel notification :
import Image from "next/image"
import style from "./notification.module.css"
import pImage from "@/public/icons/image/profile/profImg1.png"
export const NotificationBox = () => {
    return (
        <>
            <div className={style.notiContentBox}>
                <Image src={pImage} alt={"notification Picature"} />
                <div className={style.notiTitleAndDetail}>
                    <h3>titletitle</h3>
                    <p>new User rgistered.</p>
                </div>
                <p className={style.notiDate}>date</p>
            </div>
            <span></span>
            <div className={style.notiContentBox}>
                <Image src={pImage} alt={"notification Picature"} />
                <div className={style.notiTitleAndDetail}>
                    <h3>titletitle</h3>
                    <p>new User rgistered.</p>
                </div>
                <p className={style.notiDate}>date</p>
            </div>
            <span></span>
            <div className={style.notiContentBox}>
                <Image src={pImage} alt={"notification Picature"} />
                <div className={style.notiTitleAndDetail}>
                    <h3>titletitle</h3>
                    <p>new User rgistered.</p>
                </div>
                <p className={style.notiDate}>date</p>
            </div>
            <span></span>
            <div className={style.notiContentBox}>
                <Image src={pImage} alt={"notification Picature"} />
                <div className={style.notiTitleAndDetail}>
                    <h3>titletitle</h3>
                    <p>new User rgistered.</p>
                </div>
                <p className={style.notiDate}>date</p>
            </div>
            <span></span>
            <div className={style.notiContentBox}>
                <Image src={pImage} alt={"notification Picature"} />
                <div className={style.notiTitleAndDetail}>
                    <h3>titletitle</h3>
                    <p>new User rgistered.</p>
                </div>
                <p className={style.notiDate}>date</p>
            </div>
            <span></span>
        </>
    )
}