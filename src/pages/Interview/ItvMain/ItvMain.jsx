import styles from "./ItvMain.module.css";
import { ItvItem } from "../Component/ItvMain/ItvItem/ItvItem";
import { useSelector } from 'react-redux'
import { Backdrop } from "../../../UI/Backdrop/Backdrop";
import { ItvAdress } from "../Component/ItvMain/ItvAdress/ItvAdress";
export const ItvMain = () => {
  const {isEnterBackdrop} = useSelector(state => state.interviewSlice)
  return (
    <>
      <div className={styles.box}>
        <ItvItem></ItvItem>
        <ItvItem></ItvItem>
        <ItvItem></ItvItem>
        <ItvItem></ItvItem>
        <ItvItem></ItvItem>
        <ItvItem></ItvItem>
        <ItvItem></ItvItem>
        <ItvItem></ItvItem>
      </div>

      {/* Backdrop遮罩层的使用 
            获取Rudex的state 对其进行判断是否展示
            利用Rudex使子组件可以对 state进行修改 在适当位置触发修改（展示/隐藏）
      */}
      {isEnterBackdrop &&
        <Backdrop>
          <ItvAdress></ItvAdress>
        </Backdrop>
      }
    </>
  );
}