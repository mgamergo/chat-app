import { TextField } from '@radix-ui/themes'
import { MdEmojiEmotions } from "react-icons/md";
import { PiPaperPlaneRightFill } from "react-icons/pi";


const SendMessages = () => {
  return (
    <div className='px-5 py-2 relative bg-gray-900'>
      <TextField.Root placeholder="Type a message" className="w-full transition-colors duration-200" style={{height: '3rem'}}>
          <TextField.Slot>
            <MdEmojiEmotions className='text-xl' />
          </TextField.Slot>
        </TextField.Root>
        <button className='absolute inset-y-0 end-0 pe-10'>
            <PiPaperPlaneRightFill className='text-xl' />
        </button>
    </div>
  )
}

export default SendMessages
