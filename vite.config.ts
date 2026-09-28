import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves project sites under /<repo-name>/.
  // Muss zum Repository-Namen passen (siehe README, Abschnitt "Deployment").
  base: '/sozialraum-felix/',
  plugins: [react(), tailwindcss()],
})
