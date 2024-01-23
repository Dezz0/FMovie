import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import configSlice from '../../../../entities/configurationFromApi/model/slice/configSlice';
import upcomingSlice from '../../../../entities/upcoming/model/slice/upcomingSlice';
import querySlice from '../../../../entities/query/model/slice/querySlice';
import TrendingSlice from '../../../../entities/trending/model/slice/trendingSlice';

export const store = configureStore({
    reducer: {
        config: configSlice,
        upcoming: upcomingSlice,
        query: querySlice,
        trending: TrendingSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
