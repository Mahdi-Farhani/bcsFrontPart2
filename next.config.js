const nextConfig = {
  i18n: {
    locales: ["en", "ar", "fa"],
    defaultLocale: "fa",
    localeDetection: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.bcs.co.com",
        port: "",
        pathname: "/newsPhotos/**",
      },
      {
        protocol: "https",
        hostname: "api.bcs.co.com",
        port: "",
        pathname: "/newsPhotosSub/**",
      },
      {
        protocol: "https",
        hostname: "api.bcs.co.com",
        port: "",
        pathname: "/productFile/**",
      },
    ],
  },
};

module.exports = nextConfig;

// const nextConfig = {
//   i18n: {
//     locales: ["en", "ar", "fa"],
//     defaultLocale: "fa",
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: "http",
//         hostname: "localhost",
//         port: "8536",
//         pathname: "/newsPhotos/**",
//       },
//       {
//         protocol: "http",
//         hostname: "localhost",
//         port: "8536",
//         pathname: "/newsPhotosSub/**",
//       },
//       {
//         protocol: "http",
//         hostname: "localhost",
//         port: "8536",
//         pathname: "/productFile/**",
//       },
//     ],
//   },
// };

// module.exports = nextConfig;
