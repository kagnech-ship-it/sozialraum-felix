import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Organisations-Seite (<org>.github.io) wird unter / ausgeliefert.
  // In einem normalen Projekt-Repo stattdessen '/<repo-name>/' (siehe README, Abschnitt "Deployment").
  base: '/',
  plugins: [react(), tailwindcss()],
})
