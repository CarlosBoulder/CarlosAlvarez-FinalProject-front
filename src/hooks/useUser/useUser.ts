import axios from "axios";

export interface UserCredentials {
  username: string;
  password: string;
}

const apiUrl = import.meta.env.VITE_API_URL;

const useUser = () => {
  const getToken = async (credential: UserCredentials): Promise<string> => {
    try {
      const { data: data } = await axios.post(
        `${apiUrl}/user/login`,
        credential
      );

      return data.token;
    } catch (error) {
      throw new Error("Wrong Credentials");
    }
  };

  return { getToken };
};

export default useUser;
