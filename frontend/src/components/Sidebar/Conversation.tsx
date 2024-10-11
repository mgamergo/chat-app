import { Avatar, Flex } from "@radix-ui/themes";
import useConversation from "../../zustand/useConversations";
import { useSocketContext } from "../../context/SocketContext";

type Props = {
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

const Conversation = ({ item }: { item: Props }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === item._id;
  const {onlineUsers} = useSocketContext()
  const isOnline = onlineUsers.includes(item._id);
  
  return (
    <Flex
      align="center"
      className={`m-3 mb-0 w-full h-16 rounded ml-0 px-3 cursor-pointer border-b border-b-gray-800 ${
        !isSelected ? "hover:bg-teal-950" : ""
      } ${isSelected ? "bg-teal-800" : ""}`}
      onClick={() => setSelectedConversation(item)}
    >
      <div className="relative">
        {/* Avatar with online status dot */}
        <Avatar fallback="A" radius="full" size="4" src={item.profilePic} />
        
        {/* Green dot for online status */}
        {isOnline && (
          <span
            className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-gray-900"
            style={{ transform: "translate(50%, 50%)" }} // Position the dot
          ></span>
        )}
      </div>

      <Flex direction="column" className="ml-3 flex-grow">
        <h3 className="font-bold">{item.fullName}</h3>
        <p className="text-sm text-gray-200">{item.lastMsg.message}</p>
      </Flex>
      
      <Flex direction="column" justify="end" className="h-full pb-3">
        <p className="text-xs text-gray-300">
          {item.lastMsg.createdAt ? formatTime(item.lastMsg.createdAt) : ""}
        </p>
      </Flex>
    </Flex>
  );
};

export default Conversation;

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
