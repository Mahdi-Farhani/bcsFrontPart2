import { FormattedMessage } from "react-intl"
import style from "./industry.module.css"
import { IndustryIcon } from "@/public/icons/icons/svg/industry/main"
export const Industry = () => {
    return (
        <div className={style.industry}>
            <span className={style.topSegment}></span>
            <h1 className={style.titleIndustry}><FormattedMessage id="page.home.industry.basparIndustry" /></h1>
            <div className={style.industryArrangement}>
                {/* 1 */}
                <div className={style.industryCart}>
                    <IndustryIcon className={style.industryIcon} />
                    <p><FormattedMessage id="page.home.industry.engineeringMasterbatches" /></p>
                </div>
                {/* 2 */}
                <div className={style.industryCart}>
                    <IndustryIcon className={style.industryIcon} />
                    <p><FormattedMessage id="page.home.industry.packagingFilms" /></p>
                </div>
                {/* 3 */}
                <div className={style.industryCart}>
                    <IndustryIcon className={style.industryIcon} />
                    <p><FormattedMessage id="page.home.industry.HomeApplianceParts" /></p>
                </div>
                {/* 4 */}
                <div className={style.industryCart}>
                    <IndustryIcon className={style.industryIcon} />
                    <p><FormattedMessage id="page.home.industry.pipesAndFittings" /></p>
                </div>
                {/* 5 */}
                <div className={style.industryCart}>
                    <IndustryIcon className={style.industryIcon} />
                    <p><FormattedMessage id="page.home.industry.automotiveParts" /></p>
                </div>
                {/* 6 */}
                <div className={style.industryCart}>
                    <IndustryIcon className={style.industryIcon} />
                    <p><FormattedMessage id="page.home.industry.disposableDishes" /></p>
                </div>
                {/* 7 */}
                <div className={style.industryCart}>
                    <IndustryIcon className={style.industryIcon} />
                    <p><FormattedMessage id="page.home.industry.textile" /></p>
                </div>
                {/* 8 */}
                <div className={style.industryCart}>
                    <IndustryIcon className={style.industryIcon} />
                    <p><FormattedMessage id="page.home.industry.electricalAndElectronicPartsAndEquipment" /></p>
                </div>
                {/* 9 */}
                <div className={style.industryCart}>
                    <IndustryIcon className={style.industryIcon} />
                    <p><FormattedMessage id="page.home.industry.wireAndCable" /></p>
                </div>
                {/* 10 */}
                <div className={style.industryCart}>
                    <IndustryIcon className={style.industryIcon} />
                    <p><FormattedMessage id="page.home.industry.agricultureIrrigationPipesAndFittings" /></p>
                </div>
                {/* 11 */}
                <div className={style.industryCart}>
                    <IndustryIcon className={style.industryIcon} />
                    <p><FormattedMessage id="page.home.industry.jumboBurlap" /></p>
                </div>
                {/* 12 */}
                <div className={style.industryCart}>
                    <IndustryIcon className={style.industryIcon} />
                    <p><FormattedMessage id="page.home.industry.compoundAndMasterbatch" /></p>
                </div>
                {/* 13 */}
                <div className={style.industryCart}>
                    <IndustryIcon className={style.industryIcon} />
                    <p><FormattedMessage id="page.home.industry.polymerSheets" /></p>
                </div>
                {/* 14 */}
                <div className={style.industryCart}>
                    <IndustryIcon className={style.industryIcon} />
                    <p><FormattedMessage id="page.home.industry.polymerTanks" /></p>
                </div>
                {/* 15 */}
                <div className={style.industryCart}>
                    <IndustryIcon className={style.industryIcon} />
                    <p><FormattedMessage id="page.home.industry.geomembranes" /></p>
                </div>
                {/* 16 */}
                <div className={style.industryCart}>
                    <IndustryIcon className={style.industryIcon} />
                    <p><FormattedMessage id="page.home.industry.toy" /></p>
                </div>
                {/* 17 */}
                <div className={style.industryCart}>
                    <IndustryIcon className={style.industryIcon} />
                    <p><FormattedMessage id="page.home.industry.railPartsAndEquipment" /></p>
                </div>
                {/* 18 */}
                <div className={style.industryCart}>
                    <IndustryIcon className={style.industryIcon} />
                    <p><FormattedMessage id="page.home.industry.constructionSanitaryGoods" /></p>
                </div>
                {/* 19 */}
                <div className={style.industryCart}>
                    <IndustryIcon className={style.industryIcon} />
                    <p><FormattedMessage id="page.home.industry.industrialEquipment" /></p>
                </div>
                {/* 20 */}
                <div className={style.industryCart}>
                    <IndustryIcon className={style.industryIcon} />
                    <p><FormattedMessage id="page.home.industry.officeEquipment" /></p>
                </div>
            </div>
            <span className={style.topSegment}></span>
        </div>
    )
}