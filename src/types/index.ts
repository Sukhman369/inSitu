import React from "react"

export interface PaletteVariables {
  "--insitu-primary": string
  "--insitu-primary-hover": string
  "--insitu-primary-light": string
  "--insitu-primary-subtle": string
  "--insitu-canvas": string
  "--insitu-sand": string
  "--insitu-ecru": string
  "--insitu-cream": string
  "--insitu-border": string
  "--insitu-border-dark": string
  "--insitu-charcoal": string
  "--insitu-muted": string
  "--insitu-light-muted": string
}

export interface PaletteOption {
  id: string
  name: string
  subtitle: string
  description: string
  tag: string
  variables: PaletteVariables
}

export interface LogoVariant {
  id: string
  name: string
  subtitle: string
  tag: string
  description: string
  src: string
  srcDark?: string
  previewSrc?: string
  width: number
  height: number
  category: "script" | "serif" | "modern" | "monogram"
}

export interface HeroVariantInfo {
  id: string
  label: string
  desc: string
}
