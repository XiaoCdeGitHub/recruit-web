import styles from './ChangeBox.module.css'

import { useSelector, useDispatch } from 'react-redux'
import { changeDaySelected } from '../../../../store/timeTableSlice'

export default function ChangeBox() {
    const daySelected = useSelector(state => state.timeTableSlice.daySelected)
    const dispatch = useDispatch()

    function handleClickChangeBtn() {
        dispatch(changeDaySelected())
    }
    return (
        <>
            {
                daySelected === 'first' ? (
                    <div className={styles.changeBox}>
                        <button onClick={handleClickChangeBtn} className={styles.selected} disabled>第一天</button>
                        <button onClick={handleClickChangeBtn}>第二天</button>
                    </div>
                ) : (
                    <div className={styles.changeBox}>
                        <button onClick={handleClickChangeBtn}>第一天</button>
                        <button onClick={handleClickChangeBtn} className={styles.selected} disabled>第二天</button>
                    </div>
                )}
        </>
    );
}