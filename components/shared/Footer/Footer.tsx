import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div id={styles.container}>
            <div id={styles.outerWrapper}>
                <div id={styles.innerWrapper}>
                    <span id={styles.text}>Kunal</span>
                    <span id={styles.text}>
                        Gaur<span id={styles.textSpan}>.</span>
                    </span>
                    <div id={styles.socialLinks}></div>
                    <span id={styles.copyright}>
                        &copy; 2023 Kunal. All rights reserved
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
