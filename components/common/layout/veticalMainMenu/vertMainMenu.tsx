
import Link from "next/link"
import style from "./vertMainMenu.module.css"
import { ArrowDropDown } from "@/public/icons/icons/svg/arrow/arrowDropDown"
import { useState } from "react"
import { FormattedMessage } from "react-intl"
export const VertMainMenu = () => {
    const [showAbout, setShowAbout] = useState<boolean>(false)
    const [showProduct, setShowProduct] = useState<boolean>(false)
    const aboutHandler = () => {
        if (showAbout) {
            setShowAbout(false)
        } else {
            setShowAbout(true)
        }
    }
    const productHandler = () => {
        if (showProduct) {
            setShowProduct(false)
        } else {
            setShowProduct(true)
        }
    }
    return (
        <div className={style.curNavbar}>
            <Link href="/" ><FormattedMessage id="page.layout.home" /></Link>
            <div className={style.dropdownFamily}>
                <div className={style.dropBtn}>
                    <Link href="/AboutUs"><FormattedMessage id="page.layout.aboutUs" /></Link>
                    <button type="button" onClick={aboutHandler}><ArrowDropDown className={style.arrowDropDown} /></button>
                </div>
                {/* (About Us): */}
                <div className={showAbout ? style.dropdownChild : style.dropdownChildClose}>
                    <Link href="/AboutUs/History" ><FormattedMessage id="page.layout.history" /></Link>
                    <Link href="/AboutUs/Vision" ><FormattedMessage id="page.layout.vision" /></Link>
                    <Link href="/AboutUs/Values" ><FormattedMessage id="page.layout.values" /></Link>
                    <Link href="/AboutUs/BoardOfDirectors" ><FormattedMessage id="page.layout.boardOfDirectors" /></Link>
                    <Link href="/AboutUs/AchievementsAndHonors" ><FormattedMessage id="page.layout.achievementsAndHonors" /></Link>
                    <Link href="/AboutUs/SocialResponsibility" ><FormattedMessage id="page.layout.socialResponsibility" /></Link>
                    <Link href="/AboutUs/SubsidiaryCompanies" ><FormattedMessage id="page.layout.subsidiaryCompanies" /></Link>
                    <Link href="/AboutUs/Trademark" ><FormattedMessage id="page.layout.trademark" /></Link>
                </div>
            </div>

            <Link href="#" ><FormattedMessage id="page.layout.investors" /></Link>
            <div className={style.dropdownFamily2}>
                <div className={style.dropBtn}>
                    <Link href="/Products/"><FormattedMessage id="page.layout.products" /></Link>
                    <button type="button" onClick={productHandler}><ArrowDropDown className={style.arrowDropDown} /></button>
                </div>
                {/* (product) : */}
                <div className={showProduct ? style.dropdownChild2 : style.dropdownChild2Close}>
                    <div>
                        <Link href="#"><FormattedMessage id="page.layout.productive" /></Link>
                        <div className={style.dropdownChildp2}>
                            <Link href="#"><FormattedMessage id="page.layout.compound" /></Link>
                            <Link href="#"><FormattedMessage id="page.layout.masterbach" /></Link>
                        </div>
                    </div>
                    <div>
                        <Link href="#"><FormattedMessage id="page.layout.commerce" /></Link>
                        <div className={style.dropdownChildp2}>
                            <Link href="#"><FormattedMessage id="page.layout.rubberCompoundRawMaterials" /></Link>
                            <Link href="#"><FormattedMessage id="page.layout.chemicalAgricultural" /></Link>
                            <Link href="#"><FormattedMessage id="page.layout.textile" /></Link>
                            <Link href="#"><FormattedMessage id="page.layout.polymerRawMaterials" /></Link>
                            <Link href="#"><FormattedMessage id="page.layout.polymerIndustryAdditives" /></Link>
                        </div>
                    </div>
                </div>
            </div>

            <Link href="/News/" ><FormattedMessage id="page.layout.news" /></Link>
        </div>
    )
}