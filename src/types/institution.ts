export type Category =
  | 'familie'
  | 'bildung'
  | 'jugend'
  | 'beratung'
  | 'sport'
  | 'kultur'
  | 'beteiligung'
  | 'inklusion';

export interface Institution {
  id: string;
  name: string;
  category: Category;
  address: string;
  postalCode: string;
  city: string;
  description: string;
  targetGroups: string[];
  offers: string[];
  website?: string;
  sourceUrl?: string;
  sourceLabel?: string;
  mapsUrl?: string;
  latitude: number;
  longitude: number;
  isPraxisstelle?: boolean;
  outsideLocalArea?: boolean;
}

export interface ParentNeed {
  id: string;
  label: string;
  icon: string;
  categories: Category[];
}
