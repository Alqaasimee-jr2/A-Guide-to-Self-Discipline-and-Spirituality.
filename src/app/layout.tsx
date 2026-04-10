import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import "./globals.css";

const bodoniModa = Bodoni_Moda({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#4F7942",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://a-guide-to-self-discipline-and-spir.vercel.app/"),
  title: "A Guide to Self-Discipline | A New Horizon",
  description: "A digital sanctuary for 'A Guide to Self-Discipline and Spirituality'. Featuring a peaceful UI and a time-saving 8-week framework.",
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "A New Horizon | The Path to Self-Discipline",
    description: "Access a curated guide to self-discipline and alignment. Your 8-week compass starts here.",
    siteName: "A New Horizon",
    images: [
      {
        url: "/assets/og-preview.png",
        width: 1200,
        height: 630,
        alt: "A New Horizon Social Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A New Horizon | Self-Discipline Sanctuary",
    description: "Escape the noise. Find your framework. Start the 8-week journey.",
    images: ["/assets/og-preview.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodoniModa.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
