'use client';

import { createSlice } from '@reduxjs/toolkit';

// const hirePopup = localStorage?.getItem('hire-popup');

const InitialState: boolean = true;

const popup = createSlice({
    name: 'POPUP REDUCER',
    initialState: InitialState,
    reducers: {
        show_popup: (state) => {
            state = true;
        },
        hide_popup: (state) => {
            return (state = false);
        },
    },
});

export const { show_popup, hide_popup } = popup.actions;
export default popup.reducer;
