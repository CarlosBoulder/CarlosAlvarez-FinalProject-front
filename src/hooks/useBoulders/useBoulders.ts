import axios from "axios";
import { useCallback } from "react";
import { BoulderState } from "../../store/boulder/boulderSlice";
import { useAppDispatch } from "../../store";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";

const apiUrl = import.meta.env.VITE_API_URL;

const useBoulders = (token: string) => {
  const dispatch = useAppDispatch();
  const getBoulders = useCallback(async (): Promise<BoulderState> => {
    dispatch(showLoadingActionCreator());

    try {
      const { data: boulders } = await axios.get(`${apiUrl}/boulders/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(hideLoadingActionCreator());

      return boulders;
    } catch (error) {
      dispatch(hideLoadingActionCreator());
      throw new Error("Error trying to get boulders");
    }
  }, [token, dispatch]);

  return { getBoulders };
};

export default useBoulders;
