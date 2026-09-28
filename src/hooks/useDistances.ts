import { useMemo } from 'react';
import type { Institution } from '../types/institution';
import { haversineDistanceMeters } from '../utils/distance';

export interface DistanceInfo {
  meters: number;
}

/**
 * Luftlinien-Entfernung von der Kita zu jeder Einrichtung, berechnet aus den
 * recherchierten Koordinaten (Haversine-Formel). Keine erfundenen Werte.
 */
export function useDistances(
  origin: { latitude: number; longitude: number },
  institutions: Institution[],
): Record<string, DistanceInfo> {
  return useMemo(() => {
    const result: Record<string, DistanceInfo> = {};
    for (const inst of institutions) {
      result[inst.id] = {
        meters: haversineDistanceMeters(origin.latitude, origin.longitude, inst.latitude, inst.longitude),
      };
    }
    return result;
  }, [origin.latitude, origin.longitude, institutions]);
}
