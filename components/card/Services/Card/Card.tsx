import React from 'react';
import styles from './Card.module.css';

const Card = ({
    name,
    projects,
    icon,
}: {
    name: string;
    projects: string;
    icon: React.ReactNode;
}) => {
    return (
        <div id={styles.container}>
            <div id={styles.icon}>{icon}</div>
            <div id={styles.wrapper}>
                <span id={styles.name}>{name}</span>
                <span id={styles.project}>{projects}</span>
            </div>
        </div>
    );
};

export default Card;
