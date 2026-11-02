type Point = { km: number; m: number };

/**
 * Alto de Patios, ridden the usual way: from the Carrera Septima meeting point
 * up the La Calera road to the summit stalls. Roughly 7 km of climbing, which
 * is the 14 km the club is announcing once you add the descent back down.
 *
 * Sampled every 500 m from the published figures for the climb, so the shape is
 * right but the numbers are approximate. Swap this array for the real GPX
 * samples once we export the official route file and everything below (plus the
 * stats in the dictionaries) follows automatically.
 */
const PROFILE: Point[] = [
  { km: 0, m: 2630 },
  { km: 0.5, m: 2660 },
  { km: 1, m: 2690 },
  { km: 1.5, m: 2722 },
  { km: 2, m: 2755 },
  { km: 2.5, m: 2785 },
  { km: 3, m: 2812 },
  { km: 3.5, m: 2835 },
  { km: 4, m: 2862 },
  { km: 4.5, m: 2895 },
  { km: 5, m: 2925 },
  { km: 5.5, m: 2950 },
  { km: 6, m: 2975 },
  { km: 6.5, m: 3005 },
  { km: 7, m: 3030 },
];

const MIN_M = 2600;
const MAX_M = 3070;
const GRID_M = [2700, 2800, 2900, 3000];

export type ElevationLabels = {
  /** Accessible description of the whole chart. */
  alt: string;
  /** Axis captions, e.g. "Altitude (m)" / "Distance (km)". */
  altitude: string;
  distance: string;
  start: string;
  summit: string;
};

type Props = {
  labels: ElevationLabels;
  /** Drops the axes and labels — for the homepage band, where it reads as art. */
  compact?: boolean;
  /**
   * A squarer viewBox for phones. The chart scales uniformly, so a wide viewBox
   * on a narrow screen shrinks the labels to a few pixels — this keeps them
   * legible instead.
   */
  narrow?: boolean;
  className?: string;
};

export default function ElevationProfile({ labels, compact = false, narrow = false, className }: Props) {
  const W = narrow ? 430 : 840;
  const H = compact ? 220 : narrow ? 300 : 300;
  const pad = compact
    ? { top: 18, right: 18, bottom: 18, left: 18 }
    : { top: 42, right: 26, bottom: 42, left: 56 };

  const innerW = W - pad.left - pad.right;
  const innerH = H - pad.top - pad.bottom;
  const maxKm = PROFILE[PROFILE.length - 1].km;

  const x = (km: number) => pad.left + (km / maxKm) * innerW;
  const y = (m: number) => pad.top + (1 - (m - MIN_M) / (MAX_M - MIN_M)) * innerH;

  const line = PROFILE.map((pt, i) => `${i === 0 ? 'M' : 'L'}${x(pt.km).toFixed(1)} ${y(pt.m).toFixed(1)}`).join(' ');
  const area = `${line} L${x(maxKm).toFixed(1)} ${(pad.top + innerH).toFixed(1)} L${x(0).toFixed(1)} ${(pad.top + innerH).toFixed(1)} Z`;

  const first = PROFILE[0];
  const last = PROFILE[PROFILE.length - 1];
  const gradientId = compact ? 'profile-fill-compact' : 'profile-fill';

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={className}
      role="img"
      aria-label={labels.alt}
      preserveAspectRatio={compact ? 'none' : 'xMidYMid meet'}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#28BEBE" stopOpacity={compact ? 0.42 : 0.55} />
          <stop offset="100%" stopColor="#28BEBE" stopOpacity={compact ? 0.1 : 0.04} />
        </linearGradient>
      </defs>

      {!compact && (
        <g>
          {GRID_M.map((m) => (
            <g key={m}>
              <line
                x1={pad.left}
                x2={W - pad.right}
                y1={y(m)}
                y2={y(m)}
                stroke="currentColor"
                strokeOpacity="0.18"
                strokeWidth="1"
              />
              <text
                x={pad.left - 10}
                y={y(m) + 4}
                textAnchor="end"
                fill="currentColor"
                fillOpacity="0.55"
                fontSize="13"
                fontWeight="600"
              >
                {m.toLocaleString('en-US').replace(',', '.')}
              </text>
            </g>
          ))}
        </g>
      )}

      <path d={area} fill={`url(#${gradientId})`} />
      <path d={line} fill="none" stroke="#28BEBE" strokeWidth={compact ? 3 : 3.5} strokeLinejoin="round" strokeLinecap="round" />

      {!compact && (
        <g>
          {(narrow ? [0, 2, 4, 6] : [0, 1, 2, 3, 4, 5, 6, 7]).map((km) => (
            <g key={km}>
              <line
                x1={x(km)}
                x2={x(km)}
                y1={pad.top + innerH}
                y2={pad.top + innerH + 6}
                stroke="currentColor"
                strokeOpacity="0.35"
                strokeWidth="1.5"
              />
              <text
                x={x(km)}
                y={pad.top + innerH + 24}
                textAnchor="middle"
                fill="currentColor"
                fillOpacity="0.55"
                fontSize="13"
                fontWeight="600"
              >
                {km}
              </text>
            </g>
          ))}
          <text x={4} y={18} fill="currentColor" fillOpacity="0.55" fontSize="13" fontWeight="700">
            {labels.altitude}
          </text>
          <text x={W - 4} y={18} textAnchor="end" fill="currentColor" fillOpacity="0.55" fontSize="13" fontWeight="700">
            {labels.distance}
          </text>
        </g>
      )}

      {/* Start and summit markers */}
      <circle cx={x(first.km)} cy={y(first.m)} r={compact ? 5 : 6} fill="#28BEBE" />
      <circle cx={x(last.km)} cy={y(last.m)} r={compact ? 5 : 6} fill="#fff" stroke="#28BEBE" strokeWidth="3" />

      {!compact && (
        <g fontWeight="700" fontSize="14" fill="currentColor">
          <text x={x(first.km) + 12} y={y(first.m) - 12}>
            {labels.start}
          </text>
          <text x={x(last.km)} y={y(last.m) - 16} textAnchor="end">
            {labels.summit}
          </text>
        </g>
      )}
    </svg>
  );
}
