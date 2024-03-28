import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'mf-react-a',
      filename: 'remoteEntry.js',
      exposes: {
        './UiComponent': './src/components/ui/UiComponent.tsx'
      },
      shared: ['react','react-dom']
    })
  ],
  build: {
    target: 'esnext'
  }
})
