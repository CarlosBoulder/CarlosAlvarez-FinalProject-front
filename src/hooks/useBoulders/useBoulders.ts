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
import BoulderStructure from "../../store/types";

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
    async (boulderId: string): Promise<void | undefined> => {
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
            showFeedback: true,
            message: "Boulder deleted",
            isError: false,
          })
        );
        dispatch(deleteBouldersActionCreator(boulderId));
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
    async (boulder: BoulderStructureDetails): Promise<boolean | undefined> => {
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

        const success = status === 201;

        return success;
      } catch (error) {
        dispatch(hideLoadingActionCreator());
        dispatch(
          showFeedbackActionCreator({
            showFeedback: true,
            message: "Error trying to create the boulder",
            isError: true,
          })
        );
      }
    },
    [token, dispatch]
  );

  const getBoulder = useCallback(
    async (id: string): Promise<BoulderStructure | undefined> => {
      dispatch(showLoadingActionCreator());

      try {
        const {
          data: { boulder },
        } = await axios.get(`${apiUrl}/boulders/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        dispatch(hideLoadingActionCreator());

        return boulder;
      } catch (error) {
        dispatch(hideLoadingActionCreator());
        dispatch(
          showFeedbackActionCreator({
            showFeedback: true,
            message: "Error trying to get boulder",
            isError: true,
          })
        );
      }
    },
    [token, dispatch]
  );

  return {
    getPaginatedBoulders,
    getBoulders,
    deleteBoulder,
    addBoulder,
    getBoulder,
  };
};

export default useBoulders;
