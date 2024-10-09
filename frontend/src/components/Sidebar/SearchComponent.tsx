import { Button, Flex, TextField } from "@radix-ui/themes";
import { CiSearch } from "react-icons/ci";
import React from "react";

const SearchComponent = () => {
  return (
      <Flex gap="3" className="w-full mb-3">
        <TextField.Root placeholder="Search" className="w-full transition-colors duration-200" style={{height: '2.75rem'}}>
          <TextField.Slot>
            <CiSearch />
          </TextField.Slot>
        </TextField.Root>
      </Flex>
  );
};

export default SearchComponent;
