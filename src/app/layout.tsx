import type { Metadata } from "next"
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google"
import StudioDock from "@/components/studio/StudioDock"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
})

export const metadata: Metadata = {
  title: "inSitu — In-Situ Visual Brand Studio & Design Decision Engine",
  description:
    "An open-source library and interactive decision engine to preview, combine, and hot-swap 100+ UI designs, heroes, and color palettes live in-situ.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable}`}
      suppressHydrationWarning
    >
      <body
        className="bg-insitu-canvas text-insitu-charcoal font-sans antialiased selection:bg-insitu-green-light selection:text-insitu-green"
        suppressHydrationWarning
      >
        <main className="relative min-h-screen flex flex-col">{children}</main>
        {/* Unified inSitu Floating Combinator Studio Dock */}
        <StudioDock />
      </body>
    </html>
  )
}
