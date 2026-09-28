import type L from 'leaflet';
import { ExternalLink, Navigation2 } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Marker, Popup, Tooltip } from 'react-leaflet';
import { categories } from '../data/categories';
import type { Institution } from '../types/institution';
import { buildDirectionsUrl } from '../utils/links';
import { createMarkerIcon } from '../utils/mapIcons';

interface MapMarkerProps {
  institution: Institution;
  selected: boolean;
  onSelect: (institution: Institution | null) => void;
  onOpenDetails: (institution: Institution) => void;
}

export default function MapMarker({ institution, selected, onSelect, onOpenDetails }: MapMarkerProps) {
  const meta = categories[institution.category];
  const markerRef = useRef<L.Marker>(null);

  useEffect(() => {
    const marker = markerRef.current;
    if (!marker) return;
    if (selected) marker.openPopup();
    else marker.closePopup();
  }, [selected]);

  return (
    <Marker
      ref={markerRef}
      position={[institution.latitude, institution.longitude]}
      zIndexOffset={institution.isPraxisstelle ? 1000 : selected ? 500 : 0}
      icon={createMarkerIcon({
        color: institution.isPraxisstelle ? '#1d4ed8' : meta.color,
        emoji: meta.emoji,
        selected,
        isPraxisstelle: institution.isPraxisstelle,
        zone: institution.zone,
      })}
      eventHandlers={{
        click: () => onSelect(institution),
        popupclose: () => onSelect(null),
      }}
    >
      {institution.isPraxisstelle ? (
        <Tooltip direction="top" offset={[0, -10]} permanent className="!rounded-full !border-0 !bg-[var(--color-brand)] !px-3 !py-1 !font-sans !text-xs !font-bold !text-white !shadow-md">
          Familienhaus Felix · Praxisstelle
        </Tooltip>
      ) : (
        <Tooltip direction="top" offset={[0, -8]} className="!rounded-lg !border-0 !bg-[var(--color-ink)] !px-2.5 !py-1 !font-sans !text-xs !font-semibold !text-white">
          {institution.name}
        </Tooltip>
      )}

      <Popup minWidth={240} maxWidth={280} autoPan>
        <div className="max-w-[260px] py-1 font-sans">
          <span
            className="mb-1.5 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide"
            style={{ background: meta.colorSoft, color: meta.textOn }}
          >
            {institution.isPraxisstelle ? 'Praxisstelle' : meta.label}
          </span>
          <h3 className="text-[15px] font-bold leading-snug text-[var(--color-ink)]">{institution.name}</h3>
          <p className="mt-1 text-[13px] leading-snug text-[var(--color-ink-soft)]">{institution.description}</p>
          <p className="mt-1.5 text-[12px] text-[var(--color-ink-soft)]">
            {institution.address}, {institution.postalCode} {institution.city}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => onOpenDetails(institution)}
              className="rounded-full bg-[var(--color-ink)] px-3 py-1.5 text-[12px] font-semibold text-white"
            >
              Details
            </button>
            <a
              href={buildDirectionsUrl(institution)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-[var(--color-line)] px-3 py-1.5 text-[12px] font-semibold text-[var(--color-ink)]"
            >
              <Navigation2 size={12} aria-hidden="true" />
              Route
            </a>
            {institution.website && (
              <a
                href={institution.website}
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
      </Popup>
    </Marker>
  );
}
