/*
 * @Author: DoubleLiHao =2998000782@qq.com
 * @Date: 2023-08-05 20:49:25
 * @LastEditors: DoubleLiHao =2998000782@qq.com
 * @LastEditTime: 2023-08-06 19:12:28
 * @FilePath: \yzyy-web\src\pages\Interview\Component\ItvStuForm\StuInfoDetail.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useNavigate } from "react-router-dom";
import styles from "./StuInfoDetail.module.css";
export const StuInfoDetail = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/interview");
  };
  return (
    <div className={styles.box}>
      <div className={styles.top}>
        <div className={styles.img}>
          <img />
        </div>
        <div className={styles.baseInfo}>
          <div>姓名：abc</div>
          <div>性别：male</div>
          <div>学号：20226</div>
        </div>
      </div>
      <div className={styles.otherInfo}>
        <div>是否参加过宣讲会：2</div>
        <div>专业：软件工程</div>
        <div>手机号：110</div>
        <div>邮箱号：110@qq.com</div>
      </div>
      <div className={styles.back} onClick={clickHandler}>
        <p>返回</p>
      </div>
    </div>
  );
};
