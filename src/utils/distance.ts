const EARTH_RADIUS_M = 6371000;
const AVG_CYCLING_SPEED_KMH = 15;

function toRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

/** Straight-line ("Luftlinie") distance in meters between two coordinates. */
export function haversineDistanceMeters(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
): number {
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return EARTH_RADIUS_M * c;
}

export function formatDistanceMeters(meters: number): string {
  if (meters < 950) {
    return `ca. ${Math.round(meters / 10) * 10} m`;
  }
  return `ca. ${(meters / 1000).toFixed(1).replace('.', ',')} km`;
}

/** Rough cycling time estimate from a straight-line distance (not a routed distance). */
export function estimateCyclingMinutes(meters: number): number {
  const km = meters / 1000;
  const hours = km / AVG_CYCLING_SPEED_KMH;
  return Math.max(1, Math.round(hours * 60));
}
