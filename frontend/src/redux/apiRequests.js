import { updateStart, updateError, updateSuccess } from "./userSilce";
import axios from "axios";

export const updateUser = async (user, dispatch) => {
  dispatch(updateStart());

  try {
    const res = await axios.post("/v1/updateUser", user);
    dispatch(updateSuccess(res.data));
  } catch (error) {
    dispatch(updateError());
  }
};
