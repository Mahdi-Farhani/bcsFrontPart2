import signBackgroundImg from "@/public/icons/image/main picture/signBackground.jpg"
import Image from "next/image"
import style from "./signBackGround.module.css"
export const SignBackground = () => {
    return (
        <>
            <Image src={signBackgroundImg} alt="background of sign in page" className={style.signBackgroundImg} />
        </>
    )
}