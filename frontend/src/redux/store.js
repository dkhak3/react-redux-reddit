import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSilce";
import postReducer from "./postSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
  },
});
