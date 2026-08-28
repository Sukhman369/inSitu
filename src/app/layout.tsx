import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "inSitu — In-Situ Visual Brand Studio & Design Combinator",
  description:
    "An open-source library and interactive decision engine to preview, combine, and hot-swap 100+ UI designs, heroes, and color palettes live in-situ.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-[#0A0A0C] text-[#EDEDED]">
        {children}
      </body>
    </html>
  )
}
