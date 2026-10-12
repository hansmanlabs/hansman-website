import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Shared helpers for generated images (Open Graph card, Apple touch icon).
export const colors = {
  canvas: "#f7f5f0",
  surface: "#e9e4da",
  ink: "#262e27",
  muted: "#62675c",
  accent: "#b5a38a",
  accentInk: "#7a6a52",
};

export async function loadSerifFonts() {
  const dir = join(process.cwd(), "assets/fonts");
  const [regular, italic] = await Promise.all([
    readFile(join(dir, "InstrumentSerif-Regular.ttf")),
    readFile(join(dir, "InstrumentSerif-Italic.ttf")),
  ]);
  return [
    { name: "Instrument Serif", data: regular, style: "normal" as const, weight: 400 as const },
    { name: "Instrument Serif", data: italic, style: "italic" as const, weight: 400 as const },
  ];
}

/** The H monogram as flat blocks, sized to `size` px. */
export function Monogram({ size, color }: { size: number; color: string }) {
  const u = size / 100;
  const block = (left: number, top: number, width: number, height: number) => (
    <div
      style={{
        position: "absolute",
        left: left * u,
        top: top * u,
        width: width * u,
        height: height * u,
        background: color,
      }}
    />
  );
  return (
    <div style={{ display: "flex", position: "relative", width: size, height: size }}>
      {block(0, 0, 16, 100)}
      {block(84, 0, 16, 100)}
      {block(16, 43, 68, 14)}
    </div>
  );
}
