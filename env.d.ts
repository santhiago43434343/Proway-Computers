/* app routes ts , import para meta.env.MODE 
definição & ou separação para github pages e localhost*/
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