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
    default: "Pawan Gote — AI & Software Engineer",
    template: "%s | Pawan Gote",
  },
  description:
    "Portfolio of Pawan Gote — AI engineer specialising in Databricks, agentic systems, RAG, and full-stack development.",
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
  authors: [{ name: "Pawan Gote" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Pawan Gote Portfolio",
    title: "Pawan Gote — AI & Software Engineer",
    description:
      "Portfolio of Pawan Gote — AI engineer specialising in agentic systems, RAG, and full-stack development.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pawan Gote — AI & Software Engineer",
    description:
      "AI engineer portfolio featuring agentic AI, RAG, and full-stack projects.",
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
