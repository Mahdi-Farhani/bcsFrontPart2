import { Layout } from "@/components/common/layout/mainPage/layout";
import { NewsPage } from "@/components/pages/News/news";
import Head from "next/head";
import { useIntl } from "react-intl";

const News = () => {
  const intl = useIntl();
  const title: string = intl.formatMessage({
    id: "page.news.head.title",
  });
  const titleMain: string = intl.formatMessage({
    id: "page.home.head.title",
  });
  const description: string = intl.formatMessage({
    id: "page.news.head.description",
  });
  const author: string = intl.formatMessage({ id: "page.home.head.author" });
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        {/* <!-- viewport --> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <!-- title --> */}
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />
        {/* <!-- description --> */}
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:description" content={description} />
        {/* <!-- image --> */}
        <meta property="og:image" content="/icons/image/logo/basparIcon.png" />
        <meta name="twitter:image" content="/icons/image/logo/basparIcon.png" />
        {/* <!-- ua --> */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        {/* <!-- more --> */}
        <meta property="og:site_name" content={titleMain} />
        <meta property="og:type" content="website" />
        {/* <!-- Minimal --> */}
        <link
          rel="icon"
          type="image/png"
          href="/icons/image/logo/basparIcon.png"
        />
        <link
          rel="icon"
          sizes="192x192"
          href="/icons/image/logo/basparIcon.png"
        />
        <link rel="apple-touch-icon" href="/icons/image/logo/basparIcon.png" />
        <meta
          name="msapplication-square310x310logo"
          content="/icons/image/logo/basparIcon.png"
        />
        {/* <!-- Apple --> */}
        <link rel="apple-touch-icon" href="/icons/image/logo/basparIcon.png" />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/icons/image/logo/basparIcon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/icons/image/logo/basparIcon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/image/logo/basparIcon.png"
        />
        {/* <!-- Microsoft --> */}
        <meta
          name="msapplication-square70x70logo"
          content="/icons/image/logo/basparIcon.png"
        />
        <meta
          name="msapplication-square150x150logo"
          content="/icons/image/logo/basparIcon.png"
        />
        <meta
          name="msapplication-wide310x150logo"
          content="/icons/image/logo/basparIcon.png"
        />
        <meta name="author" content={author} />

        {/* <link rel="canonical" href="https://www.example.com/" /> */}
      </Head>
      <Layout>
        <NewsPage />
      </Layout>
    </>
  );
};

export default News;
