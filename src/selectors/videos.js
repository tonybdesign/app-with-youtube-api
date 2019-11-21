import { createSelector } from 'reselect';

const selectorCurrentVideo = (state) => state.currentVideo;
const selectorVidoesList = (state) => state.videosList;

export const selectVideo = createSelector(
  selectorCurrentVideo,
  (selectedState) => selectedState.currentVideo,
);

export const selectVideosList = createSelector(
  selectorVidoesList,
  (selectedState) => selectedState.todoList,
);

export const selectVideosListReadyState = createSelector(
  selectorVidoesList,
  (selectedState) => selectedState.readyState,
);

export const selectVideoReadyState = createSelector(
  selectorCurrentVideo,
  (selectedState) => selectedState.readyState,
);