import axios from "axios";
import { useAppDispatch } from "../../store";
import {
  hideFeedbackActionCreator,
  showFeedbackActionCreator,
} from "../../store/ui/uiSlice";

export interface UserCredentials {
  username: string;
  password: string;
}

const apiUrl = import.meta.env.VITE_API_URL;

const useUser = () => {
  const dispatch = useAppDispatch();
  const getToken = async (credential: UserCredentials): Promise<string> => {
    try {
      const { data: data } = await axios.post(
        `${apiUrl}/user/login`,
        credential
      );

      return data.token;
    } catch (error) {
      dispatch(
        showFeedbackActionCreator({
          isError: true,
          message: "",
        })
      );

      setTimeout(() => {
        dispatch(hideFeedbackActionCreator());
      }, 1000);

      throw new Error("Wrong Credentials");
    }
  };

  return { getToken };
};

export default useUser;
