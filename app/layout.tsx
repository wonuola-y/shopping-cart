import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Home from "./Home";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce by Wonuola",
  description: "Ecommerce page by Wonuola",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Home />
      </body>
    </html>
  );
}
