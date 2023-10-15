'use client';

import Image from 'next/image';
import styles from './TestimonyCard.module.css';
import { motion } from 'framer-motion';

type Props = {
    name: string;
    position: string;
    message: string;
};

const TestimonyCard = ({ name, message, position }: Props) => {
    return (
        <motion.div
            id={styles.container}
            initial={{
                opacity: 0,
                filter: 'blur(5px)',
            }}
            whileInView={{
                opacity: 1,
                filter: 'blur(0)',
            }}
            viewport={{ once: true }}
            transition={{
                type: 'spring',
                damping: 10,
                stiffness: 100,
                duration: '0.3s',
            }}>
            <motion.div
                id={styles.top}
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
                <Image
                    src="/people.jpg"
                    alt="Error loading image"
                    height={50}
                    width={50}
                    id={styles.image}
                />
                <div id={styles.right}>
                    <span id={styles.name}>{name}</span>
                    <span id={styles.position}>{position}</span>
                </div>
            </motion.div>
            <motion.span
                id={styles.bottom}
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
                {message}
            </motion.span>
        </motion.div>
    );
};

export default TestimonyCard;
