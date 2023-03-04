import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/interactive-rating-component/',
	plugins: [react()],
})
