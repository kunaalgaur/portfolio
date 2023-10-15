'use client';

import Input from '@/components/ui/Input/Input';
import Textarea from '@/components/ui/Textarea/Textarea';
import { useState } from 'react';
import styles from './ContactForm.module.css';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button/Button';
import { useSendMessage } from '@/hooks/useSendMessage';

const ContactForm = () => {
    const interests = [
        'Web design',
        'Web App Development',
        'UI/UX development',
    ];
    const [interest, setInterest] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleSubmit = useSendMessage({
        interest: interest,
        name: name,
        email: email,
        message: message,
    });
    return (
        <motion.form
            id={styles.container}
            onSubmit={handleSubmit}
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
            <motion.span
                id={styles.heading}
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
                I am interested in...
            </motion.span>
            <div id={styles.top}>
                {interests.map((e, index) => {
                    return (
                        <motion.span
                            onClick={() => setInterest(e)}
                            className={styles.chip}
                            key={index}
                            style={{
                                color: interest === e ? '#a7d129' : 'white',
                                border:
                                    interest === e
                                        ? '2px solid #a7d129'
                                        : '2px solid white',
                                transitionDuration: '0.2s',
                            }}
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
                                delay: index / 4,
                            }}>
                            {e}
                        </motion.span>
                    );
                })}
            </div>
            <Input
                text="Please enter your name"
                type="text"
                placeholder="eg: John Doe"
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
            <Input
                text="Please enter your email"
                type="text"
                placeholder="eg: johndoe@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
            />
            <Textarea
                id="textarea"
                name="textarea"
                text="Please write you message."
                onChange={(e) => setMessage(e.target.value)}
                defaultValue="eg: Hey Kunal, Nice work man, I would like to hire you."
                value=""
            />
            <Button text="Send Message" />
        </motion.form>
    );
};

export default ContactForm;
