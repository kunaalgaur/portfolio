'use client';

import React from 'react';
import styles from './Textarea.module.css';
import { motion } from 'framer-motion';

type Props = {
    text: string;
    id?: string;
    name?: string;
    value: string;
    defaultValue: string;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
};

const Textarea = ({ text, id, name, onChange, value, defaultValue }: Props) => {
    return (
        <label htmlFor={name} id={styles.container}>
            <motion.span
                id={styles.text}
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
                {text}
            </motion.span>
            <motion.textarea
                name={name}
                id={id}
                className={styles.textarea}
                onChange={onChange}
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
                }}
                defaultValue={defaultValue}></motion.textarea>
        </label>
    );
};

export default Textarea;
