/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly APP_TITLE: string
  readonly NOT_VISIBLE_IN_CLIENT: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
