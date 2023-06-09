import axios from "axios";
import { useCallback } from "react";
import {
  BoulderState,
  deleteBouldersActionCreator,
} from "../../store/boulder/boulderSlice";
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
          showFeedback: true,
          message: "Error trying to get boulders",
        })
      );
    }
  }, [token, dispatch]);

  const deleteBoulder = useCallback(
    async (boulderId: string): Promise<number | undefined> => {
      dispatch(showLoadingActionCreator());
      try {
        const { status } = await axios.delete(
          `${apiUrl}/boulders/${boulderId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        dispatch(hideLoadingActionCreator());
        dispatch(
          showFeedbackActionCreator({
            showFeedback: true,
            message: "Boulder deleted",
          })
        );
        dispatch(deleteBouldersActionCreator(boulderId));

        return status;
      } catch (error) {
        dispatch(hideLoadingActionCreator());
        dispatch(
          showFeedbackActionCreator({
            showFeedback: true,
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
