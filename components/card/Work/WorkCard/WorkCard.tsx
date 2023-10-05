import Image from 'next/image';
import React from 'react';

type props = {
    name: string;
    text: string;
    image: string;
};

const WorkCard = ({ name, text, image }: props) => {
    return (
        <div>
            <div>
                <Image
                    src={image}
                    alt=""
                    height={0}
                    width={0}
                    style={{ height: '100%', width: '100%' }}
                    unoptimized
                />
            </div>
            <span>{name}</span>
            <span>{text}</span>
        </div>
    );
};

export default WorkCard;
