import type { Metadata } from "next";
import { Baloo_2, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baloo2 = Baloo_2({
  variable: "--font-baloo2",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bowl Diaries",
  description: "Fresh, flavorful bowls crafted with care.",
  icons: {
    icon: "/LOGO_1 1.ico",
    shortcut: "/LOGO_1 1.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${baloo2.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fbf3df] text-zinc-900">
        {children}
      </body>
    </html>
  );
}
