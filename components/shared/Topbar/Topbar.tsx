'use client';

import React, { useState } from 'react';
import { BsFilterLeft } from 'react-icons/bs';
import styles from './Topbar.module.css';
import Link from 'next/link';
import Menu from './Menu/Menu';

const Topbar = () => {
    const [toggle, setToggle] = useState<boolean>(false);
    return (
        <>
            <div id={styles.button} onClick={() => setToggle(!toggle)}>
                <div
                    id={styles.left}
                    style={{ backgroundColor: toggle ? 'white' : '#a7d129' }}>
                    <BsFilterLeft id={styles.icon} />
                </div>
                <div id={styles.right}>
                    <span id={styles.text}>Kunal</span>
                    <span id={styles.text}>Gaur.</span>
                </div>
            </div>
            <Menu toggle={toggle} />
        </>
    );
};

export default Topbar;
