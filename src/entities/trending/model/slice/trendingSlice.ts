import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRequestResults } from 'shared/types/typeOfResultRequest/typeOfResultRequest';
import { apiRequest } from 'shared/api/api';
import { ITrendingResponse } from '../types/trendingType';

type initialStateType = {
    endpoint: string,
    results: Record<string, {
        results: Array<IRequestResults>
    }>
    isLoading: boolean,
    isError: boolean
}

const initialState: initialStateType = {
    endpoint: 'day',
    results: {},
    isLoading: false,
    isError: false,
};

export const fetchTrending = createAsyncThunk('trending/fetchTrending', async (endpoint: string) => {
    try {
        return await apiRequest(`/trending/movie/${endpoint}`);
    } catch (e) {
        console.log(e);
    }
});

const trendingSlice = createSlice({
    name: 'trending',
    initialState,
    reducers: {
        changeEndpointTrending(state, action: PayloadAction<string>) {
            state.endpoint = action.payload;
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchTrending.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(fetchTrending.fulfilled, (state, action: PayloadAction<ITrendingResponse>) => {
            state.isLoading = false;

            if (!state.results[state.endpoint]) {
                state.results[state.endpoint] = { results: action.payload.results };
            }
        });
        builder.addCase(fetchTrending.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});

export default trendingSlice.reducer;
export const { changeEndpointTrending } = trendingSlice.actions;
