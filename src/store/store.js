import tweetSlice from "../features/tweetSlice";
import videoSlice from "../features/videoSlice";
import authSlice from "../features/authSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        tweets: tweetSlice,
        videos: videoSlice,
        auth: authSlice,
    },
});

export default store;