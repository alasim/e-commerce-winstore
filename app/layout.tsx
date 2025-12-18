
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import type React from "react"
import "./globals.css"
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
})
// const _geist = Geist({ subsets: ["latin"] })
// const _geistMono = Geist_Mono({ subsets: ["latin"] })
// const centuryGothic = localFont({
//   src: [
//     {
//       path: "../public/fonts/centurygothic.ttf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/centurygothic_bold.ttf",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-century-gothic",
// })

export const metadata: Metadata = {
  title: "WIN Store - Your One-Stop E-Commerce Solution",
  description: "Shop electronics, fashion, appliances, and more at WIN Store"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
