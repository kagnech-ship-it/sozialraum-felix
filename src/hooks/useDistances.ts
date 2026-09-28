import { useEffect, useState } from 'react';
import type { Institution } from '../types/institution';
import { haversineDistanceMeters } from '../utils/distance';

export interface DistanceInfo {
  meters: number;
  routed: boolean;
  cyclingMinutes?: number;
}

/**
 * Provides a distance from the Kita to every institution.
 * Starts with an honest straight-line ("Luftlinie") calculation from real
 * coordinates. If the Google Maps JS API is loaded, it is upgraded in the
 * background to a real routed cycling distance via DistanceMatrixService.
 * Never fabricates a value: on any API failure the straight-line figure stays.
 */
export function useDistances(
  origin: { latitude: number; longitude: number },
  institutions: Institution[],
  mapsReady: boolean,
): Record<string, DistanceInfo> {
  const [distances, setDistances] = useState<Record<string, DistanceInfo>>(() => {
    const initial: Record<string, DistanceInfo> = {};
    for (const inst of institutions) {
      initial[inst.id] = {
        meters: haversineDistanceMeters(origin.latitude, origin.longitude, inst.latitude, inst.longitude),
        routed: false,
      };
    }
    return initial;
  });

  useEffect(() => {
    if (!mapsReady || typeof window === 'undefined' || !window.google?.maps) return;

    let cancelled = false;

    try {
      const service = new window.google.maps.DistanceMatrixService();
      service.getDistanceMatrix(
        {
          origins: [{ lat: origin.latitude, lng: origin.longitude }],
          destinations: institutions.map((inst) => ({ lat: inst.latitude, lng: inst.longitude })),
          travelMode: window.google.maps.TravelMode.BICYCLING,
          unitSystem: window.google.maps.UnitSystem.METRIC,
        },
        (response, status) => {
          if (cancelled || status !== 'OK' || !response) return;
          const row = response.rows[0];
          if (!row) return;

          setDistances((prev) => {
            const next = { ...prev };
            row.elements.forEach((el, index) => {
              const inst = institutions[index];
              if (!inst) return;
              if (el.status === 'OK' && el.distance && el.duration) {
                next[inst.id] = {
                  meters: el.distance.value,
                  routed: true,
                  cyclingMinutes: Math.round(el.duration.value / 60),
                };
              }
            });
            return next;
          });
        },
      );
    } catch {
      // Keep straight-line fallback values.
    }

    return () => {
      cancelled = true;
    };
  }, [mapsReady, origin.latitude, origin.longitude, institutions]);

  return distances;
}
