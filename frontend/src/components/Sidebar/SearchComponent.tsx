import { Flex, TextField } from "@radix-ui/themes";
import { CiSearch } from "react-icons/ci";
import useConversation from "../../zustand/useConversations";
import React, { useState, useEffect } from "react";

const SearchComponent = () => {
  const [searchValue, setSearchValue] = useState("");
  const { conversationsList, setDisplayConversations } = useConversation();

  useEffect(() => {
    // Filter conversations based on search term
    if (searchValue === "") {
      // If search is empty, display all conversations
      setDisplayConversations(conversationsList);
    } else {
      const filteredConversations = conversationsList.filter((conversation) =>
        conversation.fullName.toLowerCase().includes(searchValue.toLowerCase())
      );
      setDisplayConversations(filteredConversations);
    }
  }, [searchValue, conversationsList, setDisplayConversations]);

  return (
    <Flex gap="3" className="w-full mb-3">
      <TextField.Root
        placeholder="Search"
        className="w-full transition-colors duration-200"
        style={{ height: "2.75rem" }}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      >
        <TextField.Slot>
          <CiSearch />
        </TextField.Slot>
      </TextField.Root>
    </Flex>
  );
};

export default SearchComponent;
