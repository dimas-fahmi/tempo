"use client";

import { Inter_Font, Fjalla_One_Font } from "@/src/ui/fonts";
import "@/src/ui/css/globals.tailwind.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Inter_Font.variable} ${Fjalla_One_Font.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
