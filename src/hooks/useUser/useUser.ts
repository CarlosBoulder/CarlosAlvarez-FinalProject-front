import axios from "axios";
import { useAppDispatch } from "../../store";
import {
  hideLoadingActionCreator,
  showFeedbackActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";

export interface UserCredentials {
  username: string;
  password: string;
}

const apiUrl = import.meta.env.VITE_API_URL;

const useUser = () => {
  const dispatch = useAppDispatch();
  const getToken = async (
    credential: UserCredentials
  ): Promise<string | undefined> => {
    dispatch(showLoadingActionCreator());

    try {
      const { data: data } = await axios.post(
        `${apiUrl}/user/login`,
        credential
      );

      dispatch(hideLoadingActionCreator());

      return data.token;
    } catch (error) {
      dispatch(hideLoadingActionCreator());

      dispatch(
        showFeedbackActionCreator({
          isError: true,
          message: "Wrong Credentials",
        })
      );
    }
  };

  return { getToken };
};

export default useUser;
