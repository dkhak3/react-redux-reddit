import { createSlice } from "@reduxjs/toolkit";

export const postSile = createSlice({
  name: "post",
  initialState: {
    posts: [{ title: "", description: "", tag: 0 }],
  },
  reducers: {
    createPost: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
  },
});

export const { createPost } = postSile.actions;
export default postSile.reducer;
