import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gandrung Multimedia',
  description: 'Solusi Multimedia Profesional untuk Kebutuhan Audio, Video, Lighting, dan Conference System',
  keywords: 'multimedia, audio visual, sound system, lighting system, video wall, LED screen, conference system, Banyuwangi',
  authors: [{ name: 'Gandrung Media Corp' }],
  openGraph: {
    title: 'Gandrung Media Corp - Solusi Multimedia Audio Visual Profesional',
    description: 'Penyedia solusi multimedia audio visual profesional dengan pengalaman lebih dari 15 tahun.',
    url: 'https://gandrung.co.id',
    siteName: 'Gandrung Media Corp',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gandrung Media Corp',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL('http://localhost:3000'),
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
} 