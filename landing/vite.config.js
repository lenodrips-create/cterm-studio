import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Builds straight into the repo root so the site stays servable as static
// files: index.html (this landing page) sits next to studio.html, win11/ and media/.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: '..',
    emptyOutDir: false,
    assetsDir: 'landing-assets',
  },
})
