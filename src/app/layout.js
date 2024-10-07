import "@/styles/globals.css"
import { Barlow as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: '500',
})

export const metadata = {
  title: "Clerk UA | Business Consulting Service",
  description: "Fastest online support in any bureaucracy question",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
      )}>
        <div className='app-background'>
          <div className='app-background-gradient'/>
        </div>
        <main className='app'>
          {children}
        </main>
      </body>

    </html>
  );
}
