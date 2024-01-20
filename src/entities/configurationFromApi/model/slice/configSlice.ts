import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { apiRequest } from '../../../../shared/api/api';
import { IConfigurationResponse } from '../types/configType';

type initialStateType = {
    url_images: string,
    isError: boolean,
    isLoading: boolean
};

const initialState: initialStateType = {
    url_images: '',
    isError: false,
    isLoading: false,
};

export const fetchConfig = createAsyncThunk('config/fetchConfig', async () => {
    try {
        return await apiRequest('/configuration');
    } catch (e) {
        console.log(e);
    }
});

const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchConfig.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(fetchConfig.fulfilled, (state, action: PayloadAction<IConfigurationResponse>) => {
            const { images } = action.payload;
            state.isLoading = false;
            if (images?.secure_base_url) {
                state.url_images = images.secure_base_url + 'original';
            }
        });
        builder.addCase(fetchConfig.rejected, (state) => {
            state.isError = true;
            state.isLoading = false;
        });
    },
});

export default configSlice.reducer;
