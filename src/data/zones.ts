import type { Zone } from '../types/institution';

export const zoneMeta: Record<Zone, { label: string; description: string }> = {
  nahbereich: {
    label: 'Nahbereich',
    description: 'Fußläufig rund um die Kita – der engste Sozialraum.',
  },
  sozialraum: {
    label: 'Weiterer Sozialraum',
    description: 'Etwas weiter entfernt, aber noch im Sozialraum der Kita.',
  },
  ausserhalb: {
    label: 'Außerhalb des engeren Sozialraums',
    description: 'Nicht im unmittelbaren Umfeld, aber wichtige Anlaufstelle.',
  },
};
