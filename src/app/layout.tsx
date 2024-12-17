import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Column } from "./_components/Column";
import { Section } from "./_components/Section";
import { Profile } from "./_components/Profile";
import { MainMenu } from "./_components/MainMenu";
import { Contacts } from "./_components/Contacts";

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
  description: "Fullstack developer living in Toulouse, France.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${penScript.variable} ${grandStander.variable} antialiased h-full bg-background text-foreground font-pen`}
      >
        <main className="mx-auto min-h-screen max-w-screen-xl font-pen">
          <div className="lg:flex min-h-screen lg:justify-center">
            <Column className="lg:sticky lg:top-0 lg:flex lg:justify-between py-16 px-10 lg:px-24 lg:max-h-screen lg:w-1/2">
              <Section className="lg:flex lg:flex-col lg:justify-between lg:max-h-screen max-sm:text-center">
                <Profile />
                <MainMenu className="flex flex-col text-3xl gap-3 py-10" />
                <Contacts className="flex flex-row max-sm:justify-center gap-2" />
              </Section>
            </Column>
            <Column className="flex-1 h-full lg:w-1/2 py-16 px-10">
              <Section>
                {children}
              </Section>
            </Column>
          </div>
        </main>
      </body>
    </html>
  );
}
