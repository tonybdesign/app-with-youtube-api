import {
  GET_VIDEOS_LIST,
  GET_VIDEOS_LIST_SUCCESS,
  GET_VIDEOS_LIST_FAILURE,
} from './actionTypes';
import { getVideosListService } from '../services/videos';

const getVideosListSuccess = (payload) => ({
  type: GET_VIDEOS_LIST_SUCCESS,
  payload,
});

const getVideosListFailure = (error) => ({
  type: GET_VIDEOS_LIST_FAILURE,
  error,
});

export const getVideosList = () => async (dispatch) => {
  dispatch({ type: GET_VIDEOS_LIST });
  await getVideosListService()
    .then((res) => {
      if (res.ok) {
        res.json().then((data) => dispatch(getVideosListSuccess(data)));
      } else {
        res.json().then((data) => dispatch(getVideosListFailure(data)));
      }
    }).catch((e) => console.error(e));
};