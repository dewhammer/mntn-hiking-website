import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MNTN - Mountain Hiking Guide",
  description: "Your guide to mountain hiking adventures",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="overflow-x-hidden w-full max-w-[100vw]">{children}</body>
    </html>
  );
}
