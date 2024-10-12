import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

interface EmojiPickerProps {
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  onEmojiSelect: (emoji: string) => void;
}

function EmojiPicker({ onEmojiSelect }: EmojiPickerProps) {
  const handleEmojiClick = (emoji: any) => {
    onEmojiSelect(emoji.native); // `emoji.native` gives the emoji character
  };

  return <Picker data={data} onEmojiSelect={handleEmojiClick} />;
}

export default EmojiPicker;
