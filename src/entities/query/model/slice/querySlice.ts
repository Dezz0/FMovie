import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { apiRequest } from '../../../../shared/api/api';
import { IRequestResponse, queryParamsType } from '../types/queryType';

interface initialStateType {
    requests: Record<string, IRequestResponse>,
    isError: boolean,
    isLoading: boolean
}

const initialState: initialStateType = {
    requests: {},
    isError: false,
    isLoading: false,
};

export const fetchQueryResults = createAsyncThunk('query/fetchQueryResults', async ({ query, page }: queryParamsType) => {
    try {
        const data = await apiRequest(`/search/multi?query=${query}&page=${page}`);
        data.query = query;
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
        builder.addCase(fetchQueryResults.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(fetchQueryResults.fulfilled, (state, action: PayloadAction<IRequestResponse>) => {
            state.isLoading = false;
            if (action.payload) {
                const { query, page, results, total_results } = action.payload;

                if (!state.requests.query && page === 1) {
                    state.requests[query!] = { page: page, query: query, total_results: total_results, results: [...results] };
                }
                if (state.requests[query!]?.page < page) {
                    state.requests[query!] = { ...state.requests[query!], page: page, results: [...state.requests[query!].results, ...results] };
                }
            }
        });

        builder.addCase(fetchQueryResults.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});

export default querySlice.reducer;



