import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	videos: [{}],
};

const videoSlice = createSlice({
    name: "videos",
    initialState,
    reducers: {
        setVideos: (state, action) => {
            state.videos = action.payload;
        },
        addVideos: (state, action) => {
            state.videos?.push(action.payload)
        }
    },
});

export const { setVideos, addVideos } = videoSlice.actions;

export default videoSlice.reducer;