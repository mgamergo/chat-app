import { create } from "zustand";

// Define the Conversation type
type Conversation = {
  createdAt: string;
  updatedAt: string;
  fullName: string;
  gender: string;
  profilePic: string;
  username: string;
  _id: string;
  lastMsg: {
    message: string;
    createdAt: string;
    _id: string;
  };
};

// Define the shape of your Zustand store
type ConversationState = {
  selectedConversation: Conversation | null;
  setSelectedConversation: (conversation: Conversation | null) => void;
  messages: string[];
  setMessages: (messages: string[]) => void;
  conversationsList: Conversation[];
  setConversationsList: (conversationsList: Conversation[]) => void;
  displayConversations: Conversation[];
  setDisplayConversations: (displayConversations: Conversation[]) => void;
};

// Create the Zustand store with types
const useConversation = create<ConversationState>((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation: Conversation | null) =>
    set({ selectedConversation }),
  messages: [],
  setMessages: (messages: string[]) => set({ messages }),
  conversationsList: [], // Initialize conversations
  setConversationsList: (conversationsList: Conversation[]) => set({ conversationsList }),
  displayConversations: [],
  setDisplayConversations: (displayConversations: Conversation[]) => set({ displayConversations }),
}));

export default useConversation;
