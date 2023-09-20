import { Oswald, Poppins } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';
import Topbar from '@/components/shared/Topbar/Topbar';
import Footer from '@/components/shared/Footer/Footer';

const poppins = Poppins({
  subsets: ['devanagari', 'latin', 'latin-ext'],
  weight: ['300', '400', '500', '600'],
  style: 'normal',
  variable: '--poppins',
});

const oswald = Oswald({
  subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese'],
  weight: ['300', '400', '500', '600'],
  style: 'normal',
  variable: '--oswald',
});

const metadata: Metadata = {
  title: 'Kunal Gaur',
  description: 'Kunal Gaur, a full stack web developers portfolio.',
  applicationName: 'portfolio',
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className={`${poppins.variable} ${oswald.variable}`}>
      <body suppressHydrationWarning={true}>
        <Topbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default layout;
