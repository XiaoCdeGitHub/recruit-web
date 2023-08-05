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
import { Interview } from "../pages/Interview/Interview";
import { Result } from "../pages/Result/Result";
import { TimeTable } from "../pages/TimeTable/TimeTable";

// hash路由 访问记得加 #
export const router = createHashRouter([
  // 登录路由
  {
    path: "/login",
    element: <Login></Login>,
  },
  // 主页面的路由 默认是展示信息页面 其他页面均为子路由
  {
    path: "/",
    element: <Main></Main>,
    children: [
      // 信息展示
      {
        index: true,
        element: <ShowInfo></ShowInfo>,
      },
      // 信息发布
      {
        path: "publish",
        element: <PublishInfo></PublishInfo>,
      },
      // 面试主页
      {
        path: "interview",
        element: <Interview></Interview>,
      },
      // 面试结果
      {
        path: "result/*",
        element: <Result></Result>,
      },
      // 面试排班
      {
        path: "timetable",
        element: <TimeTable></TimeTable>,
      },
    ],
  },
]);
