/* app routes ts , import para meta.env.MODE */
//const isProd = import.meta.env.MODE === 'production';


/// <reference types="vite/client" />


interface ImportMetaEnv {
  readonly MODE: string;
  // você pode adicionar outras variáveis aqui, ex:
  // readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}