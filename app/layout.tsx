"use client"
import {NextUIProvider} from "@nextui-org/react";
import { ThemeProvider } from "next-themes"
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"//默认使用暗色主题
        >
          <NextUIProvider>
          {children}
          </NextUIProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
