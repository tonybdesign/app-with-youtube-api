import { apiUrl, apiKey } from '../constants/config';
import { requester } from './utils';

export const getVideosListService = (keyword) => requester(
  `${apiUrl}/search?part=snippet&maxResults=25&q=${keyword}&key=${apiKey}&type=video`,
);

export const getVideoService = (videoId) => requester(
  `${apiUrl}/videos?id=${videoId}&key=${apiKey}&part=snippet,contentDetails,statistics,status`,
);
