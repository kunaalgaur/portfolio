import Topbar from '@/components/shared/Topbar/Topbar';
import './globals.css';
import Footer from '@/components/shared/Footer/Footer';
import { Homemade_Apple, Poppins, Space_Grotesk } from 'next/font/google';
import { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';

const space_grotesk = Space_Grotesk({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin', 'latin-ext', 'vietnamese'],
    variable: '--space_grotesk',
    style: 'normal',
});

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500', '600'],
    variable: '--poppins',
});

const homemade_apple = Homemade_Apple({
    weight: ['400'],
    style: 'normal',
    subsets: ['latin'],
    variable: '--homemade-apple',
});

export const metadata: Metadata = {
    title: 'Kunal Gaur - Portfolio',
    description: 'Kunal Gaur, a full stack developer portfolio.',
};

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body
                suppressHydrationWarning={true}
                className={`${space_grotesk.variable} ${homemade_apple.variable} ${poppins.variable}`}>
                <Toaster position="top-center" reverseOrder={false} />
                <Topbar />
                {children}
                <Footer />
            </body>
        </html>
    );
};

export default AppLayout;
