import { MdEmojiEmotions } from "react-icons/md";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import React, { useRef, useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";
import { Spinner } from "@radix-ui/themes";
import EmojiPicker from "./EmojiPicker";

const SendMessages = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  const [visible, setVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setVisible(false)
    if (!message) return;
    await sendMessage(message.trim());
    setMessage("");
  };

  const handleEmojiSelect = (emoji: string) => {
    setMessage((prevMessage) => prevMessage + emoji);
    inputRef.current?.focus(); // Focus back to the input after selecting an emoji
  };

  return (
    <form onSubmit={handleSubmit} className="px-5 py-2 relative bg-gray-900">
      <div className="w-full flex items-center">
        <div>
          <button type="button" onClick={() => setVisible(!visible)}>
            <MdEmojiEmotions className="text-xl me-2 cursor-pointer" />
          </button>
          <div className="absolute top-[-690%]">
            {visible && <EmojiPicker inputRef={inputRef} onEmojiSelect={handleEmojiSelect} />}
          </div>
        </div>
        <input
          ref={inputRef}
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          className="w-full transition-colors duration-200 bg-gray-800 text-white p-2 rounded-md focus:outline-none"
          style={{ height: "3rem" }}
        />
      </div>
      <button type="submit" className="absolute inset-y-0 end-0 pe-10">
        {!loading ? <PiPaperPlaneRightFill className="text-xl" /> : <Spinner />}
      </button>
    </form>
  );
};

export default SendMessages;
