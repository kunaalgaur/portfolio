'use client';

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './JournalCard.module.css';
import Parallax from '@/components/ui/Parallax/Parallax';

type Props = {
    chip: string;
    heading: string;
    image: string;
    text: string;
    link: string;
};

const JournalCard = ({ chip, heading, image, text, link }: Props) => {
    return (
        <Parallax image={image}>
            <Link href={link} id={styles.link}>
                <div id={styles.top}>
                    <span id={styles.chip}>{chip}</span>
                    <span id={styles.heading}>{heading}</span>
                </div>
                <span id={styles.text}>{text}</span>
            </Link>
        </Parallax>
    );
};

export default JournalCard;
