import type { Metadata } from "next";
import { Inter, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jeongraklee.com"),
  title: {
    default: "Jeongrak Lee — Postdoctoral Researcher, POSTECH",
    template: "%s | Jeongrak Lee",
  },
  description:
    "Postdoctoral Researcher at POSTECH GIFT working on next-generation space propulsion: chemical, plasma-hybrid, and photonic propulsion systems.",
  keywords: [
    "Jeongrak Lee",
    "Lee Jeongrak",
    "POSTECH",
    "space propulsion",
    "rotating gliding arc",
    "RGA thruster",
    "Lab-on-PCB",
    "MEMS thruster",
    "solar sail",
    "additive manufacturing",
    "Sejong Science Fellowship",
  ],
  authors: [{ name: "Jeongrak Lee" }],
  openGraph: {
    title: "Jeongrak Lee — Postdoctoral Researcher, POSTECH",
    description:
      "Next-generation space propulsion: chemical, plasma-hybrid, and photonic propulsion.",
    type: "website",
    locale: "en_US",
    siteName: "Jeongrak Lee",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeongrak Lee",
    description:
      "Postdoctoral Researcher at POSTECH GIFT — space propulsion researcher.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${manrope.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
