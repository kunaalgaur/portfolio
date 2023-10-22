import React from 'react';
import styles from './Menu.module.css';
import { motion } from 'framer-motion';

const Menu = ({ toggle }: { toggle: boolean }) => {
    return (
        <motion.div
            id={styles.container}
            initial={{ x: '-100%' }}
            animate={{
                x: toggle ? '0' : '-100%',
                borderTopRightRadius: toggle ? '0%' : '100%',
                borderBottomRightRadius: toggle ? '0%' : '100%',
            }}
            transition={{
                type: 'spring',
                damping: 20,
                stiffness: 100,
                duration: '0.3s',
            }}>
            <div id={styles.left}>
                <span id={styles.heading}>Kunal Gaur</span>
                <span id={styles.text}>Full-stack web developer.</span>
                <span id={styles.text}>
                    All rights reserved. Copyright &copy; 2023-24
                </span>
            </div>
            <div id={styles.right}></div>
        </motion.div>
    );
};

export default Menu;
