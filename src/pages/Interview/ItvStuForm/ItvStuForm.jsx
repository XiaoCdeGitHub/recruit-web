/*
 * @Author: DoubleLiHao =2998000782@qq.com
 * @Date: 2023-08-05 20:12:55
 * @LastEditors: DoubleLiHao =2998000782@qq.com
 * @LastEditTime: 2023-08-06 18:37:39
 * @FilePath: \yzyy-web\src\pages\Interview\ItvStuForm\ItvStuForm.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useNavigate } from "react-router-dom";
import { Backdrop } from "../../../UI/Backdrop/Backdrop";
import styles from "./ItvStuForm.module.css";
import { StuInfoDetail } from "../Component/ItvStuForm/StuInfoDetail";
import {StuComment} from '../Component/ItvStuForm/StuComment'
export const ItvStuForm = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/interview");
  };
  return (
    <Backdrop>
      <div className={styles.box}>
        <div className={styles.detailBox}>
          <StuInfoDetail></StuInfoDetail>
        </div>
        <div className={styles.commentBox}>
          <StuComment></StuComment>
        </div>
      </div>
    </Backdrop>
  );
};
