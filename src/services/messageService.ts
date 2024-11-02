import apiRequest from '@/app/api/apiRequest';
import { API_BASE_URL } from '@/lib/constants';

export type MessagePayload = {
    name: string;
    email: string;
    message: string;
};

const API_URL = `${API_BASE_URL}/messages`;

export const sendMessage = async (payload: MessagePayload) => {
    return await apiRequest<MessagePayload, { message: string }>(API_URL, {
        method: 'POST',
        body: payload,
    });
};
