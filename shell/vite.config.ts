import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";
import dotenv from 'dotenv';

dotenv.config();

const proxyTarget = dotenv.config();


// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
        react(),
        federation({
          name: 'host-app',
          remotes: {            
            mfReactA: proxyTarget?.parsed?.VITE_MICROFRONT_REACT_A_URL || '',
            mfReactB: proxyTarget?.parsed?.VITE_MICROFRONT_REACT_B_URL || '',
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

/* {
  plugins: [
      react(),
      federation({
        name: 'host-app',
        remotes: {
          mfReactA:
          process.env.NODE_ENV
          ? "https://micro-front-example-mf-react-1-6222.vercel.app/assets/remoteEntry.js"
          : "https://micro-front-example-mf-react-1-6222.vercel.app/assets/remoteEntry.js",
          mfReactB: "http://localhost:5002/assets/remoteEntry.js",
        },
        shared: ['react','react-dom'] 
      })
  ],
  define: {
    'process.env.APP_ENV': JSON.stringify(env.VITE_APP_ENV),
    'process.env.API_URL': JSON.stringify(env.VITE_API_URL),
  },
  build: {
    target: 'esnext'
  },
  server: {
    port: 5000
  }
}) */
