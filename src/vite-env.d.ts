/// <reference types="vite/client" />

declare module '*.vue'

interface ImportMetaEnv {
  VITE_SUPER_KEY: number
}
