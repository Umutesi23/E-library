import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BlogContextProvider } from "@/lib/BlogContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Library",
  description: "Elibrary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BlogContextProvider>{children}</BlogContextProvider>
      </body>
    </html>
  );
}
