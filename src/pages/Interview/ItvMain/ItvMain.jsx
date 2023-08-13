/*
 * @Author: DoubleLiHao =2998000782@qq.com
 * @Date: 2023-08-04 18:42:16
 * @LastEditors: DoubleLiHao =2998000782@qq.com
 * @LastEditTime: 2023-08-13 17:54:59
 * @FilePath: \yzyy-web\src\pages\Interview\ItvMain\ItvMain.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styles from "./ItvMain.module.css";
import { ItvItem } from "../Component/ItvMain/ItvItem/ItvItem";
import { useSelector } from "react-redux";
import { Backdrop } from "../../../UI/Backdrop/Backdrop";
import { ItvAdress } from "../Component/ItvMain/ItvAdress/ItvAdress";
export const ItvMain = () => {
  const { isEnterBackdrop, addressData, chooseAddressId } = useSelector(
    (state) => state.interviewSlice
  );
  return (
    <>
      <div className={styles.box}>
        {addressData.map((item, index) => {
          return <ItvItem data={item} key={index}></ItvItem>;
        })}
      </div>

      {/* Backdrop遮罩层的使用 
            获取Rudex的state 对其进行判断是否展示
            利用Rudex使子组件可以对 state进行修改 在适当位置触发修改（展示/隐藏）
      */}
      {isEnterBackdrop && (
        <Backdrop>
          <ItvAdress></ItvAdress>
        </Backdrop>
      )}
    </>
  );
};
