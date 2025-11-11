import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // This is the base path of the app when deployed to GitHub Pages.
  // It should match the name of your GitHub repository.
  // For example, if your repo URL is `https://github.com/user/my-app`,
  // the base should be `/my-app/`.
  base: '/Grocery-Calculator/',
  plugins: [react()],
})