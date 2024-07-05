import {configureStore} from "@reduxjs/toolkit";

import userReducer  from "./userSlice";
import movieReducer from "./movieSlice";
import seriesReducer from "./seriesSlice";
import gptReducer from "./gptSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: movieReducer,
        series: seriesReducer,
        gpt: gptReducer,
    },
});

export default appStore;