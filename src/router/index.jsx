/*
 * @Author: DoubleLiHao =2998000782@qq.com
 * @Date: 2023-08-02 19:38:22
 * @LastEditors: DoubleLiHao =2998000782@qq.com
 * @LastEditTime: 2023-08-02 20:35:02
 * @FilePath: \yzyy-web\src\router\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createHashRouter } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { Main } from "../pages/Main/Main";
import { ShowInfo } from "../pages/ShowInfo/ShowInfo";
import { PublishInfo } from "../pages/PublishInfo/PublishInfo";
export const router = createHashRouter([
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/main",
    element: <Main></Main>,
    children: [
      {
        index: true,
        element: <ShowInfo></ShowInfo>,
      },
      {
        path: "publish",
        element: <PublishInfo></PublishInfo>,
      },
    ],
  },
]);
