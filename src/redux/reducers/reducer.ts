import { combineReducers } from "@reduxjs/toolkit";

import { emptySplitApi } from "../empty-split-api";

export const reducer = combineReducers({
  [emptySplitApi.reducerPath]: emptySplitApi.reducer,
});
