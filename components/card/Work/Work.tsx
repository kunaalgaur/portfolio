import React from 'react';
import styles from './Work.module.css';

const Work = () => {
    return (
        <div id={styles.container}>
            <div id={styles.header}>
                <span id={styles.left}>Work</span>
                <div id={styles.right}>
                    <span id={styles.heading}>My Beautiful</span>
                    <span id={styles.heading}>Works.</span>
                </div>
            </div>
        </div>
    );
};

export default Work;
