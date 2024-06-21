import tweetSlice from "../features/tweetSlice";
import videoSlice from "../features/videoSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        tweets: tweetSlice.reducer,
        videos: videoSlice.reducer,
    },
});

export default store;