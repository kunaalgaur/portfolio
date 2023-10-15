'use client';

import React from 'react';
import styles from './ServicesCard.module.css';
import { motion } from 'framer-motion';

type Props = {
    icon: React.ReactNode;
    name: string;
    projects: string;
};

const ServicesCard = ({ icon, name, projects }: Props) => {
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
            {icon}
            <div id={styles.bottom}>
                <span id={styles.name}>{name}</span>
                <span id={styles.projects}>{projects}</span>
            </div>
        </motion.div>
    );
};

export default ServicesCard;
