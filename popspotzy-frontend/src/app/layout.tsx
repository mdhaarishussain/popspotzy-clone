import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Popspotzy - AI Marketing Strategy Platform',
  description: 'Generate industry-aware marketing strategies from a single AI prompt',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body>{children}</body>
    </html>
  );
}