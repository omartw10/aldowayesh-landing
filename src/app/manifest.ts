import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "د. حسن هاشم المالكي — محامٍ ومستشار قانوني",
    short_name: "د. حسن المالكي",
    description:
      "الموقع الرسمي للدكتور حسن هاشم المالكي — محامٍ ومستشار قانوني خبير في القانون المالي والتشريعي والترجمة المعتمدة.",
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
