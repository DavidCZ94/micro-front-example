import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
        react(),
        federation({
          name: 'host-app',
          remotes: {            
            mfReactA: process.env.VITE_MICROFRONT_REACT_A_URL || '',
            mfReactB: process.env.VITE_MICROFRONT_REACT_B_URL || '',
          },
          shared: ['react','react-dom'] 
        })
    ],
    build: {
      target: 'esnext'
    },
    server: {
      port: 5000
    }
  }
})