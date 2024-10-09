import useGetConversations from '../../hooks/useGetConversations'
import Conversation from './Conversation'

const Conversations = () => {
  const {loading, conversations} = useGetConversations()
  console.log(conversations);
  
  
  return (
    <div className='flex-grow overflow-x-hidden overflow-y-auto'>
      {conversations.map(item => <Conversation item={item} />)}
    </div>
  )
}

export default Conversations
