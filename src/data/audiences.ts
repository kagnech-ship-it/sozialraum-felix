import type { Audience } from '../types/institution';

export interface AudienceMeta {
  id: Audience;
  label: string;
  emoji: string;
}

export const audienceList: AudienceMeta[] = [
  { id: 'kleinkind', label: 'Kleinkind', emoji: '👶' },
  { id: 'kind', label: 'Kind', emoji: '🧒' },
  { id: 'jugendlicher', label: 'Jugendlicher', emoji: '🧑' },
  { id: 'familie', label: 'Familie', emoji: '👨‍👩‍👧' },
  { id: 'eltern', label: 'Eltern', emoji: '👩' },
  { id: 'fachkraft', label: 'Pädagogische Fachkraft', emoji: '🧑‍🏫' },
];
