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
      {isEnterBackdrop &&
        <Backdrop>
          <ItvAdress></ItvAdress>
        </Backdrop>
      }
    </>
  );
}