import Image from "next/image";
import style from "./Honors.module.css";
import mainImg from "@/asset/banner/17.png";
import honorImg from "@/asset/banner/18.png";
import { FormattedMessage, useIntl } from "react-intl";
import { useRouter } from "next/router";
import Head from "next/head";
// import { HonorSliderOne } from "@/components/sliders/honors/honorSliderOne"
// import { HonorSliderTwo } from "@/components/sliders/honors/honorSliderTwo"
export const HonorsPage = () => {
  const { locale } = useRouter();
  const intl = useIntl();
  const title: string = intl.formatMessage({ id: "page.honors.head.title" });
  const titleMain: string = intl.formatMessage({
    id: "page.home.head.title",
  });
  const description: string = intl.formatMessage({
    id: "page.honors.head.description",
  });
  const author: string = intl.formatMessage({ id: "page.home.head.author" });
  return (
    <div>
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
      <div className={style.imageTop}>
        <Image src={mainImg} alt="Honors Image" title="Honors Image" />
      </div>
      <div className={style.historyBody}>
        {/* <HonorSliderOne /> */}
        {locale == "en" && (
          <>
            <div className={style.honorImg}>
              <Image src={honorImg} alt="honor Img" title="honor Img" />
              <ul>
                <li>- Holder of Knowledge-Based Company certificate</li>
                <li>
                  - Receiving knowledge-based certificate for several of its
                  products
                </li>
                <li>- Registration of 40 knowledge-based products</li>
                <li>- Holder of research and development license</li>
                <li>
                  - Receiving the title of best R&D company among technological
                  companies of Isfahan province
                </li>
                <li>
                  - Receiving health certificate issued by the Ministry of
                  Health, Treatment and Medical Education and Isfahan University
                  of Medical Sciences for its products
                </li>
                <li>
                  - Member of Association of Knowledge-Based Companies of
                  Isfahan province
                </li>
                <li>
                  - Member of Agricultural Engineering and Natural Resources
                  organization of Isfahan province
                </li>
                <li>
                  - Member of Association of Rubber and Polymer industries of
                  Isfahan province
                </li>
                <li>
                  - Member of Board of Directors for National Compound and
                  Masterbatch Association
                </li>
                <li>
                  - Member of research and technology network of Isfahan
                  province
                </li>
                <li>
                  - Member of the chamber of commerce in Tehran and Isfahan
                </li>
                <li>
                  - Fertilizer registration certificate (monoammonium phosphate
                  and monopotassium phosphate)
                </li>
              </ul>
            </div>
            {/* <HonorSliderTwo /> */}
            <div className={style.honorsPart2}>
              <h1>Memberships</h1>
              <p>
                - Member of the Association of Knowledge-Based Companies of
                Isfahan Province
              </p>
              <p>
                - Member of Agricultural Engineering and Natural Resources
                Organization of Isfahan province
              </p>
              <p>
                - Member of Plastic and Polymer Industry Association of Isfahan
                province
              </p>
              <p>
                - Member of the Board of Directors of the National Association
                of Compound and Masterbatch
              </p>
              <p>
                - Member of Research and Technology Network of Isfahan province
              </p>
              <p>- Member of Tehran and Isfahan Chamber of Commerce</p>
              <p>
                - Member of Asia Science and Technology Parks Association
                (AESPA)
              </p>
              <p>- Member of Compound and Masterbatch Association of Iran</p>
              <p>- Member of Isfahan Polymer Industry Association</p>
              <p>
                - Member of the Iranian Society of Polymer Science and
                Engineering
              </p>
            </div>
            <div className={style.honorsPart3}>
              <h1>ISO certificates</h1>
              <p>
                - ISO 9001-2015 / IQNET quality management certificate (2021)
              </p>
              <p>- ISO 9001-2015 / CSQ quality management certificate (2021)</p>
              <p>
                - ISO 10004-2018 / Qm customer satisfaction certificate (2021)
              </p>
              <p>
                - ISO 10002-2018 / Qm certificate for handling customer
                complaints (2021)
              </p>
            </div>
            <div className={style.honorsPart4}>
              <h1>certificates</h1>
              <p>
                - Health certificates / production of white pigment based on low
                density polyethylene (2021)
              </p>
              <p>
                - Health certificates / production of white pigment based on
                high density polyethylene (2021)
              </p>
              <p>
                - Health certificates / production of blue pigment based on
                polyethylene (2021)
              </p>
              <p>
                - Health certificates / low-density polyethylene-based process
                auxiliary pigment production (2021)
              </p>
              <p>
                - Health certificates / production of antistatic pigment based
                on low density polyethylene (2021)
              </p>
            </div>
            <div className={style.honorsPart5}>
              <h1>Operating licenses</h1>
              <p>
                - Exploitation license / Exploitation license for compounds and
                masterbatches, Baspar Shimi Sepidan, Ministry of Industry,
                Mining and Trade of Iran
              </p>
              <p>
                - Exploitation license / Exploitation license for compounds and
                masterbatches, Sepid Shimi Perto, Ministry of Industry, Iran
                Tejarat Mine
              </p>
              <p>
                - Exploitation license / Exploitation license for compounds and
                masterbatches, Baspar rubber compounds, Ministry of Industry,
                Mining and Trade of Iran
              </p>
            </div>
            <div className={style.honorsPart5}>
              <h1>Awards, statues, recognitions and...</h1>
              <p>
                - Receiving the Award (Excellence) of Asian Science and
                Technology Parks from the Association of Asian Science and
                Technology Parks (ASPA), South Korea (2022)
              </p>
              <p>
                - Obtaining the statue and plaque of the production-industrial
                sample unit of Isfahan province (2022)
              </p>
              <p>
                - Obtaining the first fertilizer registration certificates for
                MAP and MKP fertilizers from the countrys soil and water
                research institute (2022)
              </p>
              <p>
                - Obtaining a knowledge-based company certificate from the
                scientific and research vice president
              </p>
              <p>
                - Obtaining knowledge-based approval for 40 manufactured
                products
              </p>
              <p>
                - Obtaining research and development license for more than 20
                grades of manufactured products
              </p>
              <p>
                - Obtaining the top rank of research and development unit (R&D)
                from the Ministry of Safety
              </p>
              <p>
                - Obtaining the title of the best research and development
                company among technological companies in Isfahan province
              </p>
              <p>
                - Obtaining a health license issued by the Ministry of Health,
                Treatment and Medical Education and Isfahan University of
                Medical Sciences for the products
              </p>
              <p>
                - Obtaining the top rank among research and development (D&R)
                units of Isfahan technology companies in the 14th celebration of
                the end of the Isfahan science and research town development
                centers
              </p>
              <p>
                - Obtaining a technology license for the development of
                knowledge-based economy production research, and the development
                of polymer, chemical and textile products in Isfahan Scientific
                and Research Town (2019)
              </p>
              <p>
                - Obtaining a research and development certificate for the
                production of various polymer compounds in (2019)
              </p>
              <p>
                - Obtaining a certificate of appreciation / top ranking in
                research and development companies in Isfahan Scientific and
                Research Town (2020)
              </p>
              <p>
                - Obtaining the membership certificate of the active
                accelerators of the Isfahan Research and Technology Network in
                the direction of production, services and innovative solutions
                in the preparation and production of chemicals, compounds and
                masterbatch (2022)
              </p>
              <p>
                - Obtaining a certificate of attendance at the 5th National
                Polymer Conference of Iran (2018)
              </p>
              <p>
                - Obtaining a certificate of attendance at the International
                Technology Conference on Profitability Systems and Increasing
                Productivity (2009)
              </p>
              <p>
                - Obtaining a certificate of attendance at the 9th International
                Conference on Electronic Commerce in Developing Countries with a
                focus on Electronic Commerce (2015)
              </p>
              <p>
                - Obtaining a certificate of attendance at the international
                science, technology and management conference (2015)
              </p>
              <p>
                - Obtaining a certificate of attendance at the third
                international conference on purchasing and procurement
                management in Tehran, Iran (2009)
              </p>
              <p>
                - Obtaining a certificate of attendance at the second
                international conference and workshop on purchasing and
                procurement management. Tehran, Iran (2016)
              </p>
              <p>
                - Obtaining a certificate of attendance at the 8th International
                Conference on Electronic Commerce in Developing Countries with a
                focus on electronic trust. Mashhad. Iran. (2014)
              </p>
              <p>
                - Attending the 14th specialized exhibition of machinery for the
                plastic industry and related industries, Mashhad International
                Exhibition, Mashhad, Iran (2019)
              </p>
              <p>
                - Attending the 14th specialized exhibition of plastic industry
                machinery and related industries, Iranplast International
                Exhibition, Tehran (2019)
              </p>
              <p>
                - Attending the 15th specialized exhibition of plastic industry
                machinery and related industries, Iran Plast International
                Exhibition, Tehran (2020)
              </p>
              <p>
                - Attending the 16th specialized exhibition of plastic industry
                machinery and related industries, Iranplast International
                Exhibition, Tehran (2021)
              </p>
              <p>
                - Attending the 6th international compound and masterbatch
                exhibition and conference (2020)
              </p>
            </div>
          </>
        )}
        {locale == "fa" && (
          <>
            <div className={style.honorImg}>
              <ul>
                <li>- دارنده گواهینامه شرکت دانش بنیان</li>
                <li>- دریافت گواهی دانش بنیان برای چندین محصول خود</li>
                <li>- ثبت 40 محصول دانش بنیان</li>
                <li>- دارنده مجوز تحقیق و توسعه</li>
                <li>
                  - کسب عنوان برترین شرکت تحقیق و توسعه در بین شرکت های فناور
                  استان اصفهان
                </li>
                <li>
                  - دریافت گواهی سلامت صادره از وزارت بهداشت، درمان و آموزش
                  پزشکی و دانشگاه علوم پزشکی اصفهان برای محصولات خود.
                </li>
                <li>- عضو انجمن شرکت های دانش بنیان استان اصفهان</li>
                <li>
                  - عضو سازمان نظام مهندسی کشاورزی و منابع طبیعی استان اصفهان
                </li>
                <li>- عضو انجمن صنایع لاستیک و پلیمر استان اصفهان</li>
                <li>- عضو هیات مدیره انجمن ملی کامپاند و مستربچ</li>
                <li>- عضو شبکه پژوهش و فناوری استان اصفهان</li>
                <li>- عضو اتاق بازرگانی تهران و اصفهان</li>
                <li>- گواهی ثبت کود (مونوآمونیوم فسفات و مونو پتاسیم فسفات)</li>
              </ul>
            </div>
            {/* <HonorSliderTwo /> */}
            <div className={style.honorsPart2}>
              <h1>عضویت‌ها</h1>
              <p>- عضو انجمن شرکت های دانش بنیان استان اصفهان</p>
              <p>- عضو سازمان نظام مهندسی کشاورزی و منابع طبیعی استان اصفهان</p>
              <p>- عضو انجمن صنایع پلاستیک و پلیمر استان اصفهان</p>
              <p>- عضو هیات مدیره انجمن ملی کامپاند و مستربچ</p>
              <p>- عضو شبکه پژوهش و فناوری استان اصفهان</p>
              <p>-عضو اتاق بازرگانی تهران و اصفهان</p>
              <p>- عضو انجمن پارک های علم و فناوری آسیا (AESPA)</p>
              <p>- عضو انجمن کامپاند و مستربچ ایران</p>
              <p>- عضو انجمن صنعت پلیمر اصفهان</p>
              <p>- عضو انجمن علوم و مهندسی پلیمر ایران</p>
            </div>
            <div className={style.honorsPart3}>
              <h1>گواهینامه های ISO</h1>
              <p>- گواهینامه مدیریت کیفیت ISO 9001-2015 / IQNET (2021)</p>
              <p>- گواهینامه مدیریت کیفیت ISO 9001-2015 / CSQ (2021)</p>
              <p>- گواهینامه رضایت مشتری ISO 10004-2018 / Qm (2021)</p>
              <p>
                - گواهینامه ISO 10002-2018 / Qm برای رسیدگی به شکایات مشتریان
                (2021)
              </p>
            </div>
            <div className={style.honorsPart4}>
              <h1>گواهینامه ها</h1>
              <p>
                - گواهی بهداشت / تولید رنگدانه سفید بر پایه پلی اتیلن با چگالی
                کم (2021)
              </p>
              <p>
                - گواهی بهداشت / تولید رنگدانه سفید بر پایه پلی اتیلن با چگالی
                بالا (2021)
              </p>
              <p>- گواهی سلامت / تولید رنگدانه آبی بر پایه پلی اتیلن (2021)</p>
              <p>
                - گواهی سلامت / تولید رنگدانه کمکی فرآیندی مبتنی بر پلی اتیلن با
                چگالی کم (2021)
              </p>
              <p>
                - گواهی سلامت / تولید رنگدانه آنتی استاتیک بر پایه پلی اتیلن با
                چگالی کم (2021)
              </p>
            </div>
            <div className={style.honorsPart5}>
              <h1>مجوزهای بهره برداری</h1>
              <p>
                - پروانه بهره برداری / پروانه بهره برداری از ترکیبات و مستربچ
                ها، بسپار شیمی سپیدان، وزارت صنعت، معدن و تجارت ایران.
              </p>
              <p>
                - پروانه بهره برداری / پروانه بهره برداری ترکیبات و مستربچ ها،
                سپید شیمی پرتو، وزارت صنعت، معدن تجارت ایران
              </p>
              <p>
                - پروانه بهره برداری / پروانه بهره برداری از ترکیبات و مستربچ
                ها، ترکیبات لاستیک بسپار، وزارت صنعت، معدن و تجارت ایران.
              </p>
            </div>
            <div className={style.honorsPart5}>
              <h1>جوایز، تندیس ها، تقدیرنامه ها و...</h1>
              <p>
                - دریافت جایزه (تعالی) پارک های علم و فناوری آسیایی از انجمن
                پارک های علم و فناوری آسیا (ASPA)، کره جنوبی (2022)
              </p>
              <p>
                - اخذ تندیس و لوح واحد نمونه تولیدی- صنعتی استان اصفهان (1391)
              </p>
              <p>
                - اخذ اولین گواهینامه ثبت کود برای کودهای MAP و MKP از پژوهشکده
                آب و خاک کشور (1391)
              </p>
              <p>
                - اخذ گواهینامه شرکت دانش بنیان از معاونت علمی و پژوهشی ریاست
                جمهوری
              </p>
              <p>- اخذ تاییدیه دانش بنیان برای 40 محصول تولیدی</p>
              <p>- اخذ مجوز تحقیق و توسعه برای بیش از 20 گرید محصولات تولیدی</p>
              <p>- کسب رتبه برتر واحد تحقیق و توسعه (R&D) از وزارت ایمنی</p>
              <p>
                - کسب عنوان برترین تحقیق و توسعه شرکت در بین شرکت های فناور
                استان اصفهان
              </p>
              <p>
                - اخذ مجوز بهداشتی صادره از وزارت بهداشت، درمان و آموزش پزشکی و
                دانشگاه علوم پزشکی اصفهان برای محصولات
              </p>
              <p>
                - کسب رتبه برتر در بین واحدهای تحقیق و توسعه (D&R) شرکت های
                فناور اصفهان در چهاردهمین جشن پایان کار مراکز توسعه شهرک علمی و
                تحقیقاتی اصفهان.
              </p>
              <p>
                - اخذ مجوز فناوری برای توسعه تحقیقات تولید اقتصاد دانش بنیان و
                توسعه محصولات پلیمری، شیمیایی و نساجی در شهرک علمی و تحقیقاتی
                اصفهان (1398)
              </p>
              <p>
                - اخذ گواهی تحقیق و توسعه تولید انواع ترکیبات پلیمری در سال 1398
              </p>
              <p>
                - اخذ لوح تقدیر / رتبه برتر شرکت های تحقیق و توسعه شهرک علمی و
                تحقیقاتی اصفهان (2020)
              </p>
              <p>
                - اخذ گواهی عضویت شتاب دهنده های فعال شبکه پژوهش و فناوری اصفهان
                در راستای تولید، خدمات و راهکارهای نوآورانه در تهیه و تولید مواد
                شیمیایی، ترکیبات و مستربچ (2022)
              </p>
              <p>- اخذ گواهی حضور در پنجمین همایش ملی پلیمر ایران (1397)</p>
              <p>
                - اخذ گواهی حضور در کنفرانس بین المللی فناوری سیستم های سودآوری
                و افزایش بهره وری (2009)
              </p>
              <p>
                - اخذ گواهی حضور در نهمین کنفرانس بین المللی تجارت الکترونیک در
                کشورهای در حال توسعه با محوریت تجارت الکترونیک (1394)
              </p>
              <p>
                - اخذ گواهی حضور در کنفرانس بین المللی علم، فناوری و مدیریت
                (2015)
              </p>
              <p>
                - اخذ گواهی حضور در سومین کنفرانس بین المللی مدیریت خرید و
                تدارکات در تهران (1388)
              </p>
              <p>
                - اخذ گواهی حضور در دومین کنفرانس و کارگاه بین المللی مدیریت
                خرید و تدارکات. تهران، ایران (1395)
              </p>
              <p>
                - اخذ گواهی حضور در هشتمین کنفرانس بین المللی تجارت الکترونیک در
                کشورهای در حال توسعه با محوریت اعتماد الکترونیک. مشهد. ایران.
                (2014)
              </p>
              <p>
                - حضور در چهاردهمین نمایشگاه تخصصی ماشین آلات صنعت پلاستیک و
                صنایع وابسته، نمایشگاه بین المللی مشهد، مشهد، ایران (1398)
              </p>
              <p>
                - حضور در چهاردهمین نمایشگاه تخصصی ماشین آلات صنعت پلاستیک و
                صنایع وابسته، نمایشگاه بین المللی ایران پلاست، تهران (1398)
              </p>
              <p>
                - حضور در پانزدهمین نمایشگاه تخصصی ماشین آلات صنعت پلاستیک و
                صنایع وابسته، نمایشگاه بین المللی ایران پلاست، تهران (1399)
              </p>
              <p>
                - حضور در شانزدهمین نمایشگاه تخصصی ماشین آلات صنعت پلاستیک و
                صنایع وابسته، نمایشگاه بین المللی ایران پلاست، تهران (1390)
              </p>
              <p>
                - حضور در ششمین نمایشگاه و کنفرانس بین المللی کامپوند و مستربچ
                (2020)
              </p>
            </div>
          </>
        )}
        {locale == "ar" && (
          <>
            <div className={style.honorImg}>
              <Image src={honorImg} alt="honor Img" title="honor Img" />
              <ul>
                <li>- حاصل على شهادة شركة المعرفة</li>
                <li>- الحصول على شهادة المعرفة لعدد من منتجاتها</li>
                <li>- تسجيل 40 منتجاً معرفياً</li>
                <li>- حاصل على رخصة البحث والتطوير</li>
                <li>
                  - الحصول على لقب أفضل شركة بحث وتطوير بين الشركات التكنولوجية
                  في محافظة أصفهان
                </li>
                <li>
                  - الحصول على الشهادة الصحية الصادرة من وزارة الصحة والعلاج
                  والتعليم الطبي وجامعة أصفهان للعلوم الطبية لمنتجاتها
                </li>
                <li>- عضو جمعية شركات المعرفة لمحافظة أصفهان</li>
                <li>
                  - عضو منظمة الهندسة الزراعية والموارد الطبيعية لمحافظة أصفهان
                </li>
                <li>- عضو جمعية صناعات المطاط والبوليمر لمحافظة أصفهان</li>
                <li>- عضو مجلس إدارة الجمعية الوطنية للمركبات والماسترباتش</li>
                <li>- عضو شبكة الأبحاث والتكنولوجيا لمحافظة أصفهان</li>
                <li>- عضو غرفة التجارة في طهران وأصفهان</li>
                <li>
                  - شهادة تسجيل الأسمدة (فوسفات أحادي الأمونيوم وفوسفات أحادي
                  البوتاسيوم)
                </li>
              </ul>
            </div>
            {/* <HonorSliderTwo /> */}
            <div className={style.honorsPart2}>
              <h1>العضويات</h1>
              <p>- عضو جمعية شركات المعرفة لمحافظة أصفهان</p>
              <p>
                - عضو منظمة الهندسة الزراعية والموارد الطبيعية لمحافظة أصفهان
              </p>
              <p>- عضو جمعية صناعة البلاستيك والبوليمر في محافظة أصفهان</p>
              <p>- عضو مجلس إدارة الجمعية الوطنية للمركب والماسترباتش</p>
              <p>- عضو شبكة الأبحاث والتكنولوجيا لمحافظة أصفهان</p>
              <p>- عضو غرفة تجارة طهران وأصفهان</p>
              <p>- عضو جمعية حدائق العلوم والتكنولوجيا في آسيا (AESPA)</p>
              <p>- عضو جمعية المجمعات والماستر باتش في إيران</p>
              <p>- عضو جمعية صناعة البوليمر في أصفهان</p>
              <p>- عضو الجمعية الإيرانية لعلوم وهندسة البوليمرات</p>
            </div>
            <div className={style.honorsPart3}>
              <h1>شهادات الأيزو</h1>
              <p>- شهادة إدارة الجودة ISO 9001-2015 / IQNET (2021)</p>
              <p>- شهادة إدارة الجودة ISO 9001-2015 / CSQ (2021)</p>
              <p>- شهادة ISO 10004-2018 / Qm لرضا العملاء (2021)</p>
              <p>- شهادة ISO 10002-2018 / Qm للتعامل مع شكاوى العملاء (2021)</p>
            </div>
            <div className={style.honorsPart4}>
              <h1>شهادات</h1>
              <p>
                - الشهادات الصحية / إنتاج الصبغة البيضاء على أساس البولي إيثيلين
                منخفض الكثافة (2021)
              </p>
              <p>
                - الشهادات الصحية / إنتاج الصبغة البيضاء على أساس البولي إيثيلين
                عالي الكثافة (2021)
              </p>
              <p>
                - الشهادات الصحية / إنتاج الصبغة الزرقاء على أساس البولي إيثيلين
                (2021)
              </p>
              <p>
                - الشهادات الصحية / عملية إنتاج الأصباغ المساعدة منخفضة الكثافة
                القائمة على البولي إيثيلين (2021)
              </p>
              <p>
                - الشهادات الصحية / إنتاج الصبغات المضادة للكهرباء الساكنة على
                أساس البولي إيثيلين منخفض الكثافة (2021)
              </p>
            </div>
            <div className={style.honorsPart5}>
              <h1>تراخيص التشغيل</h1>
              <p>
                - رخصة الاستغلال/رخصة الاستغلال للمركبات والأصبغة، باسبار شيمي
                سيبيدان، وزارة الصناعة والتعدين والتجارة الإيرانية
              </p>
              <p>
                - رخصة استغلال / رخصة استغلال للمركبات والأصبغة، سبيد شيمي
                بيرتو، وزارة الصناعة، منجم تجارت إيران
              </p>
              <p>
                - رخصة استغلال / رخصة استغلال للمركبات والأصبغة، مركبات باسبار
                المطاطية، وزارة الصناعة والتعدين والتجارة الإيرانية
              </p>
            </div>
            <div className={style.honorsPart5}>
              <h1>الجوائز والتماثيل والتقديرات...</h1>
              <p>
                - الحصول على جائزة (التميز) لمجمعات العلوم والتكنولوجيا الآسيوية
                من رابطة مجمعات العلوم والتكنولوجيا الآسيوية (ASPA) بكوريا
                الجنوبية (2022)
              </p>
              <p>
                - الحصول على تمثال ولوحة وحدة العينة الإنتاجية الصناعية لمحافظة
                أصفهان (2022)
              </p>
              <p>
                - الحصول على أول شهادات تسجيل الأسمدة لأسمدة MAP وMKP من معهد
                أبحاث التربة والمياه في البلاد (2022)
              </p>
              <p>
                - الحصول على شهادة شركة المعرفة من نائب الرئيس العلمي والبحثي
              </p>
              <p>- الحصول على الموافقة المعرفية لـ 40 منتجاً مصنعاً</p>
              <p>
                - الحصول على رخصة البحث والتطوير لأكثر من 20 درجة من المنتجات
                المصنعة
              </p>
              <p>
                - الحصول على المرتبة الأولى في وحدة البحث والتطوير (R&D) من
                وزارة السلامة
              </p>
              <p>
                - الحصول على لقب أفضل شركة بحث وتطوير بين الشركات التكنولوجية في
                محافظة أصفهان
              </p>
              <p>
                - الحصول على ترخيص صحي صادر عن وزارة الصحة والعلاج والتعليم
                الطبي وجامعة أصفهان للعلوم الطبية للمنتجات
              </p>
              <p>
                - الحصول على المرتبة الأولى بين وحدات البحث والتطوير لشركات
                التكنولوجيا في أصفهان في الاحتفال الرابع عشر لانتهاء مراكز تطوير
                مدينة العلوم والبحث في أصفهان
              </p>
              <p>
                - الحصول على ترخيص تكنولوجي لتطوير بحوث الإنتاج الاقتصادي القائم
                على المعرفة، وتطوير منتجات البوليمر والكيماويات والنسيج في مدينة
                أصفهان العلمية والبحثية (2019)
              </p>
              <p>
                - الحصول على شهادة بحث وتطوير لإنتاج مركبات البوليمر المختلفة
                عام (2019)
              </p>
              <p>
                - الحصول على شهادة تقدير / الترتيب الأعلى في شركات البحث
                والتطوير في مدينة أصفهان العلمية والبحثية (2020)
              </p>
              <p>
                - الحصول على شهادة عضوية المسرعات النشطة لشبكة الأبحاث
                والتكنولوجيا في أصفهان في اتجاه الإنتاج والخدمات والحلول
                المبتكرة في تحضير وإنتاج المواد الكيميائية والمركبات والأصبغة
                (2022)
              </p>
              <p>
                - الحصول على شهادة حضور المؤتمر الوطني الخامس للبوليمرات في
                إيران (2018)
              </p>
              <p>
                - الحصول على شهادة حضور المؤتمر التكنولوجي الدولي حول أنظمة
                الربحية وزيادة الإنتاجية (2009)
              </p>
              <p>
                - الحصول على شهادة حضور المؤتمر الدولي التاسع للتجارة
                الإلكترونية في الدول النامية مع التركيز على التجارة الإلكترونية
                (2015)
              </p>
              <p>
                - الحصول على شهادة حضور المؤتمر الدولي للعلوم والتكنولوجيا
                والإدارة (2015)
              </p>
              <p>
                - الحصول على شهادة حضور المؤتمر الدولي الثالث لإدارة المشتريات
                والمشتريات في طهران، إيران (2009)
              </p>
              <p>
                - الحصول على شهادة حضور المؤتمر وورشة العمل الدولية الثانية حول
                إدارة المشتريات والمشتريات. طهران، إيران (2016)
              </p>
              <p>
                - الحصول على شهادة حضور المؤتمر الدولي الثامن للتجارة
                الإلكترونية في الدول النامية مع التركيز على الثقة الإلكترونية.
                مشهد. إيران. (2014)
              </p>
              <p>
                - حضور المعرض المتخصص الرابع عشر لآلات صناعة البلاستيك والصناعات
                المرتبطة بها، معرض مشهد الدولي، مشهد، إيران (2019)
              </p>
              <p>
                - حضور المعرض المتخصص الرابع عشر لآلات صناعة البلاستيك والصناعات
                المرتبطة بها، معرض إيرانبلاست الدولي، طهران (2019)
              </p>
              <p>
                - حضور المعرض المتخصص الخامس عشر لآلات صناعة البلاستيك والصناعات
                المرتبطة بها، معرض إيران بلاست الدولي، طهران (2020)
              </p>
              <p>
                - حضور المعرض المتخصص السادس عشر لآلات صناعة البلاستيك والصناعات
                المرتبطة بها، معرض إيرانبلاست الدولي، طهران (2021)
              </p>
              <p>- حضور المعرض والمؤتمر الدولي السادس للمركب والماستر (2020)</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
