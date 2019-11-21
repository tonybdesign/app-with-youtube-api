import {
  GET_VIDEO,
  GET_VIDEO_SUCCESS,
  GET_VIDEO_FAILURE,
} from './actionTypes';
import { getVideoService } from '../services/videos';

const getVideoSuccess = (payload) => ({
  type: GET_VIDEO_SUCCESS,
  payload,
});

const getVideoFailure = (error) => ({
  type: GET_VIDEO_FAILURE,
  error,
});

export const getVideo = (todoID) => async (dispatch) => {
  dispatch({ type: GET_VIDEO });
  await getVideoService(todoID)
    .then((res) => {
      if (res.ok) {
        res.json().then((data) => dispatch(getVideoSuccess(data)));
      } else {
        res.json().then((data) => dispatch(getVideoFailure(data)));
      }
    }).catch((e) => console.error(e));
};