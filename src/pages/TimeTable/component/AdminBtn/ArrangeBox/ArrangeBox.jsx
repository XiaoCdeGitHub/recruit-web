import styles from './Arrange.module.css'

import { handleFirstArrange, handleSecondArrange } from '../../../../../store/timeTableSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Arrange() {
    const dispatch = useDispatch()
    const firstData = useSelector(state => state.timeTableSlice.firstData)
    const secondData = useSelector(state => state.timeTableSlice.secondData)
    return (
        <div className={styles.arrangeBox}>
            <p>排班：</p>
            <button onClick={() => dispatch(handleFirstArrange())} disabled={firstData.length > 0}>第一天</button>
            <button onClick={() => dispatch(handleSecondArrange())} disabled={secondData.length > 0}>第二天</button>
        </div>
    )
}