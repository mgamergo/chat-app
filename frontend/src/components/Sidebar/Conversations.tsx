import { Skeleton } from "@radix-ui/themes";
import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  console.log(conversations);

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
          {conversations.map((item) => (
            <Conversation item={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default Conversations;
