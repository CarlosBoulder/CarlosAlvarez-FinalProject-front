import axios from "axios";
import { useCallback } from "react";
import {
  BoulderState,
  PaginatedBoulderState,
  deleteBouldersActionCreator,
} from "../../store/boulder/boulderSlice";
import { useAppDispatch } from "../../store";
import {
  hideLoadingActionCreator,
  showFeedbackActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";
import { BoulderStructureDetails } from "../../components/CreateBoulderForm/types";

const apiUrl = import.meta.env.VITE_API_URL;

const useBoulders = (token: string) => {
  const dispatch = useAppDispatch();

  const getPaginatedBoulders = useCallback(
    async (page: number): Promise<PaginatedBoulderState | undefined> => {
      dispatch(showLoadingActionCreator());

      try {
        const response = await axios.get(
          `${apiUrl}/boulders/paged?page=${page}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        dispatch(hideLoadingActionCreator());

        return response.data;
      } catch (error) {
        dispatch(hideLoadingActionCreator());
        dispatch(
          showFeedbackActionCreator({
            showFeedback: true,
            message: "Error trying to get boulders",
            isError: true,
          })
        );
      }
    },
    [token, dispatch]
  );

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
          isError: true,
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
            isError: false,
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
            isError: true,
          })
        );
      }
    },
    [token, dispatch]
  );

  const addBoulder = useCallback(
    async (boulder: BoulderStructureDetails): Promise<number | undefined> => {
      dispatch(showLoadingActionCreator());
      try {
        const { status } = await axios.post(
          `${apiUrl}/boulders/create`,
          boulder,
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
            message: "Boulder created",
            isError: false,
          })
        );

        return status;
      } catch (error) {
        dispatch(hideLoadingActionCreator());
        throw error;
      }
    },
    [token, dispatch]
  );

  return { getPaginatedBoulders, getBoulders, deleteBoulder, addBoulder };
};

export default useBoulders;
