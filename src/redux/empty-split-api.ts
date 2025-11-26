import { isRejectedWithValue, isRejected } from "@reduxjs/toolkit";
import type { MiddlewareAPI, Middleware } from "@reduxjs/toolkit";
import type {
  BaseQueryApi,
  FetchArgs,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query/react";
import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

import { getSettings } from "@/config/settings";

const settings = getSettings(window);

export const rtkQueryErrorLogger: Middleware =
  (_api: MiddlewareAPI) => (next) => (action) => {
    if (isRejected(action) || isRejectedWithValue(action)) {
      const baseQueryMeta = (
        action.meta as {
          baseQueryMeta?: FetchBaseQueryMeta;
        }
      )?.baseQueryMeta;

      if ((baseQueryMeta?.response?.status ?? 0) >= 400) {
        const statusError = new Error();
        statusError.message = JSON.stringify({
          params: {
            params: baseQueryMeta?.request?.url,
          },
          response: {
            status: baseQueryMeta?.response?.status,
            headers: Object.fromEntries(
              baseQueryMeta?.response?.headers?.entries() ?? []
            ),
            body: action.payload ?? baseQueryMeta?.response?.body,
          },
        });
      }
    }

    return next(action);
  };

const baseQuery = (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: object
) => {
  return fetchBaseQuery({
    baseUrl: settings.api.origin,
    // prepareHeaders: async (headers) => {
    //   const url = typeof args === "string" ? args : args.url;

    //   if (!url.startsWith(settings.api.origin) && !url.startsWith("/")) {
    //     return headers;
    //   }

    //   return headers;
    // },
  })(args, api, extraOptions);
};

const staggeredBaseQuery = retry(baseQuery, {
  maxRetries: 0,
});

export const emptySplitApi = createApi({
  reducerPath: "api",
  baseQuery: staggeredBaseQuery,
  endpoints: () => ({}),
});
