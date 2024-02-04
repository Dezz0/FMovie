import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { apiRequest } from 'shared/api/api';
import { exploreParamsType, ExplorePayloadResponse, IGenres, IMoviesAndTV, ISorting } from '../types/exploreType';

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
        genres: [],
        sorting: {
            label: '',
            value: '',
        },
    },
    'tv': {
        page: 1,
        results: [],
        total_results: 0,
        total_pages: 0,
        sort_by: '',
        with_genres: '',
        genres: [],
        sorting: {
            label: '',
            value: '',
        },
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
            mediaType: 'tv' | 'movie',
            sort_by: string
            with_genres: string
        }>) {
            const { sort_by, with_genres, mediaType } = action.payload;
            state[mediaType].sort_by = sort_by;
            state[mediaType].with_genres = with_genres;
        },
        setGenres(state, action: PayloadAction<IGenres>) {
            const { selectedItems, mediaType } = action.payload;
            state[mediaType].genres = selectedItems;
        },

        setSorting(state, action: PayloadAction<ISorting>) {
            const { label, value, mediaType } = action.payload;
            state[mediaType].sorting = { value: value, label: label };
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchExplore.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(fetchExplore.fulfilled, (state, action: PayloadAction<ExplorePayloadResponse>) => {
            state.isLoading = false;
            const { mediaType, page, results, total_results, total_pages } = action.payload;

            if (page === 1) {
                state[mediaType] = { ...state[mediaType], page: page, results: [...results], total_results: total_results, total_pages: total_pages };
            }
            if (state[mediaType].page < page) {
                state[mediaType] = { ...state[mediaType], page: page, results: [...state[mediaType].results, ...results] };
            }
        });
        builder.addCase(fetchExplore.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});

export default exploreSlice.reducer;
export const { setFilters, setGenres, setSorting } = exploreSlice.actions;
