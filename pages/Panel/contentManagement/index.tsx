import { LayoutPanel } from "@/components/common/layout/panels/layoutPanel"
import { ContentManage } from "@/components/pages/panel/contentManagement/contentManage"

const panel = () => {
    return (
        <LayoutPanel>
            <ContentManage />
        </LayoutPanel>
    )
}
export default panel