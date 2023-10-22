'use client';

import React from 'react';
import { BsXLg } from 'react-icons/bs';
import styles from './Hire.module.css';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { hide_popup } from '@/redux/reducers/popupReducer';

const Hire = () => {
    const dispatch = useAppDispatch();
    const toggle = useAppSelector((state) => state.popup);
    return (
        <div
            id={styles.container}
            style={{ display: toggle ? 'grid' : 'none' }}>
            <div id={styles.containerWrapper}>
                <div
                    id={styles.background}
                    onClick={() => {
                        // localStorage?.setItem('hire-popup', 'shown');
                        dispatch(hide_popup());
                    }}></div>
                <div id={styles.wrapper}>
                    <div id={styles.top}>
                        <span id={styles.heading}>Hello there!</span>
                        <BsXLg
                            onClick={() => {
                                // localStorage?.setItem('hire-popup', 'shown');
                                dispatch(hide_popup());
                            }}
                            id={styles.icon}
                        />
                    </div>
                    <span id={styles.text}>
                        I am actively looking for a role of{' '}
                        <span className={styles.highlightedText}>
                            Full-stack developer
                        </span>{' '}
                        and can join{' '}
                        <span className={styles.highlightedText}>
                            immediately
                        </span>{' '}
                        So if you have an open position or a reference then
                        please do me a favour.
                    </span>
                    <a
                        href="https://kunalgaur.vercel.app/Kunal-Gaur.pdf"
                        id={styles.button}
                        target="__blank">
                        Download resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hire;
