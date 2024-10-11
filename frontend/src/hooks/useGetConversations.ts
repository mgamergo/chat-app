import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import useConversation from "../zustand/useConversations"

type Props = {
  createdAt: string,
  updatedAt: string,
  fullName: string,
  gender: string,
  profilePic: string,
  username: string,
  _id: string
}

const useGetConversations = () => {
    const [loading, setLoading] = useState(false)
    const {setConversationsList, setDisplayConversations} = useConversation()

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true)
            try {
                const res = await axios.get('/api/users')
                const data = res.data

                if (data.error) throw new Error(data.error)

                // GET LATEST MESSAGE
                const conversationsWithLastMsg: any = await Promise.all(
                  data.map(async (item: Props) => {
                    const lastMsgResponse = await axios.get(`/api/messages/latest/${item._id}`);
                    
                    const lastMsg = lastMsgResponse.data || {message: '', createdAt: ''};
        
                    return { ...item, lastMsg };
                  })
                );
        
                setDisplayConversations(conversationsWithLastMsg)
                setConversationsList(conversationsWithLastMsg)

            } catch (error: unknown) {
                if (error instanceof Error) {
                  toast.error(error.message);
                } else {
                  toast.error("An unexpected error occurred");
                }
              } finally {
                setLoading(false);
              }
        }

        getConversations()
    }, [])

    return {loading}
}

export default useGetConversations