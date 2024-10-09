import { Box } from "@radix-ui/themes";
import { SlOptionsVertical } from "react-icons/sl";

const Options = () => {
  return (
    <div className="self-start relative mt-3">
      <button className="rounded-full hover:bg-gray-600 transition-colors duration-200 cursor-pointer p-3">
          <SlOptionsVertical />
      </button>
    </div>
  );
};

export default Options;
