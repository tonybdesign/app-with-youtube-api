import { apiUrl } from '../constants/config';
import { requester } from './utils';

export const getVideosListService = () => requester(`${apiUrl}/todolist`);

export const getVideoService = (todoId) => requester(`${apiUrl}/todolist/${todoId}`);
