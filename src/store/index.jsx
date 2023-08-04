import { configureStore, } from "@reduxjs/toolkit";
import { testSlice } from "./testSlice";

import { numberApiSlice } from "./numberApi";

export const store = configureStore({
    // 把自定义的Slice放到这个对象里
    reducer: {
        testSlice: testSlice.reducer,
        [numberApiSlice.reducerPath]:numberApiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => {
        // 把自定义的Api的中间件放进去
        // eg: 创建了stuAPi 就把stuApi.middleware 放到concat数组中中
      return getDefaultMiddleware().concat([numberApiSlice.middleware])
    }
})