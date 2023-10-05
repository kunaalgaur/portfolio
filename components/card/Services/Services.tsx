import React from 'react';
import styles from './Services.module.css';
import Card from './Card/Card';
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
                <Card
                    name="UI/UX design"
                    projects="4 repositories"
                    icon={<BsBox />}
                />
                <Card
                    name="Front end development"
                    projects="4 repositories"
                    icon={<BsCodeSquare />}
                />
                <Card
                    name="Backend end development"
                    projects="2 repositories"
                    icon={<BsTerminal />}
                />
            </div>
        </div>
    );
};

export default Services;
