import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ammar Hairi",
  description: "Ammar Hairi's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col">
        <header>
          <Header />
        </header>

        <main className=" mt-24">{children}</main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
