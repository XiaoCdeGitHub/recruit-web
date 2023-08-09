/*
 * @Author: DoubleLiHao =2998000782@qq.com
 * @Date: 2023-08-06 18:34:41
 * @LastEditors: DoubleLiHao =2998000782@qq.com
 * @LastEditTime: 2023-08-06 19:09:21
 * @FilePath: \yzyy-web\src\pages\Interview\Component\ItvStuForm\StuComment.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styles from "./StuComment.module.css";
import { Rate } from "antd";
export const StuComment = () => {
  return (
    <>
      <div className={styles.bigBox}>
        <div className={styles.formBox}>
          <div className={styles.itvName}>
            <input type="text" placeholder="面试官1/面试官2" />
          </div>
          <div className={styles.record}></div>
          <div className={styles.comment}></div>
          <div className={styles.score}></div>
        </div>
        <div className={styles.button}>
          <p>提交</p>
        </div>
      </div>
    </>
  );
};
