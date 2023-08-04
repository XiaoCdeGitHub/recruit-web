/*
 * @Author: DoubleLiHao =2998000782@qq.com
 * @Date: 2023-08-04 18:09:44
 * @LastEditors: DoubleLiHao =2998000782@qq.com
 * @LastEditTime: 2023-08-04 21:20:34
 * @FilePath: \yzyy-web\src\pages\Interview\Component\ItvMain\AdressItem\AdressItem.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styles from "./AdressItem.module.css";
import { useDispatch } from "react-redux";
import { showBackdrop } from "../../../../../../store/interviewSlice";
export const AdressItem = () => {
  // 展示遮罩层
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(showBackdrop());
  };

  return (
    <div className={styles.box} onClick={clickHandler}>
      东区小十层
    </div>
  );
};
