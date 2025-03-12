import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MNTN - Mountain Hiking Guide",
  description: "Your guide to mountain hiking adventures",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
