import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ACIC-BMU Foundation | Innovating Ideas, Transforming Ventures",
  description:
    "ACIC-BMU Foundation promotes innovation and entrepreneurship through incubation, mentorship, and community programs. Set up by BML Munjal University with support from Atal Innovation Mission, NITI Aayog.",
  keywords: [
    "ACIC",
    "BMU",
    "BML Munjal University",
    "incubation",
    "startups",
    "innovation",
    "entrepreneurship",
    "Atal Innovation Mission",
  ],
  openGraph: {
    title: "ACIC-BMU Foundation | Innovating Ideas, Transforming Ventures",
    description:
      "Empowering innovators from students to women entrepreneurs across India through incubation, mentorship, and community programs.",
    siteName: "ACIC-BMU Foundation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ACIC-BMU Foundation",
    description:
      "Innovating Ideas, Transforming Ventures — 110+ startups supported, 500+ women empowered.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased text-[90%]`}>
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
