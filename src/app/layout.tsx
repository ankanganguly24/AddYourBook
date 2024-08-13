import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Add Your Book",
  description: "Add your books wishlist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header title="Add Your Book" />
        <main className="flex-grow container mx-auto p-4">{children}</main>
        <Footer year={new Date().getFullYear()} text="Add Your Book" />
      </body>
    </html>
  );
}
