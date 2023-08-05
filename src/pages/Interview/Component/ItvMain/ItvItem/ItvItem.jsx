/*
 * @Author: DoubleLiHao =2998000782@qq.com
 * @Date: 2023-08-04 18:03:25
 * @LastEditors: DoubleLiHao =2998000782@qq.com
 * @LastEditTime: 2023-08-04 20:59:36
 * @FilePath: \yzyy-web\src\pages\Interview\Component\ItvMain\ItvItem\ItvItem.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { AdressItem } from "./AdressItem/AdressItem";
import styles from "./ItvItem.module.css";

export const ItvItem = () => {
  return (
    <div className={styles.itemBox}>
      <div className={styles.timerBox}>8:00~9:00</div>
      <div className={styles.adressBox}>
        <AdressItem></AdressItem>
        <AdressItem></AdressItem>
        <AdressItem></AdressItem>
        <AdressItem></AdressItem>
        <AdressItem></AdressItem>
        <AdressItem></AdressItem>
        <AdressItem></AdressItem>
      </div>
    </div>
  );
};
