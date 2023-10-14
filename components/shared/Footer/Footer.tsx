'use client';

import { socials } from '@/constants/social';
import styles from './Footer.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <div id={styles.container}>
            <motion.div
                id={styles.outerWrapper}
                initial={{
                    opacity: 0,
                    filter: 'blur(10px)',
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
                    id={styles.innerWrapper}
                    initial={{
                        opacity: 0,
                        filter: 'blur(10px)',
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
                    <div id={styles.wrapper}>
                        <motion.span
                            className={styles.text}
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
                            Kunal Gaur &copy; 2023
                        </motion.span>
                        <motion.span
                            className={styles.text}
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
                            All rights reserved.
                        </motion.span>
                        <div id={styles.socials}>
                            {socials.map((social, index) => {
                                return (
                                    <motion.a
                                        key={index}
                                        href={social.link}
                                        target="__blank"
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
                                            delay: index / 4,
                                        }}>
                                        <Image
                                            src={social.image}
                                            alt={social.name}
                                            height={30}
                                            width={30}
                                            unoptimized
                                        />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Footer;
