import type { Metadata } from "next";
import { Switzer } from 'next/font/local';
import "./globals.css";
import { Provider } from "./provider";

const switzer = Switzer({
  src: [
    {
      path: './fonts/Switzer-Variable.woff2',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: './fonts/Switzer-Italic.woff2',
      weight: '100 900',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-switzer',
  fallback: ['system-ui', 'sans-serif'],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "James St. James",
  description: "Advocate, Writer, and Public Speaker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={switzer.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
