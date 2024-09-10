import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            // Match your `tsconfig.json` paths configuration
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/components'),
            '@enums': path.resolve(__dirname, './src/enums'),
            '@store': path.resolve(__dirname, './src/store'),
            // Add more aliases if needed
        },
    },
})
