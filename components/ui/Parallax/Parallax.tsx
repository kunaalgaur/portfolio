import Image from 'next/image';
import styles from './Parallax.module.css';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

type Props = {
    image: string;
    children: React.ReactNode;
};

const Parallax = ({ image, children }: Props) => {
    const [scrollY, setScrollY] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div id={styles.container}>
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: -scrollY * 0.5 }}
                transition={{
                    type: 'spring',
                    damping: 10,
                    stiffness: 100,
                    duration: '0.3s',
                }}
                id={styles.wrapper}>
                <Image
                    src={image}
                    alt="Error loading image."
                    height={0}
                    width={0}
                    style={{ height: '300%', width: '100%' }}
                    id={styles.image}
                    unoptimized
                />
            </motion.div>
            {children}
        </div>
    );
};

export default Parallax;
