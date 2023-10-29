import { DivProps } from "@/types/html.types";
import style from "./layoutPanel.module.css"
import { NavbarPanel } from "@/components/common/layout/panels/panel/navbar";
import { VerticalNav } from "@/components/common/layout/panels/panel/vertical/sideNav";

interface AppProps extends DivProps {
    children: React.ReactElement
}
export const LayoutPanel = ({ children }: AppProps) => {
    return (
        <div id={style.body}>
            {/* menu : */}
            <VerticalNav id={style.mainContent} />
            {/* header : */}
            <div className={style.rightPart}>
                <NavbarPanel />
                {children}
            </div>


        </div>
    )
}
