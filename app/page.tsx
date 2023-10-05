import Home from '@/components/card/Home/Home';
import Services from '@/components/card/Services/Services';
import Work from '@/components/card/Work/Work';
import React from 'react';

const page = () => {
    return (
        <div>
            <Home />
            <Services />
            <Work />
        </div>
    );
};

export default page;
