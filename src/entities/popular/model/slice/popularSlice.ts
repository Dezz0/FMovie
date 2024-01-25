import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRequestResults } from '../../../../shared/types/typeOfResultRequest/typeOfResultRequest';
import { apiRequest } from '../../../../shared/api/api';
import { IPopularResponse } from '../types/popularType';

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

export const fetchPopular = createAsyncThunk('popular/fetchPopular', async (endpoint: string) => {
    try {
        return await apiRequest(`/${endpoint}/popular`);
    } catch (e) {
        console.log(e);
    }
});

const popularSlice = createSlice({
    name: 'popular',
    initialState,
    reducers: {
        changeEndpointPopular(state, action: PayloadAction<string>) {
            state.endpoint = action.payload;
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchPopular.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(fetchPopular.fulfilled, (state, action: PayloadAction<IPopularResponse>) => {
            state.isLoading = false;

            if (!state.results[state.endpoint]) {
                state.results[state.endpoint] = { results: action.payload.results };
            }

        });
        builder.addCase(fetchPopular.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});

export default popularSlice.reducer;
export const { changeEndpointPopular } = popularSlice.actions;
