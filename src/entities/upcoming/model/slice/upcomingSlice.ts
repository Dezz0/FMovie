import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { apiRequest } from '../../../../shared/api/api';
import { IUpcomingResponse } from '../types/upcomingType';
import { IRequestResults } from '../../../../shared/types/typeOfResultRequest/typeOfResultRequest';

type initialStateType = {
    page: number,
    results: Array<IRequestResults>,
    isLoading: boolean,
    isError: boolean
}

const initialState: initialStateType = {
    page: 0,
    results: [],
    isLoading: false,
    isError: false,
};

export const fetchUpcoming = createAsyncThunk('upcoming/fetchUpcomming', async () => {
    try {
        return await apiRequest('/movie/upcoming');
    } catch (e) {
        console.log(e);
    }
});

const upcomingSlice = createSlice({
    name: 'upcoming',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchUpcoming.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(fetchUpcoming.fulfilled, (state, action: PayloadAction<IUpcomingResponse>) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.results = action.payload.results;
        });
        builder.addCase(fetchUpcoming.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});

export default upcomingSlice.reducer;
