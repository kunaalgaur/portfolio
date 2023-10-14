import { FormEvent } from 'react';
import toast from 'react-hot-toast';

const isEmailValid = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

type Params = {
    interest: string;
    name: string;
    email: string;
    message: string;
};

export const useSendMessage = ({ interest, name, email, message }: Params) => {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!name) {
            toast.error('Name is a required field.');
            return;
        }

        if (!email) {
            toast.error('Email is a required field.');
            return;
        }

        if (!isEmailValid(email)) {
            toast.error('Please enter a valid email.');
            return;
        }

        if (!message) {
            toast.error('Message is a required field.');
            return;
        }

        try {
            toast.success(
                'Mail sent successfully, I will shortly get back to you.'
            );
        } catch (error) {
            toast.error('An unknown error occurred');
        }
    };

    return handleSubmit;
};
