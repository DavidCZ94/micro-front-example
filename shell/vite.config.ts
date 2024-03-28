import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      federation({
        name: 'host-app',
        remotes: {
          mfReactA: "http://localhost:5001/assets/remoteEntry.js",
          mfReactB: "http://localhost:5002/assets/remoteEntry.js",
        },
        shared: ['react','react-dom'] 
      })
  ],
  server: {
    port: 5000
  }
})
