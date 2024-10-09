import { Avatar, Flex } from '@radix-ui/themes'

const Conversation = () => {
  return (
    <Flex align="center" className='m-2 w-full h-16 rounded ml-0 px-3 cursor-pointer border-b border-b-gray-800 mb-3'>
      <Avatar fallback="A" radius='full' size="4" />

      <Flex direction="column" className='ml-3 flex-grow'>
        <h3 className='font-bold'>Daisy Doe</h3>
        <p className='text-sm text-gray-200'>Hey John how are you?</p>
      </Flex>
      <Flex direction="column" justify="end" className='h-full pb-3'>
        <p className='text-xs text-gray-300'>12 : 03</p>
      </Flex>
    </Flex>
  )
}

export default Conversation
