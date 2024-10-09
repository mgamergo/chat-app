import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import axios from "axios";

type LoginProps = {
  username: string;
  password: string;
};

type UseLoginReturn = {
  loading: boolean;
  login: (props: LoginProps) => Promise<void>;
};

const useLogin = (): UseLoginReturn => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async ({ username, password }: LoginProps) => {
    setLoading(true);

    try {
      const success = validateInputs({ username, password });

      if (!success) return;

      const res = await axios.post("/api/auth/login", { username, password });

      const data = res.data;

      if (data.error) throw new Error(data.error);

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error: unknown) {
        // Check if it's an Axios error
        if (axios.isAxiosError(error)) {
          const serverError = error.response?.data?.error || "Server error occurred";
          toast.error(serverError);  // Display the error message from the server
        } else if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error("An unexpected error occurred");
        }
    } finally {
      setLoading(false);
    }
  };

  return {loading, login}
};

export default useLogin;

function validateInputs({ username, password }: LoginProps): boolean {
  if (!username || !password) {
    toast.error("Please fill all the inputs!!");
    return false;
  }

  return true;
}
