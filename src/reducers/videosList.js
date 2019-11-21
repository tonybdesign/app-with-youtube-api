import {
  GET_VIDEOS_LIST,
  GET_VIDEOS_LIST_SUCCESS,
  GET_VIDEOS_LIST_FAILURE,
} from '../actions/actionTypes';
import { readyState } from '../constants/states';

const initialState = {
  videosList: [],
  readyState: readyState.ok,
};

const videosListReducer = (state = initialState, { type, payload, error }) => {
  switch (type) {
    case GET_VIDEOS_LIST:
    case GET_VIDEOS_LIST_SUCCESS:
      return { ...state, readyState: readyState.ok, videosList: payload };
    case GET_VIDEOS_LIST_FAILURE:
      return { ...state, readyState: readyState.error };
    default:
      return state;
  }
};

export default videosListReducer;
