import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { apiRequest } from '../../../../shared/api/api';
import { exploreParamsType, ExplorePayloadResponse, IMoviesAndTV } from '../types/exploreType';

type InitialStateType = {
    'movie': IMoviesAndTV,
    'tv': IMoviesAndTV,
    isLoading: boolean,
    isError: boolean
}

const initialState: InitialStateType = {
    'movie': {
        page: 1,
        results: [],
        total_results: 0,
        total_pages: 0,
        sort_by: '',
        with_genres: '',
    },
    'tv': {
        page: 1,
        results: [],
        total_results: 0,
        total_pages: 0,
        sort_by: '',
        with_genres: '',
    },
    isLoading: false,
    isError: false,
};

export const fetchExplore = createAsyncThunk('explore/fetchExplore', async ({ page, mediaType, filters }: exploreParamsType, { dispatch }) => {
    try {
        const data = await apiRequest(`/discover/${mediaType}?page=${page}`, filters);
        data.mediaType = mediaType;
        dispatch(setFilters({ mediaType, ...filters }));
        return data;
    } catch (e) {
        console.log(e);
    }
});

const exploreSlice = createSlice({
    name: 'explore',
    initialState,
    reducers: {
        setFilters(state, action: PayloadAction<{
            mediaType: string | undefined,
            sort_by: string
            with_genres: string
        }>) {
            const { sort_by, with_genres, mediaType } = action.payload;
            if (mediaType === 'tv' || mediaType === 'movie') {
                state[mediaType].sort_by = sort_by;
                state[mediaType].with_genres = with_genres;
            }
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchExplore.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(fetchExplore.fulfilled, (state, action: PayloadAction<ExplorePayloadResponse>) => {
            state.isLoading = false;
            const { mediaType, page, results, total_results, total_page } = action.payload;
            if (mediaType === 'movie' || mediaType === 'tv') {
                if (page === 1) {
                    state[mediaType] = { ...state[mediaType], page: page, results: [...results], total_results: total_results, total_pages: total_page };
                }
                if (state[mediaType].page < page) {
                    state[mediaType] = { ...state[mediaType], page: page, results: [...results] };
                }
            }
        });
        builder.addCase(fetchExplore.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});

export default exploreSlice.reducer;
export const { setFilters } = exploreSlice.actions;
