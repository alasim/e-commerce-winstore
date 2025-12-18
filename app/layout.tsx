import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import localFont from "next/font/local"
import type React from "react"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const centuryGothic = localFont({
  src: [
    {
      path: "../public/fonts/centurygothic.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/centurygothic_bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-century-gothic",
})

export const metadata: Metadata = {
  title: "WIN Store - Your One-Stop E-Commerce Solution",
  description: "Shop electronics, fashion, appliances, and more at WIN Store",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${centuryGothic.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
