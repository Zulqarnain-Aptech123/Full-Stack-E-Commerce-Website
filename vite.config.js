import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
// import bootstrapcss from 'bootstrap/dist/css/bootstrap.min/css'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  tailwindcss(),
  ],

})
