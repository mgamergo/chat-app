import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversations";
import toast from "react-hot-toast";
import axios from "axios";

type Message = {
    _id: string;
    createdAt: string;
    updatedAt: string;
    senderId: string;
    receiverId: string;
    message: string;
}

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const { setMessages, messages, selectedConversation } = useConversation(); // Ensure messages are destructured here

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);

            try {
                const res = await axios.get(`/api/messages/${selectedConversation?._id}`);
                const data: Message[] | { error: string } = res.data;

                if ('error' in data) throw new Error(data.error); // Improved error checking

                if (Array.isArray(data) && data.length > 0) {
                    // @ts-ignore
                    setMessages(data);
                } else {
                    setMessages([]); // Reset if no messages are found
                }
            } catch (error: unknown) {
                if (error instanceof Error) {
                    toast.error(error.message);
                } else {
                    toast.error("An unexpected error occurred");
                }
            } finally {
                setLoading(false);
            }
        };

        if (selectedConversation?._id) {
            getMessages();
        }
    }, [selectedConversation?._id, setMessages]);

    return { loading, messages }; // Return messages directly from the hook
};

export default useGetMessages;
