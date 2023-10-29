import React from "react";
import { AppProps } from "next/app";
import "@/styles/global.css";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import en from "@/i18n/en.json";
import fa from "@/i18n/fa.json";
import ar from "@/i18n/ar.json";
const messages: Record<string, any> = {
  en,
  fa,
  ar,
};
function gerDirection(locale: string) {
  switch (locale) {
    case "en": {
      return "ltr";
    }
    case "ar": {
      return "rtl";
    }
    default: {
      return "rtl";
    }
  }
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const defaultLocale = "fa";
  return (
    <>
      <div
        id="my-app"
        data-theme="light"
        dir={gerDirection(locale || defaultLocale)}
      >
        <IntlProvider
          locale={locale || defaultLocale}
          messages={messages[locale || defaultLocale]}
        >
          <Component {...pageProps} />
        </IntlProvider>
      </div>
    </>
  );
}
