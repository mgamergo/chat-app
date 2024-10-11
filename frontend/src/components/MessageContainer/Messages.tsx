import { useEffect, useRef } from "react";
import wp14199750bw from "../../assets/wp14199750bw.webp";
import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";
import MessageSkeleton from "./MessageSkelton";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  const lastMsgRef = useRef<HTMLDivElement>(null);
  useListenMessages()

  useEffect(() => {
    // @ts-ignore
    setTimeout(() => {lastMsgRef.current?.scrollIntoView({behaviour: 'smooth'})}, 100)
  }, [messages])
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${wp14199750bw})`,
          opacity: "0.2",
        }}
      />
      <div className="absolute inset-0 overflow-y-auto">
        <div className="min-h-full p-4">

          {!loading && messages.length > 0 && messages.map(message => (
            // @ts-ignore
            <div key={message._id} ref={lastMsgRef}>
              {/* @ts-ignore */}
              <Message
              // @ts-ignore
              _id={message._id}
              // @ts-ignore
              senderId={message.senderId}
              // @ts-ignore
              message={message.message}
              // @ts-ignore
                createdAt={message.createdAt}
              />
            </div>
          ))}

          {loading &&
            [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
          
          {!loading && messages.length === 0 && (
            <p className="text-center">
              Send a message to start the conversation
            </p>
          )}

          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Messages;
