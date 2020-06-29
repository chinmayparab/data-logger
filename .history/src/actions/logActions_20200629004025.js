import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOGS } from "./types";

// get serveer logs
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/logs");
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

// set loading to truee
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
