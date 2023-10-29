import { Layout } from "@/components/common/layout/mainPage/layout";
import { NewsId } from "@/components/pages/News/NewsId/newsId";
import { useRouter } from "next/router";

const BlogPage = () => {
  return (
    <Layout>
      <NewsId />
    </Layout>
  );
};

export default BlogPage;
