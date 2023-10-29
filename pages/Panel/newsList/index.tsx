import { LayoutPanel } from "@/components/common/layout/panels/layoutPanel"
import { NewsListPage } from "@/components/pages/panel/newsList/newsList"

const panel = () => {
    return (
        <LayoutPanel>
            <NewsListPage />
        </LayoutPanel>
    )
}
export default panel