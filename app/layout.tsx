import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Script from "next/script"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<>

    <html lang="en">
      <Script type="text/javascript" src="assets/fontawesome/js/fontawesome.min.js"></Script>
      <Script type="text/javascript" src="assets/fontawesome/js/solid.min.js"></Script>

      <body className={inter.className}>{children}</body>
    </html>
    </>
  );
}
