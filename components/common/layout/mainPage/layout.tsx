import { Footer } from "../footer/footer";
import MenuMain from "../navbar/mainLayout/MainMenu";
import style from "./layout.module.css"
interface AppProps {
    children: React.ReactElement
}
export const Layout = ({ children }: AppProps) => {
    return (
        <div id={style.body}>
            <MenuMain />
            <div id={style.mainContent}>{children}</div>
            <Footer />
        </div>
    )
}