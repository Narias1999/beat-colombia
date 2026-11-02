/** The Strava chevron, drawn so it inherits currentColor like our other icons. */
export default function StravaIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066M10.463 0L3.46 13.828h4.169L10.463 8.2l2.833 5.628h4.157" />
    </svg>
  );
}
