import { Skeleton } from "@radix-ui/themes";
import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

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

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  return (
    <>
      {loading && (
      <div>
        <Skeleton height="4rem" style={{marginBottom: "8px"}}></Skeleton>
        <Skeleton height="4rem" style={{marginBottom: "8px"}}></Skeleton>
        <Skeleton height="4rem" style={{marginBottom: "8px"}}></Skeleton>
        <Skeleton height="4rem" style={{marginBottom: "8px"}}></Skeleton>
        <Skeleton height="4rem" style={{marginBottom: "8px"}}></Skeleton>
        <Skeleton height="4rem" style={{marginBottom: "8px"}}></Skeleton>
        <Skeleton height="4rem" style={{marginBottom: "8px"}}></Skeleton>
      </div>
      )}
      {!loading && (
        <div className="flex-grow overflow-x-hidden overflow-y-auto">
          {conversations.map((item: Props) => (
            <Conversation item={item} key={item._id} />
          ))}
        </div>
      )}
    </>
  );
};

export default Conversations;
