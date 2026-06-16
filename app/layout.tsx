import type {Metadata} from 'next';
import { Playfair_Display, Poppins } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Vaishali Makeover - Luxury Beauty & Bridal Makeover',
  description: 'Premium luxury makeup, hair styling & beauty transformations by Vaishali Makeover.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable} scroll-smooth`}>
      <body className="font-sans bg-ivory text-dark antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
