import { ImageResponse } from "next/og";
import { colors, Monogram } from "@/lib/brand-image";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: colors.ink,
        }}
      >
        <Monogram size={84} color={colors.canvas} />
      </div>
    ),
    size,
  );
}
