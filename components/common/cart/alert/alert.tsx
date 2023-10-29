import style from "./alert.module.css"
import { WarnLogo } from "@/public/icons/icons/svg/cards/alert/warn"
interface alertModel {
    text: string
    children: React.ReactElement
    className: string;
}

export const Alert = ({ children, text, ...attribute }: alertModel) => {
    return (
        <div {...attribute}>
            <span className={style.background}></span>
            <div className={style.alertCart}>
                <WarnLogo className={style.warnAlert} />
                <p className={style.alertParagraph}>{text}</p>
                {children}
            </div>
        </div>
    )
}