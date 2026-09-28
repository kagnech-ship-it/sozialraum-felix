/**
 * Die Praxisstelle: Zentrum der Sozialraumkarte.
 *
 * Die Humanistische Kita Zühlsdorfer Straße ist die eigentliche Praxisstelle
 * – NICHT dasselbe wie das Familienzentrum Felix, das eine eigenständige,
 * separat auf der Karte dargestellte Einrichtung im selben Gebäudekomplex
 * ("Familienhaus Felix") ist. Siehe src/data/institutions.ts für beide
 * Einträge.
 */
export const KITA = {
  name: 'Humanistische Kita Zühlsdorfer Straße',
  subtitle: 'Praxisstelle',
  address: 'Zühlsdorfer Straße 18',
  postalCode: '12679',
  city: 'Berlin',
  latitude: 52.5472,
  longitude: 13.5482,
};

export const MAP_CENTER = { lat: KITA.latitude, lng: KITA.longitude };
export const MAP_DEFAULT_ZOOM = 14;
