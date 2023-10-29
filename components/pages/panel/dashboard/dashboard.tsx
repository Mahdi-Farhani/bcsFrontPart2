import style from "./dashboard.module.css"
import { DivProps } from "@/types/html.types"
// import { SalesChart } from "@/components/common/charts/sales/salesChart"
// import { OrdersChart } from "@/components/common/charts/Orders/ordersChart"
import { MoreVert } from "@/public/icons/icons/svg/dashboard/moreVert"
import { SalesChartIcon } from "@/public/icons/icons/svg/dashboard/salesChart"
import { Customer } from "@/public/icons/icons/svg/dashboard/customer"
import { ProductDashboard } from "@/public/icons/icons/svg/dashboard/product"
import { UpIcon } from "@/public/icons/icons/svg/dashboard/up"
import { Profit } from "@/public/icons/icons/svg/dashboard/profit"
import { Dollar } from "@/public/icons/icons/svg/dashboard/Dollar"
import { Project } from "@/public/icons/icons/svg/dashboard/project"
import { SalesQueries } from "@/public/icons/icons/svg/dashboard/salesQueries"
import { ProductTable } from "@/components/common/tables/productDashboard/productTable"
// import { OrderTable } from "@/components/common/tables/orderDashboard/orderTable"
// status in header :
interface statusD extends DivProps {
    children: React.ReactElement
    title: string
    number: string
}
const StatusBox = ({ children, title, number }: statusD) => {
    return (
        <div className={style.statusSales} >
            {children}
            <div className={style.statusSalesDetails}>
                <p>{title}</p>
                <p>{number}</p>
            </div>
        </div >
    )
}
// products in earning part :
interface product {
    title: string
    category: string
    price: string
}
const ProductEarning = ({ title, category, price }: product) => {
    return (
        <div className={style.productEarning}>
            <div className={style.productEarningLeft}>
                <h4>{title}</h4>
                <p>{category}</p>
            </div>
            <p className={style.productEarningRight}>{price}</p>
        </div>
    )
}
// products in earning right part :
interface productTotal {
    children: React.ReactElement
    title: string
    profit: string
    subProfit: string
    date: string
}
const TotalBox = ({ children, title, profit, date, subProfit }: productTotal) => {
    return (
        <div className={style.totalBox}>
            <div className={style.chartTitleTotal}>
                <span className={style.chartTitleSpan}>
                    {children}
                </span>
                <MoreVert className={style.moreVert} />
            </div>
            <h3>{title}</h3>
            <div className={style.totalBoxRight}>
                <h3>{profit}</h3>
                <p>{subProfit}</p>
            </div>
            <p className={style.totalBoxDate}>{date}</p>
        </div>
    )
}

export const AdminDashboard = () => {

    return (
        <div>
            <div className={style.mainContentPartOne}>
                <div className={style.statusBox}>
                    <div className={style.chartTitle}>
                        <h3>Statistics Card</h3>
                        <MoreVert className={style.moreVert} />
                    </div>
                    <p className={style.statusParagraph}>Total 48.5% growth this month</p>
                    <div className={style.statusfooter}>
                        <StatusBox title={"Sales"} number={"245k"} ><span className={style.statusSalesSpanOne}><SalesChartIcon className={style.salesChartIcon} /></span></StatusBox>
                        <StatusBox title={"Customers"} number={"12.5k"} ><span className={style.statusSalesSpanTwo}><Customer className={style.customerIcon} /></span></StatusBox>
                        <StatusBox title={"Products"} number={"1.54k"} ><span className={style.statusSalesSpanThree}><ProductDashboard className={style.salesChartIcon} /></span></StatusBox>
                        <StatusBox title={"Revenue"} number={"$88k"} ><span className={style.statusSalesSpanFour}><SalesChartIcon className={style.salesChartIcon} /></span></StatusBox>
                    </div>
                </div>

            </div>
            <div className={style.mainContentPartTwo}>
                <div className={style.chartBox1}>
                    <div className={style.chartTitle}>
                        <h3>Weekly Overview (Sales)</h3>
                        <MoreVert className={style.moreVert} />
                    </div>
                    {/* <SalesChart /> */}
                    <p className={style.paragraph}>Your sales performance is 45% better compared to last month</p>
                    <button className={style.salesBtn}>Details</button>
                </div>
                <div className={style.chartBox1}>
                    <div className={style.chartTitle}>
                        <h3>Weekly Overview (Orders)</h3>
                        <MoreVert className={style.moreVert} />
                    </div>
                    {/* <OrdersChart /> */}
                    <p className={style.paragraph}>Your sales performance is 45% better compared to last month</p>
                    <button className={style.salesBtn}>Details</button>
                </div>
            </div>
            <div className={style.mainContentPartThree}>
                <div className={style.earningBox}>
                    <div className={style.chartTitle}>
                        <h3>Total Earning</h3>
                        <MoreVert className={style.moreVert} />
                    </div>
                    <div className={style.earningPrice}>
                        <h1>$24,895</h1>
                        <UpIcon className={style.upIcon} />
                        <p>10%</p>
                    </div>
                    <p className={style.earningPriceParagraph}>Compared to $84,325 last year</p>
                    <div className={style.earningDetailPart}>
                        <ProductEarning title={"product1"} category={"category1"} price={"1000$"} />
                        <ProductEarning title={"product2"} category={"category2"} price={"2000$"} />
                        <ProductEarning title={"product3"} category={"category3"} price={"3000$"} />
                        <ProductEarning title={"product4"} category={"category4"} price={"4000$"} />
                    </div>
                </div>
                <div className={style.mainContentPartThreeLeft}>
                    <TotalBox title={"Total Profit"} profit={"$25.6k"} subProfit={"+42%"} date={"Weekly Profit"}>
                        <Profit className={style.mainContentPartThreeIcons1} />
                    </TotalBox>
                    <TotalBox title={"Refunds"} profit={"$78"} subProfit={"-15%"} date={"Past Month"}>
                        <Dollar className={style.mainContentPartThreeIcons2} />
                    </TotalBox>
                    <TotalBox title={"New Project"} profit={"862"} subProfit={"-18%"} date={"Yearly Project"}>
                        <Project className={style.mainContentPartThreeIcons3} />
                    </TotalBox>
                    <TotalBox title={"Sales Queries"} profit={"15"} subProfit={"-18%"} date={"Last Week"}>
                        <SalesQueries className={style.mainContentPartThreeIcons4} />
                    </TotalBox>
                </div>
            </div>
            <ProductTable />
            {/* <OrderTable /> */}
        </div >
    )
}