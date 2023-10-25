import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div>
            <div></div>
            <div>
                <Image
                    src="/setup.jpg"
                    alt="Error loading image"
                    height={200}
                    width={200}
                />
            </div>
            <div></div>
        </div>
    );
};

export default page;
