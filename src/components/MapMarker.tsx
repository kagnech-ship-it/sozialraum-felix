import { Marker } from '@react-google-maps/api';
import { categories } from '../data/categories';
import type { Institution } from '../types/institution';
import { createMarkerIcon } from '../utils/mapIcons';

interface MapMarkerProps {
  institution: Institution;
  selected: boolean;
  onSelect: (institution: Institution) => void;
}

export default function MapMarker({ institution, selected, onSelect }: MapMarkerProps) {
  const meta = categories[institution.category];

  return (
    <Marker
      position={{ lat: institution.latitude, lng: institution.longitude }}
      title={institution.name}
      zIndex={institution.isPraxisstelle ? 1000 : selected ? 500 : undefined}
      icon={createMarkerIcon({
        color: institution.isPraxisstelle ? '#1d4ed8' : meta.color,
        selected,
        isPraxisstelle: institution.isPraxisstelle,
        outsideLocalArea: institution.outsideLocalArea,
      })}
      onClick={() => onSelect(institution)}
    />
  );
}
