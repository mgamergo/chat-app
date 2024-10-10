import { useEffect } from 'react';
import useConversation from '../../zustand/useConversations';
import Header from './Header';
import Messages from './Messages';
import SendMessages from './SendMessages';
import { TiMessages } from 'react-icons/ti';

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 </p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversation()

  useEffect(() => {

    // Cleanup function to reset state on unmounting
    return () => setSelectedConversation(null)
  }, [setSelectedConversation])

  return (
    <div className='w-full h-full flex flex-col'>
      {selectedConversation ? (
        <>
          <Header />
          <Messages />
          <SendMessages />
        </>
      ) : (
        <NoChatSelected />
      )}
    </div>
  );
}

export default MessageContainer;
