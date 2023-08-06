import styles from './AdminBtn.module.css'

import { useSelector, useDispatch } from 'react-redux'
import { changeIsGroupChange,changeSelectedGroup } from '../../../../store/TimeTableSlice'

export default function AdminBtn() {
    const isGroupChange = useSelector(state => state.timeTableSlice.isGroupChange)
    const selectedGroup = useSelector(state => state.timeTableSlice.selectedGroup)
    const dispatch = useDispatch()

    return (
        <div className={styles.adminBtn}>
            <div className={styles.changeBox}>
                {isGroupChange ? (<>
                    <button
                        onClick={() => {
                            dispatch(changeIsGroupChange())
                            dispatch(changeSelectedGroup([]))
                        }}
                        disabled={selectedGroup.length < 2}
                        className={styles.selected}>
                        确认
                    </button>
                    <button
                        onClick={() => {
                            dispatch(changeIsGroupChange())
                            dispatch(changeSelectedGroup([]))
                        }}>
                        取消
                    </button>
                </>) :
                    <button
                        onClick={() => { dispatch(changeIsGroupChange()) }}>
                        换班
                    </button>
                }
            </div>
            <div className={styles.arrangeBox}>
                <span>排班：</span>
                <button>第一天</button>
                <button>第二天</button>
            </div>
        </div>
    );
}