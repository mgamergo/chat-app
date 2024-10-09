import { Flex, Avatar } from "@radix-ui/themes";
import React from "react";

const Header = () => {
  return (
    <Flex
      align="center"
      className="p-2 h-[4.7rem] px-4 cursor-pointer bg-gray-900 border-b border-b-gray-800"
    >
      <Avatar fallback="A" radius="full" size="4" />

      <Flex direction="column" className="ml-3 flex-grow">
        <h3 className="font-bold">Daisy Doe</h3>
      </Flex>
    </Flex>
  );
};

export default Header;


