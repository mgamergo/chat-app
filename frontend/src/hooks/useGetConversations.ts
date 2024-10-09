import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

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
    const [conversations, setConversations] = useState([])

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true)
            try {
                const res = await axios.get('/api/users')
                const data = res.data

                if (data.error) throw new Error(data.error)

                // GET LATEST MESSAGE
                const conversationsWithLastMsg = await Promise.all(
                  data.map(async (item: Props) => {
                    const lastMsgResponse = await axios.get(`/api/messages/latest/${item._id}`);
                    console.log(lastMsgResponse);
                    
                    const lastMsg = lastMsgResponse.data || {message: '', createdAt: ''};
        
                    return { ...item, lastMsg };
                  })
                );
        
                setConversations(conversationsWithLastMsg);

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

    return {loading, conversations}
}

export default useGetConversations