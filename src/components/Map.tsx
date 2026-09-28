import { GoogleMap, InfoWindow } from '@react-google-maps/api';
import { AlertTriangle, ExternalLink, Navigation2 } from 'lucide-react';
import { useCallback, useEffect, useRef } from 'react';
import { categories } from '../data/categories';
import { MAP_CENTER, MAP_DEFAULT_ZOOM } from '../data/kita';
import type { Institution } from '../types/institution';
import { buildDirectionsUrl } from '../utils/links';
import { MAP_STYLE } from '../utils/mapStyle';
import MapMarker from './MapMarker';

export const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const MAP_CONTAINER_STYLE: React.CSSProperties = { width: '100%', height: '100%' };

interface SocialMapProps {
  institutions: Institution[];
  selectedInstitution: Institution | null;
  onSelectInstitution: (institution: Institution | null) => void;
  onOpenDetails: (institution: Institution) => void;
  isLoaded: boolean;
  loadError?: Error;
}

function MapFallback({ reason }: { reason: string }) {
  return (
    <div
      role="status"
      className="flex h-full min-h-[420px] flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-[var(--color-line)] bg-[var(--color-mist)] p-8 text-center"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
        <AlertTriangle size={24} aria-hidden="true" />
      </span>
      <p className="max-w-md text-base font-semibold text-[var(--color-ink)]">{reason}</p>
      <p className="max-w-md text-sm text-[var(--color-ink-soft)]">
        Die Karte ist deaktiviert, alle Einrichtungen sind aber vollständig als Liste unten
        verfügbar – inklusive Adresse, Beschreibung und direktem Link zu Google Maps.
      </p>
    </div>
  );
}

export default function SocialMap({
  institutions,
  selectedInstitution,
  onSelectInstitution,
  onOpenDetails,
  isLoaded,
  loadError,
}: SocialMapProps) {
  const mapRef = useRef<google.maps.Map | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(() => {
    mapRef.current = null;
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !selectedInstitution) return;
    map.panTo({ lat: selectedInstitution.latitude, lng: selectedInstitution.longitude });
    if ((map.getZoom() ?? MAP_DEFAULT_ZOOM) < 16) map.setZoom(16);
  }, [selectedInstitution]);

  if (!GOOGLE_MAPS_API_KEY) {
    return <MapFallback reason="Google Maps API-Key fehlt – die interaktive Karte kann hier nicht geladen werden." />;
  }

  if (loadError) {
    return <MapFallback reason="Google Maps konnte nicht geladen werden. Bitte später erneut versuchen." />;
  }

  if (!isLoaded) {
    return (
      <div className="flex h-full min-h-[420px] items-center justify-center rounded-3xl bg-[var(--color-mist)]">
        <div className="flex items-center gap-3 text-[var(--color-ink-soft)]">
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-[var(--color-brand)] border-t-transparent" />
          Karte wird geladen …
        </div>
      </div>
    );
  }

  const meta = selectedInstitution ? categories[selectedInstitution.category] : null;

  return (
    <GoogleMap
      mapContainerStyle={MAP_CONTAINER_STYLE}
      center={MAP_CENTER}
      zoom={MAP_DEFAULT_ZOOM}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onClick={() => onSelectInstitution(null)}
      options={{
        styles: MAP_STYLE,
        disableDefaultUI: true,
        zoomControl: true,
        clickableIcons: false,
        gestureHandling: 'greedy',
        minZoom: 11,
        maxZoom: 19,
      }}
    >
      {institutions.map((inst) => (
        <MapMarker
          key={inst.id}
          institution={inst}
          selected={selectedInstitution?.id === inst.id}
          onSelect={onSelectInstitution}
        />
      ))}

      {selectedInstitution && meta && (
        <InfoWindow
          position={{ lat: selectedInstitution.latitude, lng: selectedInstitution.longitude }}
          onCloseClick={() => onSelectInstitution(null)}
          options={{ pixelOffset: new window.google.maps.Size(0, -8) }}
        >
          <div className="max-w-[260px] py-1 font-sans">
            <span
              className="mb-1.5 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide"
              style={{ background: meta.colorSoft, color: meta.textOn }}
            >
              {selectedInstitution.isPraxisstelle ? 'Praxisstelle' : meta.label}
            </span>
            <h3 className="text-[15px] font-bold leading-snug text-[var(--color-ink)]">
              {selectedInstitution.name}
            </h3>
            <p className="mt-1 text-[13px] leading-snug text-[var(--color-ink-soft)]">
              {selectedInstitution.description}
            </p>
            <p className="mt-1.5 text-[12px] text-[var(--color-ink-soft)]">
              {selectedInstitution.address}, {selectedInstitution.postalCode} {selectedInstitution.city}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <button
                type="button"
                onClick={() => onOpenDetails(selectedInstitution)}
                className="rounded-full bg-[var(--color-ink)] px-3 py-1.5 text-[12px] font-semibold text-white"
              >
                Details
              </button>
              <a
                href={buildDirectionsUrl(selectedInstitution)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-[var(--color-line)] px-3 py-1.5 text-[12px] font-semibold text-[var(--color-ink)]"
              >
                <Navigation2 size={12} aria-hidden="true" />
                Route
              </a>
              {selectedInstitution.website && (
                <a
                  href={selectedInstitution.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-[var(--color-line)] px-3 py-1.5 text-[12px] font-semibold text-[var(--color-ink)]"
                >
                  <ExternalLink size={12} aria-hidden="true" />
                  Website
                </a>
              )}
            </div>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}
