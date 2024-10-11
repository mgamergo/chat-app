import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io, { Socket } from 'socket.io-client';

// Define types for the context value
interface SocketContextType {
  socket: Socket | null;
  onlineUsers: string[];  // Assuming onlineUsers is an array of userIds or user data
}

// Create the context with default values
const SocketContext = createContext<SocketContextType>({
  socket: null,
  onlineUsers: [],
});

export const useSocketContext = (): SocketContextType => {
  return useContext(SocketContext);
};

// Define the provider component
export const SocketContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const { authUser } = useAuthContext();

  // @ts-ignore
  useEffect(() => {
    if (authUser) {
      const socketInstance = io('https://chat-app-q94o.onrender.com', {
        query: {
          userId: authUser._id,
        },
      });

      setSocket(socketInstance);

      socketInstance.on('getOnlineUsers', (users: string[]) => {
        setOnlineUsers(users);
      });

      return () => socketInstance.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
