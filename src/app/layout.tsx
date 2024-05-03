import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RootRedux from "./RootRedux";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kino izlovchi",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-base-200 shadow-md">
          <Navbar />
        </header>
        <main className="max-container">
          <RootRedux>
            {children}
            <Toaster position="top-center" reverseOrder={false} />
          </RootRedux>
        </main>
        <footer className="bg-base-300 ">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
