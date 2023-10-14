'use client';

import ContactForm from '@/components/form/ContactForm/ContactForm';
import styles from './Contact.module.css';
import { motion } from 'framer-motion';
import { CiMail, CiPhone } from 'react-icons/ci';

const Contact = () => {
    return (
        <motion.section
            id={styles.container}
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
            <div id={styles.left}>
                <div id={styles.wrapper}>
                    <motion.span
                        id={styles.heading}
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
                        Got a project?
                    </motion.span>
                    <motion.span
                        id={styles.heading}
                        className={styles.heading}
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
                        Lets talk
                    </motion.span>
                </div>
                <div id={styles.wrapper}>
                    <motion.div
                        className={styles.textContainer}
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
                        <CiMail className={styles.icon} />
                        <span className={styles.text}>
                            kunal_gaur@outlook.com
                        </span>
                    </motion.div>
                    <motion.div
                        className={styles.textContainer}
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
                        <CiPhone className={styles.icon} />
                        <span className={styles.text}>+91 7303421656</span>
                    </motion.div>
                </div>
            </div>
            <div id={styles.right}>
                <ContactForm />
            </div>
        </motion.section>
    );
};

export default Contact;
