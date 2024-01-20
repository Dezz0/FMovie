import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { apiRequest } from '../../../../shared/api/api';
import { IRequestResponse, queryParamsType } from '../types/queryType';
import { IRequestFilm } from '../../../../shared/types/typeOfResultRequest/typeOfResultRequest';

interface initialStateType extends Omit<IRequestResponse, 'results' | 'query'> {
    requests: Record<string, {
        results: Array<IRequestFilm>
    }>,
    isError: boolean,
    isLoading: boolean
}

const initialState: initialStateType = {
    requests: {},
    page: 0,
    total_pages: 0,
    total_results: 0,
    isError: false,
    isLoading: false,
};

export const fetchContent = createAsyncThunk('query/fetchContent', async ({ query, page = 1 }: queryParamsType) => {
    try {
        const data = await apiRequest(`/search/multi?query=${query}&page=${page}`);
        data.query = query;
        console.log(data);
        return data;
    } catch (e) {
        console.log(e);
    }
});

const querySlice = createSlice({
    name: 'query',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchContent.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(fetchContent.fulfilled, (state, action: PayloadAction<IRequestResponse>) => {
            const { query, results, total_results, total_pages, page } = action.payload;
            state.isLoading = false;
            state.page = page;
            state.total_pages = total_pages;
            state.total_results = total_results;
            if (!state.requests[query] && results) {
                state.requests[query] = { results: [...results] };
            }

        });

        builder.addCase(fetchContent.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});

export default querySlice.reducer;

