import Image from "next/image";
import Link from "next/link";
import companyImg from "@/public/icons/image/logo/mainLogo4.png"
import { DivProps } from "@/types/html.types";
import style from "./sideNav.module.css"
// import Icons :
import { ProductList } from "@/public/icons/icons/svg/navbar/panel/vertical/productList"
import { Pricing } from "@/public/icons/icons/svg/navbar/panel/vertical/pricing"
import { PurchaseProcess } from "@/public/icons/icons/svg/navbar/panel/vertical/purchaseProcess"
import { SalesSupport } from "@/public/icons/icons/svg/navbar/panel/vertical/salesSupport"
import { TechnicalAdvice } from "@/public/icons/icons/svg/navbar/panel/vertical/technicalAdvice"
import { CustomersComments } from "@/public/icons/icons/svg/navbar/panel/vertical/customersComments"
import { ProductManagement } from "@/public/icons/icons/svg/navbar/panel/vertical/productManagement"
import { ManageOrders } from "@/public/icons/icons/svg/navbar/panel/vertical/manageOrders"
import { CustomerManagement } from "@/public/icons/icons/svg/navbar/panel/vertical/customerManagement"
import { Discounts } from "@/public/icons/icons/svg/navbar/panel/vertical/discounts"
import { Authors } from "@/public/icons/icons/svg/navbar/panel/vertical/Authors"
import { Content } from "@/public/icons/icons/svg/navbar/panel/vertical/content"
import { NewsList } from "@/public/icons/icons/svg/navbar/panel/vertical/NewsList"
import { Dashboard } from "@/public/icons/icons/svg/navbar/panel/vertical/dashboard"
import { ProfileInfo } from "@/public/icons/icons/svg/navbar/panel/vertical/profileInfo"
import { OrderListIcn } from "@/public/icons/icons/svg/navbar/panel/vertical/orderList"
import { useRouter } from "next/router";
// line function :
interface lineProps {
    lineParagraph: string
}
const LinePart = (lineParagraph: lineProps) => {
    return (
        <div className={style.spanLine}>
            <span></span>
            <p>{lineParagraph.lineParagraph}</p>
            <span></span>
        </div>
    )
}
// list of navbar (function):
interface ListNavProps extends DivProps {
    children: React.ReactElement
    paragraph: string
    href: string
    active: boolean
}

const ListNav = ({ children, paragraph, href, active }: ListNavProps) => {

    return (
        <li className={active ? style.listActive : style.list}>
            {children}
            <Link href={href}>{paragraph}</Link>
        </li>
    )
}

export const VerticalNav = ({ children }: DivProps) => {
    const route = useRouter()
    const activeName = route.pathname.split('/')[2]
    return (
        <div className={style.verticalNav}>
            <Link href={"/"} className={style.verticalCompanyLogo}>
                <Image src={companyImg} alt="company Logo" />
            </Link>
            {/* content list : */}
            <ul className={style.contentList}>
                {/* Dashboard : */}
                <ListNav paragraph={"Dashboard"} href={"/Panel/dashboard/"} active={activeName === "dashboard" ? true : false} ><Dashboard className={style.listSvgDashboard} /></ListNav>
                {/* Profile Information */}
                <ListNav paragraph={"profileInfo"} href={"/Panel/profileInfo/"} active={activeName === "profileInfo" ? true : false} ><ProfileInfo className={style.listSvgDashboard} /></ListNav>
                {/* ---------------------------------------------------------- */}
                <LinePart lineParagraph={"Lists"} />
                {/* 1 Product List */}
                <ListNav paragraph={"Product List"} href={"/Panel/productList/"} active={activeName === "productList" ? true : false}><ProductList className={style.listSvg} /></ListNav>
                {/* 2 News List */}
                <ListNav paragraph={"News List"} href={"/Panel/newsList/"} active={activeName === "newsList" ? true : false}><NewsList className={style.listSvg} /></ListNav>
                {/* 3 Order list */}
                {/* <ListNav paragraph={"Order List"} href={"/Panel/orderList/" } active={activeName === "orderList" ? true : false}><OrderListIcn className={style.listSvg} /></ListNav> */}
                {/* ---------------------------------------------------------- */}
                <LinePart lineParagraph={"Management"} />
                {/* 3 Product Management */}
                <ListNav paragraph={"Product Management"} href={"/Panel/productManagement/"} active={activeName === "productManagement" ? true : false}><ProductManagement className={style.listSvg} /></ListNav>
                {/* 4 Manage Orders */}
                {/* <ListNav paragraph={"Manage Orders"} href={"/Panel/manageOrders/" } active={activeName === "manageOrders" ? true : false}><ManageOrders className={style.listSvg} /></ListNav> */}
                {/* 5 Customer Management */}
                <ListNav paragraph={"Customer Management"} href={"/Panel/customerManagement/"} active={activeName === "customerManagement" ? true : false}><CustomerManagement className={style.listSvg} /></ListNav>
                {/* 6 Management of discounts */}
                {/* <ListNav paragraph={"Management Of Discounts"} href={"/Panel/managementOfDiscounts/"} active={activeName === "managementOfDiscounts" ? true : false}><Discounts className={style.listSvg} /></ListNav> */}
                {/* 7 Management Of Authors */}
                <ListNav paragraph={"Management Of Authors"} href={"/Panel/managementOfAuthors/"} active={activeName === "managementOfAuthors" ? true : false}><Authors className={style.listSvg} /></ListNav>
                {/* 8 Content Management */}
                <ListNav paragraph={"Content Management"} href={"/Panel/contentManagement/"} active={activeName === "contentManagement" ? true : false}><Content className={style.listSvg} /></ListNav>
                {/* ---------------------------------------------------------- */}
                <LinePart lineParagraph={"Services"} />
                {/* 9 Pricing */}
                {/* <ListNav paragraph={"Pricing"} href={"/Panel/pricing/"} active={activeName === "pricing" ? true : false}><Pricing className={style.listSvg} /></ListNav> */}
                {/* 10 Product List */}
                <ListNav paragraph={"Purchase Process"} href={"/Panel/purchaseProcess/"} active={activeName === "purchaseProcess" ? true : false}><PurchaseProcess className={style.listSvg} /></ListNav>
                {/* 11 Sales Service*/}
                <ListNav paragraph={"Sales Service"} href={"/Panel/salesService/"} active={activeName === "salesService" ? true : false}><SalesSupport className={style.listSvg} /></ListNav>
                {/* 12 Technical Advice */}
                <ListNav paragraph={"Technical Advice"} href={"/Panel/technicalAdvice/"} active={activeName === "technicalAdvice" ? true : false}><TechnicalAdvice className={style.listSvg} /></ListNav>
                {/* 13 Customers Comments */}
                <ListNav paragraph={"Customers Comments"} href={"/Panel/customersComments/"} active={activeName === "customersComments" ? true : false}><CustomersComments className={style.listSvg} /></ListNav>
            </ul>
        </div>
    )
}