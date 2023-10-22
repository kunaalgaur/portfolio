import React from 'react';
import styles from './Menu.module.css';

const Menu = ({ toggle }: { toggle: boolean }) => {
    return (
        <div id={styles.container}>
            <div id={styles.left}>
                <span>Kunal Gaur</span>
                <span>Full-stack web developer.</span>
                <span>All rights reserved. Copyright &copy; 2023-24</span>
            </div>
            <div id={styles.right}></div>
        </div>
    );
};

export default Menu;
