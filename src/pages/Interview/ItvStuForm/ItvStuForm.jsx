import { useNavigate } from "react-router-dom";
import { Backdrop } from "../../../UI/Backdrop/Backdrop";
import styles from './ItvStuForm.module.css'
import { StuInfoDetail } from "../Component/ItvStuForm/StuInfoDetail";
export const ItvStuForm = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/interview");
  };
  return (
    <Backdrop>
          <div className={styles.box}>
              <div className={styles.detailBox}>
                  <StuInfoDetail></StuInfoDetail>
              </div>
              <div className={styles.commentBox}></div>
          </div>
    </Backdrop>
  );
};
