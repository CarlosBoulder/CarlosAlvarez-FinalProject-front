import axios from "axios";
import { useCallback } from "react";
import { BoulderState } from "../../store/boulder/boulderSlice";
import { useAppDispatch } from "../../store";
import {
  hideLoadingActionCreator,
  showFeedbackActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";

const apiUrl = import.meta.env.VITE_API_URL;

const useBoulders = (token: string) => {
  const dispatch = useAppDispatch();
  const getBoulders = useCallback(async (): Promise<
    BoulderState | undefined
  > => {
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
      dispatch(
        showFeedbackActionCreator({
          isError: true,
          message: "Error trying to get boulders",
        })
      );
    }
  }, [token, dispatch]);

  const deleteBoulder = useCallback(
    async (boulderId: string): Promise<void> => {
      dispatch(showLoadingActionCreator());

      try {
        await axios.delete(`${apiUrl}/boulders/${boulderId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        dispatch(hideLoadingActionCreator());
        dispatch(
          showFeedbackActionCreator({
            isError: false,
            message: "Boulder deleted",
          })
        );
      } catch (error) {
        dispatch(hideLoadingActionCreator());
        dispatch(
          showFeedbackActionCreator({
            isError: true,
            message: "Error trying to delete boulder",
          })
        );
      }
    },
    [token, dispatch]
  );

  return { getBoulders, deleteBoulder };
};

export default useBoulders;
