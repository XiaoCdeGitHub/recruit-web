/*
 * @Author: DoubleLiHao =2998000782@qq.com
 * @Date: 2023-08-04 19:56:34
 * @LastEditors: DoubleLiHao =2998000782@qq.com
 * @LastEditTime: 2023-08-05 20:11:07
 * @FilePath: \yzyy-web\src\pages\Interview\Component\ItvMain\ItvAdress\StuInfo\StuInfo.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useNavigate } from "react-router-dom";
import styles from "./StuInfo.module.css";
export const StuInfo = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate('/interview/stuform')
  };
  return (
    <div className={styles.box} onClick={clickHandler}>
      <div className={styles.infoName}>姓名</div>
      <div className={styles.infoName}>性别</div>
      <div className={styles.profession}>专业</div>
      <div className={styles.state}>状态</div>
    </div>
  );
};
