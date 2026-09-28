import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import { MapContainer, TileLayer, useMap, useMapEvents } from 'react-leaflet';
import { MAP_CENTER, MAP_DEFAULT_ZOOM } from '../data/kita';
import type { Institution } from '../types/institution';
import { prefersReducedMotion } from '../utils/motion';
import MapMarker from './MapMarker';

interface SocialMapProps {
  institutions: Institution[];
  selectedInstitution: Institution | null;
  onSelectInstitution: (institution: Institution | null) => void;
  onOpenDetails: (institution: Institution) => void;
}

function ClickToDeselect({ onDeselect }: { onDeselect: () => void }) {
  useMapEvents({ click: onDeselect });
  return null;
}

/**
 * Sekunden für den animierten Kartenschwenk. MapMarker verzögert das Öffnen
 * seines Popups um denselben Zeitraum (siehe PAN_DURATION_MS dort) – so
 * bleibt der Schwenk smooth, ohne dass Leaflets Popup-autoPan mit der noch
 * laufenden View-Animation kollidiert und das Popup falsch positioniert.
 */
export const PAN_DURATION_S = 0.35;

function PanToSelected({ institution }: { institution: Institution | null }) {
  const map = useMap();

  useEffect(() => {
    if (!institution) return;
    const reduceMotion = prefersReducedMotion();
    map.setView([institution.latitude, institution.longitude], Math.max(map.getZoom(), 16), {
      animate: !reduceMotion,
      duration: reduceMotion ? 0 : PAN_DURATION_S,
    });
  }, [institution, map]);

  return null;
}

export default function SocialMap({
  institutions,
  selectedInstitution,
  onSelectInstitution,
  onOpenDetails,
}: SocialMapProps) {
  return (
    <MapContainer
      center={[MAP_CENTER.lat, MAP_CENTER.lng]}
      zoom={MAP_DEFAULT_ZOOM}
      minZoom={11}
      maxZoom={19}
      scrollWheelZoom
      className="h-full w-full"
      attributionControl
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>-Mitwirkende'
        maxZoom={19}
      />

      <ClickToDeselect onDeselect={() => onSelectInstitution(null)} />
      <PanToSelected institution={selectedInstitution} />

      {institutions.map((inst) => (
        <MapMarker
          key={inst.id}
          institution={inst}
          selected={selectedInstitution?.id === inst.id}
          onSelect={onSelectInstitution}
          onOpenDetails={onOpenDetails}
        />
      ))}
    </MapContainer>
  );
}
