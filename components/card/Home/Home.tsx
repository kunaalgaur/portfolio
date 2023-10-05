import React from 'react';
import styles from './Home.module.css';
import Image from 'next/image';

const Home = () => {
    return (
        <div id={styles.container}>
            <Image
                src="/setup.jpg"
                alt=""
                height={300}
                width={300}
                unoptimized
                id={styles.image}
            />
            <div id={styles.header}>
                <span id={styles.heading}>Hey, It's Kunal Gaur</span>
                <div id={styles.blur}></div>
            </div>
            <div id={styles.header}>
                <span id={styles.heading}>Full stack web developer.</span>
                <div id={styles.blur}></div>
            </div>
            <span id={styles.text}>
                I thrive to make interactive web design and smooth user
                experience.
            </span>
            <span id={styles.text}>I am based in Dehradun, India</span>
            <span id={styles.button}>Hire me!</span>
        </div>
    );
};

export default Home;
