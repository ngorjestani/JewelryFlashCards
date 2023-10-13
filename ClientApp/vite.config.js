import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [react()],
    server: {
        https: {
            key: import.meta.env.VITE_SSL_KEY_PATH,
            cert: import.meta.env.VITE_SSL_CERT_PATH
        },
        proxy: {
            '/api': 'https://localhost:7169'
        }
    }
});
