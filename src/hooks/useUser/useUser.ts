import axios from "axios";

export interface UserCredentials {
  username: string;
  password: string;
}

const apiUrl = import.meta.env.VITE_API_URL;

const useUser = (credential: UserCredentials) => {
  const getToken = async (): Promise<string> => {
    const { data: data } = await axios.post(`${apiUrl}/user/login`, credential);
    return data.token;
  };

  return { getToken };
};

export default useUser;
