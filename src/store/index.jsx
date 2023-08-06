/*
 * @Author: DoubleLiHao =2998000782@qq.com
 * @Date: 2023-08-03 17:03:55
 * @LastEditors: DoubleLiHao =2998000782@qq.com
 * @LastEditTime: 2023-08-04 21:17:23
 * @FilePath: \yzyy-web\src\store\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { configureStore } from "@reduxjs/toolkit";
// 主页的数据
import { numberApiSlice } from "./numberApi";
// 面试主页的数据
import { interviewSlice } from "./interviewSlice";

import { numberApiSlice } from "./numberApi";
import { loginApi } from "./loginApi";
import { loginInfoSlice } from "./loginInfoSlice";

// 面试排班的数据
import { timeTableSlice } from "./TimeTableSlice";


export const store = configureStore({
  // 把自定义的Slice放到这个对象里
  reducer: {
    interviewSlice: interviewSlice.reducer,
    loginInfoSlice: loginInfoSlice.reducer,
    timeTableSlice: timeTableSlice.reducer,
    [numberApiSlice.reducerPath]: numberApiSlice.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    // 把自定义的Api的中间件放进去
    // eg: 创建了stuAPi 就把stuApi.middleware 放到concat数组中中
    return getDefaultMiddleware().concat([
      numberApiSlice.middleware,
      loginApi.middleware,
    ]);
  },
});
