import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
/// <reference path="./vite-env.d.ts" />
export default (function (_a) {
    var mode = _a.mode;
    var env = loadEnv(mode, process.cwd(), "");
    return defineConfig({
        plugins: [react()],
        server: {
            https: {
                key: env.VITE_SSL_KEY_PATH,
                cert: env.VITE_SSL_CERT_PATH,
            },
            proxy: {
                "/api": {
                    target: env.VITE_API_URL,
                    changeOrigin: true,
                    secure: false,
                    rewrite: function (path) { return path.replace(/^\/api/, ""); },
                },
            },
        },
    });
});
