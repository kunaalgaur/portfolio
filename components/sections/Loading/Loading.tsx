import React from 'react';
import animation from './animation.json';
import Lottie from 'lottie-react';
import styles from './Loading.module.css';

const Loading = () => {
    return (
        <div id={styles.container}>
            <div id={styles.wrapper}>
                <Lottie animationData={animation} loop={true} />
            </div>
        </div>
    );
};

export default Loading;
