import { Toaster } from "sonner";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Metadata } from "next/types";


import { ThemeProvider } from "@/components/providers/theme-provider";
import ConvexClientProvider from "@/components/providers/convex-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/components/providers/modal-provider";
import { EdgeStoreProvider } from "@/lib/edgestore";






const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Graphite",
  description: "Sketch Your Ideas, Shape Your Mind.",

  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark-mode.svg",
        href: "/logo-dark-mode.svg",
      }
    ]
  }
};



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased border-none`}>
        {/* ClerkProvider must wrap everything that uses Clerk hooks */}
        <ClerkProvider>
          {/* ConvexClientProvider is now correctly inside ClerkProvider */}
          <ConvexClientProvider>
            <EdgeStoreProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="graphite-theme"
            >
              <Toaster position= "bottom-center" />
              <ModalProvider />
              {children}
            </ThemeProvider>
            </EdgeStoreProvider>
          </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}

