import { configureStore } from '@reduxjs/toolkit';
import configSlice from 'entities/configurationFromApi/model/slice/configSlice';
import upcomingSlice from 'entities/upcoming/model/slice/upcomingSlice';
import querySlice from 'entities/query/model/slice/querySlice';
import TrendingSlice from 'entities/trending/model/slice/trendingSlice';
import popularSlice from 'entities/popular/model/slice/popularSlice';
import ratedSlice from 'entities/rated/model/slice/ratedSlice';
import contentPagesSlice from 'entities/contentPage/model/slice/contentPagesSlice';
import exploreSlice from 'entities/explore/model/slice/exploreSlice';

export const store = configureStore({
    reducer: {
        config: configSlice,
        upcoming: upcomingSlice,
        query: querySlice,
        trending: TrendingSlice,
        popular: popularSlice,
        rated: ratedSlice,
        content: contentPagesSlice,
        explore: exploreSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

