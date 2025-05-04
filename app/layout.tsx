import "./globals.css"
import type { Metadata } from "next"
import SessionWrapper from "@/components/SessionWrapper"

export const metadata: Metadata = {
  title: "CS391 OAuth App",
  description: "Simple GitHub OAuth login",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>{children}</SessionWrapper>
      </body>
    </html>
  )
}