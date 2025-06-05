'use client'

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import '@coinbase/onchainkit/styles.css'
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { base } from 'viem/chains'
import { OnchainKitProvider } from '@coinbase/onchainkit'

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <OnchainKitProvider 
          apiKey={process.env.NEXT_PUBLIC_CDP_API_KEY!} 
          chain={base}
        >
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </OnchainKitProvider>
      </body>
    </html>
  )
}
