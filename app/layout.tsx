import { Oswald, Poppins, Sacramento, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';
import Footer from '@/components/shared/Footer/Footer';

const space_grotesk = Space_Grotesk({
    subsets: ['latin', 'latin-ext', 'vietnamese'],
    weight: ['300', '400', '500', '600', '700'],
    style: 'normal',
    variable: '--space-grotesk',
});

const sacramento = Sacramento({
    subsets: ['latin', 'latin-ext'],
    weight: ['400'],
    style: 'normal',
    variable: '--sacramento',
});

const metadata: Metadata = {
    title: 'Kunal Gaur',
    description: 'Kunal Gaur, a full stack web developers portfolio.',
};

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html className={`${sacramento.variable} ${space_grotesk.variable}`}>
            <body suppressHydrationWarning={true}>
                {children}
                <Footer />
            </body>
        </html>
    );
};

export default layout;
