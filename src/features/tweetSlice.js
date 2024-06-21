import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tweets: [{}]
}

const tweetsSlice = createSlice({
    name: "tweets",
    initialState,
    reducers: {
        setTweets: (state, action) => {
            state.tweets = action.payload;
        },
        addTweet: (state, action) => {
            state.tweets.push(action.payload);
        }
    }
});

export const { setTweets, addTweet } = tweetsSlice.actions;

export default tweetsSlice.reducer;