import axios from "axios";
import { useCallback } from "react";
import { BoulderState } from "../../store/boulder/boulderSlice";

const apiUrl = import.meta.env.VITE_API_URL;

const useBoulders = (token: string) => {
  const getBoulders = useCallback(async (): Promise<BoulderState> => {
    const { data: boulders } = await axios.get(`${apiUrl}/boulders/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return boulders;
  }, [token]);

  return { getBoulders };
};

export default useBoulders;
