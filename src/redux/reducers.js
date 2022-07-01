import { combineReducers } from "redux";

import preference from "./preference/reducer";
import github from "./github/reducer";
import tiktok from "./tiktok/reducer";

export default combineReducers({
  github,
  preference,
  tiktok,
});
