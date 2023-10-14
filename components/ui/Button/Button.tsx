import React from 'react';
import styles from './Button.module.css';
import { motion } from 'framer-motion';

type Props = {
    text: string;
};

const Button = ({ text }: Props) => {
    return (
        <motion.button
            type="submit"
            id={styles.button}
            initial={{
                opacity: 0,
                filter: 'blur(10px)',
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
            {text}
        </motion.button>
    );
};

export default Button;
