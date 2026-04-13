import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "د. حسن هاشم المالكي — محامٍ ومستشار قانوني";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: { locale: string };
}) {
  const isArabic = params.locale === "ar";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 50%, #0a1628 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Gold border frame */}
        <div style={{
          position: "absolute",
          inset: "20px",
          border: "1px solid rgba(201,168,76,0.4)",
          borderRadius: "16px",
          display: "flex",
        }} />

        {/* Content */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          direction: isArabic ? "rtl" : "ltr",
        }}>
          {/* Scale icon */}
          <div style={{
            width: "80px", height: "80px",
            borderRadius: "50%",
            border: "2px solid #c9a84c",
            background: "rgba(201,168,76,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "36px",
          }}>
            ⚖
          </div>

          {/* Name */}
          <div style={{
            fontSize: "56px",
            fontWeight: "700",
            color: "#f5f0e8",
            textAlign: "center",
            lineHeight: 1.2,
          }}>
            {isArabic ? "د. حسن هاشم المالكي" : "Dr. Hassan Hashem Al-Maliki"}
          </div>

          {/* Gold divider */}
          <div style={{
            width: "200px",
            height: "1px",
            background: "linear-gradient(90deg, transparent, #c9a84c, transparent)",
          }} />

          {/* Subtitle */}
          <div style={{
            fontSize: "26px",
            color: "#c9a84c",
            textAlign: "center",
          }}>
            {isArabic
              ? "محامٍ ومستشار قانوني — رخصة رقم ٣٥٣١"
              : "Attorney & Legal Consultant — License No. 3531"}
          </div>

          {/* Specialties */}
          <div style={{
            fontSize: "18px",
            color: "#8a9bb8",
            textAlign: "center",
          }}>
            {isArabic
              ? "الدراسات التشريعية • الخدمات المالية • الترجمة المعتمدة"
              : "Legislative Studies • Financial Law • Certified Translation"}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
