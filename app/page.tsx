import Contact from '@/components/sections/Contact/Contact';
import FAQ from '@/components/sections/FAQ/FAQ';
import Home from '@/components/sections/Home/Home';
import Journal from '@/components/sections/Journal/Journal';
import Services from '@/components/sections/Services/Services';
import Work from '@/components/sections/Work/Work';

const page = () => {
    return (
        <>
            <Home />
            <Services />
            <Work />
            <Journal />
            <Contact />
            <FAQ />
        </>
    );
};

export default page;
