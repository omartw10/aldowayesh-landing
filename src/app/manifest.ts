import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mohammed Al-Dowayesh | المحامي محمد الدويش",
    short_name: "Al-Dowayesh",
    description:
      "خبير الإعسار وإعادة الهيكلة المالية — شريك مدير في سي إم إس CMS العالمية",
    start_url: "/ar",
    display: "standalone",
    background_color: "#0a1628",
    theme_color: "#c9a84c",
    dir: "rtl",
    lang: "ar",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  };
}
