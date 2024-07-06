import {configureStore} from "@reduxjs/toolkit";

import userReducer  from "./userSlice";
import movieReducer from "./movieSlice";
import seriesReducer from "./seriesSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: movieReducer,
        series: seriesReducer,
        gpt: gptReducer,
        config: configReducer,
    },
});

export default appStore;