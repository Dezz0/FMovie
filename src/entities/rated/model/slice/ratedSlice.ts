import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRequestResults } from 'shared/types/typeOfResultRequest/typeOfResultRequest';
import { apiRequest } from 'shared/api/api';
import { IRatedResponse } from '../types/ratedType';

type initialStateType = {
    endpoint: string,
    results: Record<string, {
        results: Array<IRequestResults>
    }>
    isLoading: boolean,
    isError: boolean
}

const initialState: initialStateType = {
    endpoint: 'movie',
    results: {},
    isLoading: false,
    isError: false,
};

export const fetchRated = createAsyncThunk('rated/fetchRated', async (endpoint: string) => {
    try {
        return await apiRequest(`/${endpoint}/top_rated`);
    } catch (e) {
        console.log(e);
    }
});

const ratedSlice = createSlice({
    name: 'rated',
    initialState,
    reducers: {
        changeEndpointRated(state, action: PayloadAction<string>) {
            state.endpoint = action.payload;
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchRated.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(fetchRated.fulfilled, (state, action: PayloadAction<IRatedResponse>) => {
            state.isLoading = false;

            if (!state.results[state.endpoint]) {
                state.results[state.endpoint] = { results: action.payload.results };
            }
        });
        builder.addCase(fetchRated.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});

export default ratedSlice.reducer;
export const { changeEndpointRated } = ratedSlice.actions;
