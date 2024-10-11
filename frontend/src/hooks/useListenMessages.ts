import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversations";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on('newMessage', (newMessage) => {
        setMessages([...messages, newMessage])
    })

    // Cleanup listener when the component unmounts or socket changes
    return () => {
      socket?.off('newMessage');
    };
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
