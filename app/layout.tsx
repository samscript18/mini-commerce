import type { Metadata } from 'next';
import Providers from '@/lib/providers/providers';
import { sora } from '@/lib/utils/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mini-Commerce',
  description:
    'A E-commerce shop where visitors can browse products, manage a cart and checkout their orders',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
