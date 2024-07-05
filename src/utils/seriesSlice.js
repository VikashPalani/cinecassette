import { createSlice } from "@reduxjs/toolkit";

const seriesSlice = createSlice({
    name: "series",
    initialState: {
        airingTodaySeries: null,
        onTheAirSeries: null,
        popularSeries: null,
        topRatedSeries: null,
    },
    reducers: {
        addAiringTodaySeries: (state, action) => {
            state.airingTodaySeries = action.payload;
        },
        addOnTheAirSeries: (state, action) => {
            state.onTheAirSeries = action.payload;
        },
        addPopularSeries: (state, action) => {
            state.popularSeries = action.payload;
        },
        addTopRatedSeries: (state, action) => {
            state.topRatedSeries = action.payload;
        },
    }
})

export const {addAiringTodaySeries, addOnTheAirSeries, addPopularSeries, addTopRatedSeries} = seriesSlice.actions;
export default seriesSlice.reducer;