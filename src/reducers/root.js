import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import localizationReducer from './localization';
import videosListReducer from './videosList';
import currentVideoReducer from './currentVideo';

const appReducer = combineReducers({
  routing: routerReducer,
  localization: localizationReducer,
  videosList: videosListReducer,
  currentVideo: currentVideoReducer,
});


export default appReducer;
