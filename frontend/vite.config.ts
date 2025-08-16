import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({  
    plugins: [    
        tailwindcss(),  
    ],
    build: {
        outDir: '../static/dist',
        emptyOutDir: true,

        rollupOptions: {
            input: {
                main: './src/main.js',
                style: './src/style.css'
            },
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: '[name].js',
                assetFileNames: '[name][extname]'
            }
        },
    }
})
