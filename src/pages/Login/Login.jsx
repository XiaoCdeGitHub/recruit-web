/*
 * @Author: dongheheyeye 119031939+dongheheyeye@users.noreply.github.com
 * @Date: 2023-08-04 10:11:05
 * @LastEditors: DoubleLiHao =2998000782@qq.com
 * @LastEditTime: 2023-08-10 11:02:39
 * @FilePath: \dom\recruit-web\src\pages\Login\Login.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styles from "./Login.module.css";
import React from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input, Space, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { usePostLoginMutation } from "../../store/loginApi";
import {
  enterSuperAdmin,
  notSuperAdmin,
  setGroupId,
} from "../../store/loginInfoSlice";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [postLoginInfo, message] = usePostLoginMutation();
  const data = useSelector((state) => state.loginInfoSlice);
  //post请求返回一个函数，一个存储信息的对象
  const clickHandler = () => {
    postLoginInfo();
    console.log(message);
    //判断账号密码是错误
    if (false) {
      return;
    }
    //判断是否为超级管理员
    if (message) {
      dispatch(enterSuperAdmin());
    } else {
      dispatch(notSuperAdmin());
      dispatch(setGroupId());
    }
    navigate("/", { replace: true });
  };
  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.content}>
          <img
            className={styles.img}
            src="https://donghehe.oss-cn-hangzhou.aliyuncs.com/%E4%BA%91%E9%A1%B6%E4%B9%A6%E9%99%A2.png"
            alt=""
          />

          <div className={styles.content_left}></div>
          <div className={styles.content_right}>
            <div className={styles.input_container}>
              <Input
                placeholder="group"
                className={styles.group}
                prefix={<UserOutlined />}
              />
              <Input.Password
                placeholder="input password"
                className={styles.password}
                iconRender={(visible) =>
                  visible ? (
                    <EyeTwoTone className={styles.password} />
                  ) : (
                    <EyeInvisibleOutlined className={styles.password} />
                  )
                }
              />
              <Button
                type="primary"
                onClick={clickHandler}
                className={styles.button}
              >
                登陆
              </Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
