import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// ─────────────────────────────────────────────────────────────────────────────
// Update these metadata values before publishing.
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: "[YOUR_NAME] — AI & Software Engineer",
    template: "%s | [YOUR_NAME]",
  },
  description:
    "Portfolio of [YOUR_NAME] — AI engineer specialising in Databricks, agentic systems, RAG, and full-stack development.",
  keywords: [
    "AI Engineer",
    "Databricks",
    "RAG",
    "Agentic AI",
    "MCP",
    "Python",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "[YOUR_NAME]" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "[YOUR_NAME] Portfolio",
    title: "[YOUR_NAME] — AI & Software Engineer",
    description:
      "Portfolio of [YOUR_NAME] — AI engineer specialising in Databricks, agentic systems, RAG, and full-stack development.",
  },
  twitter: {
    card: "summary_large_image",
    title: "[YOUR_NAME] — AI & Software Engineer",
    description:
      "AI engineer portfolio featuring Databricks Genie, agentic AI, RAG, and full-stack projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
