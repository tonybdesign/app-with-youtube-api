/* eslint-disable no-mixed-operators */
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
      return { ...state, readyState: readyState.loading };
    case GET_VIDEOS_LIST_SUCCESS:
      return payload && {
        ...state,
        readyState: readyState.ok,
        videosList: payload.items.map((video) => ({
          id: video.id.videoId,
          title: video.snippet.title,
          thumb: video.snippet.thumbnails.default.url,
          author: video.snippet.channelTitle,
        })),
      } || { ...state };
    case GET_VIDEOS_LIST_FAILURE:
      return { ...state, readyState: readyState.error, error };
    default:
      return state;
  }
};

export default videosListReducer;
