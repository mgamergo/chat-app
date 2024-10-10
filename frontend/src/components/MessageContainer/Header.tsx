import { Flex, Avatar } from "@radix-ui/themes";
import useConversation from "../../zustand/useConversations";

const Header = () => {
  const {selectedConversation} = useConversation()
  return (
    <Flex
      align="center"
      className="p-2 h-[4.7rem] px-4 cursor-pointer bg-gray-900 border-b border-b-gray-800"
    >
      <Avatar fallback="A" radius="full" size="4" src={selectedConversation?.profilePic} />

      <Flex direction="column" className="ml-3 flex-grow">
        <h3 className="font-bold">{selectedConversation?.fullName}</h3>
      </Flex>
    </Flex>
  );
};

export default Header;


