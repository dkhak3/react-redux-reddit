import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSilce";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
