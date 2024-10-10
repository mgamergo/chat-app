import { useState } from "react";
import useConversation from "../zustand/useConversations";
import toast from "react-hot-toast";
import axios from "axios";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message: string) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `/api/messages/send/${selectedConversation?._id}`,
        { message }
      );
      const data = res.data;

      if (data.error) throw new Error(data.error);

      setMessages([...messages, data]);
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

  return { loading, sendMessage };
};

export default useSendMessage;
