import { questions } from '@/constants/questions';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FAQCard.module.css';
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci';

const FAQCard = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <motion.div
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
            {questions.map((e, index) => {
                const isOpen = openIndex === index;

                return (
                    <motion.div
                        key={index}
                        id={styles.questionContainer}
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
                        <div id={styles.question}>
                            <span>{e.question}</span>
                            <div onClick={() => handleToggle(index)}>
                                {isOpen ? (
                                    <CiCircleMinus id={styles.icon} />
                                ) : (
                                    <CiCirclePlus id={styles.icon} />
                                )}
                            </div>
                        </div>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.span
                                    id={styles.answer}
                                    initial="collapsed"
                                    animate="open"
                                    exit="collapsed"
                                    variants={{
                                        open: { opacity: 1, height: 'auto' },
                                        collapsed: { opacity: 0, height: 0 },
                                    }}>
                                    {e.answer}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.div>
                );
            })}
        </motion.div>
    );
};

export default FAQCard;
