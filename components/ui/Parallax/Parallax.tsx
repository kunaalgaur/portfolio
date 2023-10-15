import Image from 'next/image';
import styles from './Parallax.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

type Props = {
    image: string;
    children: React.ReactNode;
};

const Parallax = ({ image, children }: Props) => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);
    return (
        <motion.div
            id={styles.container}
            initial={{
                opacity: 0,
                filter: 'blur(5px)',
                y: '100%',
            }}
            whileInView={{
                opacity: 1,
                filter: 'blur(0)',
                y: '0%',
            }}
            viewport={{ once: true }}
            transition={{
                type: 'spring',
                damping: 10,
                stiffness: 100,
                duration: '0.3s',
            }}>
            <motion.div id={styles.wrapper} style={{ y }}>
                <Image
                    src={image}
                    alt="error loading image"
                    height={0}
                    width={0}
                    style={{ height: '200%', width: '100%' }}
                    unoptimized
                    id={styles.image}
                />
                {children}
            </motion.div>
            {children}
        </motion.div>
    );
};

export default Parallax;
