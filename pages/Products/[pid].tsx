import { Layout } from "@/components/common/layout/mainPage/layout";
import { Productpage } from "@/components/pages/Products/product/product";
import { useRouter } from "next/router";

const BlogPage = () => {
  return (
    <Layout>
      <Productpage />
    </Layout>
  );
};

export default BlogPage;
