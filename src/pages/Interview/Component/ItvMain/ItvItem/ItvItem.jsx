/*
 * @Author: DoubleLiHao =2998000782@qq.com
 * @Date: 2023-08-04 18:03:25
 * @LastEditors: DoubleLiHao =2998000782@qq.com
 * @LastEditTime: 2023-08-13 17:42:59
 * @FilePath: \yzyy-web\src\pages\Interview\Component\ItvMain\ItvItem\ItvItem.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { AdressItem } from "./AdressItem/AdressItem";
import styles from "./ItvItem.module.css";

export const ItvItem = (props) => {
  const { startTime, endTime, addresses } = props.data;
  return (
    <div className={styles.itemBox}>
      <div className={styles.timerBox}>
        {startTime}~{endTime}
      </div>
      <div className={styles.adressBox}>
        {addresses.map((item, index) => (
          <AdressItem address={item} key={index}></AdressItem>
        ))}
      </div>
    </div>
  );
};
