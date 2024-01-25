import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { apiRequest } from '../../../../shared/api/api';
import { ICreditsResponse, IDetailsResponse, IVideosResponse } from '../types/contentPageType';

interface VideosParams {
    mediaType: string,
    id: string
}

interface IMedia {
    credits?: ICreditsResponse;
    videos?: IVideosResponse;
    details?: IDetailsResponse;
}

type initialStateType = {
    media: Record<number | string, IMedia>
    isLoading: boolean
    isError: boolean
}

const initialState: initialStateType = {
    media: {},
    isLoading: false,
    isError: false,
};

export const fetchVideos = createAsyncThunk('content/fetchVideos', async ({ mediaType, id }: VideosParams) => {
    try {
        return await apiRequest(`/${mediaType}/${id}/videos`);
    } catch (e) {
        console.log(e);
    }
});
export const fetchCredits = createAsyncThunk('content/fetchCredits', async ({ mediaType, id }: VideosParams) => {
    try {
        return await apiRequest(`/${mediaType}/${id}/credits`);
    } catch (e) {
        console.log(e);
    }
});

export const fetchDetails = createAsyncThunk('content/fetchDetails', async ({ mediaType, id }: VideosParams) => {
    try {
        return await apiRequest(`/${mediaType}/${id}`);
    } catch (e) {
        console.log(e);
    }
});

const contentPagesSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchVideos.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
        });
        builder.addCase(fetchVideos.fulfilled, (state, action: PayloadAction<IVideosResponse>) => {
            state.isLoading = false;

            if (action.payload?.id) {
                const { id, results } = action.payload;
                if (!state.media[id]?.videos) {
                    state.media[id] = { ...state.media[id], videos: { id: id, results: results } };
                }
            }
        });
        builder.addCase(fetchVideos.rejected, (state) => {
            state.isError = true;
            state.isLoading = false;
        });
        builder.addCase(fetchCredits.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
        });
        builder.addCase(fetchCredits.fulfilled, (state, action: PayloadAction<ICreditsResponse>) => {
            state.isLoading = false;

            if (action.payload?.id) {
                const { id, crew, cast } = action.payload;
                if (!state.media[id]?.credits) {
                    state.media[id] = { ...state.media[id], credits: { id: id, cast: cast, crew: crew } };
                }
            }
        });
        builder.addCase(fetchCredits.rejected, (state) => {
            state.isError = true;
            state.isLoading = false;
        });
        builder.addCase(fetchDetails.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
        });
        builder.addCase(fetchDetails.fulfilled, (state, action: PayloadAction<IDetailsResponse>) => {
            state.isLoading = false;

            if (action.payload?.id) {
                const { id } = action.payload;
                if (!state.media[id]?.details) {
                    state.media[id] = { ...state.media[id], details: action.payload };
                }
            }
        });
        builder.addCase(fetchDetails.rejected, (state) => {
            state.isError = true;
            state.isLoading = false;
        });
    },
});

export default contentPagesSlice.reducer;
