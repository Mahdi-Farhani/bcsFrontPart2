import { GetServerSideProps } from "next";
import { SitemapStream, streamToPromise } from "sitemap";
import { createGzip } from "zlib";

interface Page {
  url: string;
  lastmod?: string;
  changefreq?: string;
  priority?: number;
}

const generateSitemap = async (pages: Page[]): Promise<string> => {
  const smStream = new SitemapStream({
    hostname: "https://bcs.co.com",
  });

  const pipeline = smStream.pipe(createGzip());

  pages.forEach((page) => {
    smStream.write({
      url: page.url,
      lastmod: page.lastmod,
      changefreq: page.changefreq,
      priority: page.priority,
    });
  });

  smStream.end();

  const buffer = await streamToPromise(pipeline);
  const sitemapString = buffer.toString();

  return sitemapString;
};

const Sitemap = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const pages: Page[] = [
    { url: "/" },
    { url: "/AboutUs/History" },
    { url: "/Products" },
    { url: "/News" },
  ];

  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Content-Encoding", "gzip");
  res.write(await generateSitemap(pages));
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
