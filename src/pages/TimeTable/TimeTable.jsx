import styles from './TimeTable.module.css'

import { useSelector, useDispatch } from 'react-redux'
import { changeDaySelected, handleSearch } from '../../store/TimeTableSlice'

import {Input} from 'antd'
const { Search } = Input

import ScheTable from './component/ScheTable/ScheTable'
import AdminBtn from './component/AdminBtn/AdminBtn'

export const TimeTable = () => {
    const daySelected = useSelector(state => state.timeTableSlice.daySelected)
    const dispatch = useDispatch()

    const isAdmin = true

    function onSearch(value) {
        dispatch(handleSearch(value))
    }

    function handleClickChangeBtn() {
        dispatch(changeDaySelected())
    }

    return (
        <div className={styles.box}>
        {
            daySelected.first ? (
             <div className={styles.changeBox}>
                <button onClick={handleClickChangeBtn} className={styles.selected} disabled>
                    第一天
                </button>
                <button onClick={handleClickChangeBtn}>
                    第二天
                </button>
            </div>
        ): (
            <div className={styles.changeBox}>
                <button onClick={handleClickChangeBtn}>第一天</button>
                <button onClick={handleClickChangeBtn} className={styles.selected} disabled>第二天</button>
            </div>
        )}
            <Search
                placeholder="输入组号查询相关信息"
                onSearch={onSearch}
                className={styles.searchBox}
                size='large'
            />
            <ScheTable/>
            {isAdmin && <AdminBtn />}
        </div>
    )
}