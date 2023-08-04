/*
 * @Author: DoubleLiHao =2998000782@qq.com
 * @Date: 2023-08-04 18:53:08
 * @LastEditors: DoubleLiHao =2998000782@qq.com
 * @LastEditTime: 2023-08-04 21:05:49
 * @FilePath: \yzyy-web\src\pages\Interview\Component\ItvMain\ItvAdress\ItvAdress.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { StuInfo } from "./StuInfo/StuInfo";
import styles from "./ItvAdress.module.css";
import {useDispatch} from 'react-redux'
import { hiddenBackdrop } from "../../../../../store/interviewSlice";
export const ItvAdress = () => {
  const dispatch = useDispatch()
  const clickHandler = () => {
    dispatch(hiddenBackdrop())
  };
  return (
    <div className={styles.box}>
      <div className={styles.cardBox}>
        <div className={styles.top}>
          <div className={styles.topTime}>时间：8:00~9:00</div>
          <div className={styles.topAdress}>地点：小十层</div>
        </div>
        <div className={styles.stuBox}>
          <StuInfo></StuInfo>
          <StuInfo></StuInfo>
          <StuInfo></StuInfo>
          <StuInfo></StuInfo>
          <StuInfo></StuInfo>
        </div>
        <div className={styles.bottom} onClick={clickHandler}>
          返回
        </div>
      </div>
    </div>
  );
};
