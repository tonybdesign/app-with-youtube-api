import {
  GET_VIDEO,
  GET_VIDEO_SUCCESS,
  GET_VIDEO_FAILURE,
} from '../actions/actionTypes';
import { readyState } from '../constants/states';

const initialState = {
  currentVideo: {},
  readyState: readyState.ok,
};

const currentVideoReducer = (state = initialState, { type, payload, error }) => {
  switch (type) {
    case GET_VIDEO:
      return { ...state, readyState: readyState.loading };
    case GET_VIDEO_SUCCESS:
      return { ...state, readyState: readyState.ok, currentVideo: payload };
    case GET_VIDEO_FAILURE:
      return { ...state, readyState: readyState.error };
    default:
      return state;
  }
};

export default currentVideoReducer;
