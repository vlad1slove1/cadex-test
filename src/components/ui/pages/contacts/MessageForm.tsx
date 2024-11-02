'use client';

import React, { FormEvent, useState } from 'react';
import useMessageFormState from '@/hooks/useMessageFormState';
import { Input, Textarea } from '@nextui-org/input';
import { Email, User } from '@/components/Icons';
import { sendMessage } from '@/services/messageService';
import { Button } from '@nextui-org/button';

const MessageForm: React.FC<{ onSuccess: () => void }> = ({ onSuccess }) => {
    const { formState, errors, handleChange, validateForm } = useMessageFormState();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);
        try {
            const response = await sendMessage(formState);
            console.log(response.message);
            if (response.message) {
                onSuccess();
            }
        } catch (error) {
            console.error(`Message post error: ${error}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="p-6 max-w-md max-md:mx-auto">
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="mb-8">
                    <h3 className="text-center text-3xl font-extrabold">Only CTA on the page</h3>
                </div>

                <Input
                    label="Name"
                    name="name"
                    type="text"
                    value={formState.name}
                    onValueChange={(value) => handleChange('name', value)}
                    isRequired
                    isInvalid={!!errors.name}
                    errorMessage={errors.name ?? ''}
                    className="w-full text-sm"
                    endContent={<User color="black" />}
                />

                <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onValueChange={(value) => handleChange('email', value)}
                    isRequired
                    isInvalid={!!errors.email}
                    errorMessage={errors.email ?? ''}
                    className="w-full text-sm"
                    endContent={React.createElement(Email, { color: 'black' })}
                />

                <Textarea
                    label="Message"
                    name="message"
                    value={formState.message}
                    onValueChange={(value) => handleChange('message', value)}
                    isRequired
                    isInvalid={!!errors.message}
                    errorMessage={errors.message ?? ''}
                    className="w-full text-sm"
                />

                <Button
                    type="submit"
                    isLoading={isSubmitting}
                    color="primary"
                    size="lg"
                    className="w-full !mt-8"
                >
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default MessageForm;
