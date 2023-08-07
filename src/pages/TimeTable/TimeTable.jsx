import styles from './TimeTable.module.css'

import { useSelector } from 'react-redux'

import ChangeBox from './component/ChangeBox/ChangeBox'
import SearchBox from './component/SearchBox/SearchBox'
import ScheTable from './component/ScheTable/ScheTable'
import AdminBtn from './component/AdminBtn/AdminBtn'

export const TimeTable = () => {
    // const isAdmin = useSelector(state => state.loginInfoSlice.isSuperAdmin)
    const isAdmin = true

    return (
        <div className={styles.timeTableBox}>
            <ChangeBox />
            <SearchBox/>
            <ScheTable/>
            {isAdmin && <AdminBtn />}
        </div>
    )
}