import { ImageResponse } from "next/og";
import { colors, loadSerifFonts, Monogram } from "@/lib/brand-image";
import { site } from "@/lib/site";

export const alt = `${site.name} — Practical software, thoughtfully built.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fonts = await loadSerifFonts();

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: colors.canvas,
          color: colors.ink,
          fontFamily: "Instrument Serif",
        }}
      >
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72 }}>
          <div style={{ fontSize: 36 }}>{site.name}</div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 96, lineHeight: 0.98, letterSpacing: -2 }}>
            <span>Practical software,</span>
            <span style={{ fontStyle: "italic", color: colors.accentInk }}>thoughtfully built.</span>
          </div>
        </div>
        <div
          style={{
            width: 330,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: colors.surface,
          }}
        >
          <Monogram size={130} color={colors.ink} />
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
