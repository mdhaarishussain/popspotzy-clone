"use client";
import "./globals.css";

export default function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <body>{children}</body>
  );
}
