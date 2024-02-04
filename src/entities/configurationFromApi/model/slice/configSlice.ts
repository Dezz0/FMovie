import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { apiRequest } from 'shared/api/api';
import { IConfigurationResponse } from '../types/configType';

type ExploreGenresType = Array<{
    id: number,
    name: string
}>

type initialStateType = {
    url_images: string,
    genres: Record<number, string>,
    genresTV: ExploreGenresType
    genresMovie: ExploreGenresType
    isError: boolean,
    isLoading: boolean
};

const initialState: initialStateType = {
    url_images: '',
    genres: {},
    genresTV: [],
    genresMovie: [],
    isError: false,
    isLoading: false,
};

export const fetchConfig = createAsyncThunk('config/fetchConfig', async () => {
    try {
        const config = await apiRequest('/configuration');
        const genreTV = await apiRequest('/genre/tv/list');
        const genreMovie = await apiRequest('/genre/movie/list');
        return {
            config,
            genreTV,
            genreMovie,
        };
    } catch (e) {
        console.log(e);
    }
});

const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchConfig.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(fetchConfig.fulfilled, (state, action: PayloadAction<IConfigurationResponse | undefined>) => {
            state.isLoading = false;
            if (action.payload) {
                const { config, genreTV, genreMovie } = action.payload;
                if (config?.images) {
                    state.url_images = config.images.secure_base_url + 'original';
                }
                if (genreMovie?.genres && genreTV?.genres) {
                    const allGenres = [...genreTV.genres, ...genreMovie.genres];
                    state.genresTV = genreTV.genres;
                    state.genresMovie = genreMovie.genres;

                    allGenres.forEach(g => (
                        state.genres[g.id] = g.name
                    ));
                }
            }

        });
        builder.addCase(fetchConfig.rejected, (state) => {
            state.isError = true;
            state.isLoading = false;
        });
    },
});

export default configSlice.reducer;
