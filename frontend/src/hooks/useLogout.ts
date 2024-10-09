import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"
import toast from "react-hot-toast";
import axios from 'axios';

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const logout = async () => {
        setLoading(true)

        try {
            const res = await axios.post('/api/auth/logout')
            const data = res.data
            if (data.error) {
                throw new Error(data.error)
            }

            localStorage.removeItem('chat-user')
            setAuthUser(null)

        } catch (error: unknown) {
            if (error instanceof Error) {
              toast.error(error.message);
            } else {
              toast.error("An unexpected error occurred");
            }
          } finally {
            setLoading(false)
        }
    }

    return {loading, logout}

}

export default useLogout