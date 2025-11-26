import { configureStore } from "@reduxjs/toolkit";

import { getSettings } from "@/config/settings";

import { emptySplitApi, rtkQueryErrorLogger } from "./empty-split-api";
import { reducer } from "./reducers/reducer";

const settings = getSettings(window);
export const APPLICATION_STORE = configureStore({
  reducer,
  devTools: settings.redux.devTools,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(emptySplitApi.middleware, rtkQueryErrorLogger),
});
export type RootState = ReturnType<typeof APPLICATION_STORE.getState>;
export type AppDispatch = typeof APPLICATION_STORE.dispatch;
