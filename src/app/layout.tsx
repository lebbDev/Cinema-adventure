import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import { NextUIProvider } from "@nextui-org/react";
import {Providers} from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cinema adventure - энциклопедия фильмов"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru"  className='dark'>
      <body className={inter.className}>
        <Providers>
        <main>
          <Header/>
          {children}
        </main>
        </Providers>
      </body>
    </html>
  );
}
