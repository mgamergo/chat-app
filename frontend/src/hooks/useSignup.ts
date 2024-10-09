import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

type SignupProps = {
  fullName: string;
  username: string;
  password: string;
  confirmPassword: string;
  gender: string
};

type UseSignupReturn = {
  loading: boolean;
  signup: (props: SignupProps) => Promise<void>;
};

// Custom hook signature
const useSignup = (): UseSignupReturn => {
  const [loading, setLoading] = useState(false);

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }: SignupProps): Promise<void> => {
    const validation = validateInputs({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });

    if (!validation) return;

    setLoading(true);

    try {
      const res = await axios.post("/api/auth/signup", {
        fullName,
        username,
        password,
        confirmPassword,
        gender,
      });

      const data = res.data;
      if (data.error) {
        throw new Error(data.error);
      }
      return data
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};


export default useSignup

function validateInputs({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}: SignupProps): boolean {
  console.log(fullName, username, password, confirmPassword, gender);
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill all the inputs!!");
    return false;
  }

  if (password.length < 8) {
    toast.error("Password must be atleast 8 characters!!");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords did not match!!");
    return false;
  }

  return true;
}
