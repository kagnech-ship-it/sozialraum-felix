import type { Institution } from '../types/institution';

export function fullAddress(inst: Institution | { address: string; postalCode: string; city: string }): string {
  return `${inst.address}, ${inst.postalCode} ${inst.city}`;
}

export function buildDirectionsUrl(inst: Institution): string {
  const destination =
    inst.latitude && inst.longitude ? `${inst.latitude},${inst.longitude}` : fullAddress(inst);
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
}

export function buildMapsSearchUrl(inst: Institution): string {
  if (inst.mapsUrl) return inst.mapsUrl;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress(inst))}`;
}
