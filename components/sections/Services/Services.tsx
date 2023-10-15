import React from 'react';
import styles from './Services.module.css';
import ServicesCard from '@/components/card/ServicesCard/ServicesCard';
import { BsTerminal, BsCodeSquare, BsBox } from 'react-icons/bs';

const Services = () => {
    return (
        <div id={styles.container}>
            <div id={styles.background}>
                <div className={styles.children}></div>
                <div className={styles.children}></div>
                <div className={styles.children}></div>
                <div className={styles.children}></div>
            </div>
            <div id={styles.wrapper}>
                <ServicesCard
                    icon={<BsBox className={styles.icon} />}
                    name="UI/UX Design"
                    projects="4 projects"
                />
                <ServicesCard
                    icon={<BsCodeSquare className={styles.icon} />}
                    name="Front-end Development"
                    projects="7 projects"
                />
                <ServicesCard
                    icon={<BsTerminal className={styles.icon} />}
                    name="Back-end Development"
                    projects="4 projects"
                />
            </div>
        </div>
    );
};

export default Services;
