import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { apiRequest } from 'shared/api/api';
import { ICreditsResponse, IDetailsResponse, ISimilarResponse, IVideosResponse } from '../types/contentPageType';

interface FetchParams {
    mediaType: string,
    id: string
}

interface SimilarPayload {
    data: ISimilarResponse,
    id: string
}

interface IMedia {
    credits?: ICreditsResponse;
    videos?: IVideosResponse;
    details?: IDetailsResponse;
    similar?: ISimilarResponse;
}

type initialStateType = {
    media: Record<number | string, IMedia>
    isLoading: boolean
    isLoadingSimilar: boolean
    isLoadingDetails: boolean
    isError: boolean
}

const initialState: initialStateType = {
    media: {},
    isLoading: false,
    isLoadingSimilar: false,
    isLoadingDetails: false,
    isError: false,
};

export const fetchVideos = createAsyncThunk('content/fetchVideos', async ({ mediaType, id }: FetchParams) => {
    try {
        return await apiRequest(`/${mediaType}/${id}/videos`);
    } catch (e) {
        console.log(e);
    }
});
export const fetchCredits = createAsyncThunk('content/fetchCredits', async ({ mediaType, id }: FetchParams) => {
    try {
        return await apiRequest(`/${mediaType}/${id}/credits`);
    } catch (e) {
        console.log(e);
    }
});

export const fetchDetails = createAsyncThunk('content/fetchDetails', async ({ mediaType, id }: FetchParams) => {
    try {
        return await apiRequest(`/${mediaType}/${id}`);
    } catch (e) {
        console.log(e);
    }
});

export const fetchSimilar = createAsyncThunk('content/fetchSimilar', async ({ mediaType, id }: FetchParams) => {
    try {
        const data = await apiRequest(`/${mediaType}/${id}/similar`);
        return { data, id };
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
            state.isLoadingDetails = true;
        });
        builder.addCase(fetchDetails.fulfilled, (state, action: PayloadAction<IDetailsResponse>) => {
            state.isLoadingDetails = false;

            if (action.payload?.id) {
                const { id } = action.payload;
                if (!state.media[id]?.details) {
                    state.media[id] = { ...state.media[id], details: action.payload };
                }
            }
        });
        builder.addCase(fetchDetails.rejected, (state) => {
            state.isError = true;
            state.isLoadingDetails = false;
        });
        builder.addCase(fetchSimilar.pending, (state) => {
            state.isLoadingSimilar = true;
            state.isError = false;
        });
        builder.addCase(fetchSimilar.fulfilled, (state, action: PayloadAction<SimilarPayload | undefined>) => {
            state.isLoadingSimilar = false;
            if (action.payload) {
                const { id, data } = action.payload;
                if (!state.media[id]?.similar) {
                    state.media[id] = {
                        ...state.media[id], similar: {
                            results: data.results,
                            page: data.page,
                            total_pages: data.total_pages,
                            total_results: data.total_results,
                        },
                    };
                }
            }

        });
        builder.addCase(fetchSimilar.rejected, (state) => {
            state.isLoadingSimilar = false;
            state.isError = true;
        });
    },
});

export default contentPagesSlice.reducer;
