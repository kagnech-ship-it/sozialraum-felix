import L from 'leaflet';

interface MarkerIconOptions {
  color: string;
  selected?: boolean;
  isPraxisstelle?: boolean;
  outsideLocalArea?: boolean;
}

function pinSvg({ color, selected, isPraxisstelle, outsideLocalArea }: MarkerIconOptions): string {
  const size = isPraxisstelle ? 52 : selected ? 44 : 38;
  const strokeColor = outsideLocalArea ? '#64748b' : '#ffffff';
  const glyph = isPraxisstelle
    ? '<path d="M16 8.5 8 14.5v9.5h6v-6.5h4v6.5h6v-9.5Z" fill="#ffffff"/><path d="m16 6 12 9-1.6 2.1L16 9.6 5.6 17.1 4 15Z" fill="#ffffff"/>'
    : '<circle cx="16" cy="15" r="4" fill="#ffffff"/>';

  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size * 1.25}" viewBox="0 0 32 40">
    <ellipse cx="16" cy="37" rx="6" ry="2" fill="rgba(15,23,42,0.18)"/>
    <path d="M16 0C7.16 0 0 7.16 0 16c0 11 16 24 16 24s16-13 16-24C32 7.16 24.84 0 16 0Z"
      fill="${color}" stroke="${strokeColor}" stroke-width="2.5"/>
    ${glyph}
    ${outsideLocalArea ? '<circle cx="25" cy="7" r="6" fill="#dc2626" stroke="#fff" stroke-width="1.5"/><text x="25" y="10" font-size="8" font-weight="700" text-anchor="middle" fill="#fff">!</text>' : ''}
  </svg>`.trim();
}

export function createMarkerIcon(options: MarkerIconOptions): L.DivIcon {
  const size = options.isPraxisstelle ? 52 : options.selected ? 44 : 38;
  const height = size * 1.25;
  return L.divIcon({
    html: pinSvg(options),
    className: '',
    iconSize: [size, height],
    iconAnchor: [size / 2, height],
    popupAnchor: [0, -height + 6],
  });
}
