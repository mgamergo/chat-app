import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversations";

type MessageProps = {
  _id: string;
  createdAt: string;
  updatedAt: string;
  senderId: string;
  receiverId: string;
  message: string;
};

const Message = ({ _id, senderId, message,createdAt }: MessageProps) => {
  const { authUser } = useAuthContext();
  // @ts-ignore
  const { selectedConversation } = useConversation();

  const fromMe = senderId === authUser?._id;
  const chatClassname = fromMe ? "chat-end" : "chat-start";
  const chatBgColor = fromMe ? "bg-teal-700" : "";
  return (
    <div className={`chat ${chatClassname}`} key={_id}>
      <div className={`chat-bubble text-white pb-2 ${chatBgColor}`}>
        {message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formatTime(createdAt)}
      </div>
    </div>
  );
};

export default Message;


function formatTime(dateString: string) {
  const date = new Date(dateString); // Create a Date object
  const today = new Date(); // Get today's date

  // Check if the date is today
  const isToday =
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate();

  if (isToday) {
    // If it's today, return HH:MM format
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`; // Return formatted time
  } else {
    // If not today, return DD/MM/YYYY format
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`; // Return formatted date
  }
}