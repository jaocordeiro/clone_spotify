import './globals.css';
import { Inter } from 'next/font/google';

export const metadata = {
  title: 'Spotify',
  description: 'Listen to your favorite songs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-sfBlack">{children}</body>
    </html>
  );
}
