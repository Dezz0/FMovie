import { APP_TOKEN_TMDB } from './token';
import axios from 'axios';

export const BASE_URL = 'https://api.themoviedb.org/3';

const headers = {
    Authorization: `bearer ${APP_TOKEN_TMDB}`,
};

export const apiRequest = async (url: string, params?: any) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (e) {
        console.log(e);
        return e;
    }
};
