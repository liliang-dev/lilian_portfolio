import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const penScript = localFont({
  src: "./fonts/NanumPenScript.ttf",
  variable: "--font-pen",
  weight: "100 900",
});

const grandStander = localFont({
  src: "./fonts/Grandstander.ttf",
  variable: "--font-grand",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Lilian Garrido • Fullstack Developer",
  description: "Fullstack developer living in Toulouse, France."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${penScript.variable} ${grandStander.variable} antialiased h-full bg-background text-foreground font-pen`}>
        {children}
      </body>
    </html>
  );
}
