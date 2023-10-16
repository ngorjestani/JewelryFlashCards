/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SSL_KEY_PATH: string;
  readonly VITE_SSL_CERT_PATH: string;
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
