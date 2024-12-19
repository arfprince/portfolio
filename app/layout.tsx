import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/providers/theme-provider"
import { Sidebar } from "@/components/sidebar"
import { MobileSidebar } from "@/components/mobile-sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ARF Prince - Portfolio",
  description: "Personal portfolio of Md Armanur Rahman Faisal Prince",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex h-screen">
            <div className="hidden md:block md:w-64">
              <Sidebar />
            </div>
            <MobileSidebar />
            <main className="flex-1 overflow-y-auto bg-white dark:bg-gray-900 pt-14 md:pt-0">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

