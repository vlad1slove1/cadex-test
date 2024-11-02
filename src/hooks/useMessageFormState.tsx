import { useState } from 'react';
import util from '@/lib/util';

type MessageFormState = {
    name: string;
    email: string;
    message: string;
};

type MessageFormErrors = Partial<Record<keyof MessageFormState, string>>;

const useMessageFormState = () => {
    const [formState, setFormState] = useState<MessageFormState>({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState<MessageFormErrors>({});

    const handleChange = (name: keyof MessageFormState, value: string) => {
        setFormState((prev) => ({ ...prev, [name]: value }));
        clearError(name);
    };

    const clearError = (field: keyof MessageFormState) => {
        setErrors((prevErrors) => ({ ...prevErrors, [field]: '' }));
    };

    const validateForm = (): boolean => {
        const validationErrors = getValidationErrors(formState);
        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

    return {
        formState,
        errors,
        handleChange,
        validateForm,
    };
};

const getValidationErrors = (fields: MessageFormState): MessageFormErrors => {
    const errors: MessageFormErrors = {};
    if (!fields.name.trim()) errors.name = 'Name is required';
    if (!fields.email.trim()) errors.email = 'Email is required';
    else if (!util.isValidEmail(fields.email)) errors.email = 'Please enter a valid email';
    if (!fields.message.trim()) errors.message = 'Message is required';
    return errors;
};

export default useMessageFormState;
