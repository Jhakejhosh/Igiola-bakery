import type { Metadata } from "next";
import { Poppins, Lato, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lato = Lato({
  weight:['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-lato'
});

const playFair = Playfair_Display({
  subsets:['latin'],
  variable: '--font-play'
})

export const metadata: Metadata = {
  title: "British Butter Bakery",
  description: "Fresh, Soft & Nutritious",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${playFair.variable} antialiased  tracking-widest font-lato font-light
          text-sm`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
