import { Poppins } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';
import Topbar from '@/components/shared/Topbar/Topbar';
import Bottombar from '@/components/shared/Bottombar/Bottombar';

const poppins = Poppins({
  subsets: ['devanagari', 'latin', 'latin-ext'],
  weight: ['300', '400', '500', '600'],
  style: 'normal',
});

const metadata: Metadata = {
  title: 'Kunal Gaur',
  description: 'Kunal Gaur, a full stack web developers portfolio.',
  applicationName: 'portfolio',
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className={poppins.className}>
      <body suppressHydrationWarning={true}>
        <Topbar />
        {children}
        <Bottombar />
      </body>
    </html>
  );
};

export default layout;
