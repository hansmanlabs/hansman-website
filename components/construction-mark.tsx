/**
 * The Hansman Labs monogram, drawn with its construction geometry.
 * The square's diagonals and the inner circle (r = 50√2) meet exactly at the H's outer corners.
 */

const S = 200;
const C = S / 2;
const R_INNER = 50 * Math.SQRT2;

// Stroke draw order (index feeds the stagger delay).
const lines: Array<{ d?: string; circle?: number; faint?: boolean }> = [
  { d: `M0 0H${S}V${S}H0Z` },
  { circle: C },
  { d: `M0 0L${S} ${S}` },
  { d: `M${S} 0L0 ${S}` },
  { circle: R_INNER },
  { d: `M${C} -12V${S + 12}`, faint: true },
  { d: `M-12 ${C}H${S + 12}`, faint: true },
  { d: `M50 0V${S}M150 0V${S}` },
  { d: `M0 50H${S}M0 150H${S}` },
];

// Measurement ticks along the top and left edges, every 10 units.
const ticks = Array.from({ length: 21 }, (_, i) => i * 10);

export function ConstructionMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox={`-16 -16 ${S + 32} ${S + 32}`}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke="var(--accent)" strokeWidth={0.6}>
        {lines.map((l, i) =>
          l.circle ? (
            <circle
              key={i}
              cx={C}
              cy={C}
              r={l.circle}
              pathLength={1}
              className="construct"
              style={{ ["--i" as string]: i }}
             
            />
          ) : (
            <path
              key={i}
              d={l.d}
              pathLength={1}
              className="construct"
              style={{ ["--i" as string]: i }}
              strokeOpacity={l.faint ? 0.6 : 1}
             
            />
          ),
        )}
      </g>

      <g stroke="var(--accent)" strokeWidth={0.6} className="construct-fill">
        {ticks.map((t) => (
          <path
            key={`t${t}`}
            d={`M${t} -${t % 50 === 0 ? 8 : 4}V0M-${t % 50 === 0 ? 8 : 4} ${t}H0`}
           
          />
        ))}
      </g>

      <g fill="var(--ink)" className="construct-fill">
        {/* Crossbar overlaps the stems so no anti-aliasing seam shows at the joins. */}
        <rect x={58} y={93} width={84} height={14} />
        <rect x={50} y={50} width={16} height={100} />
        <rect x={134} y={50} width={16} height={100} />
      </g>

      <g fill="var(--accent)" className="construct-fill">
        {[
          [50, 50],
          [150, 50],
          [50, 150],
          [150, 150],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={1.6} />
        ))}
      </g>
    </svg>
  );
}
