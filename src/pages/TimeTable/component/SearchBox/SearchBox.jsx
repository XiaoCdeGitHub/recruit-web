import styles from './SearchBox.module.css'

import { useDispatch } from 'react-redux'
import { handleSearch } from '../../../../store/timeTableSlice'

import { Input } from 'antd'
const { Search } = Input

export default function SearchBox() {
    const dispatch = useDispatch()

    function onSearch(value) {
        dispatch(handleSearch(value))
    }

    return (
        <Search
            placeholder="输入组号查询相关信息"
            onSearch={onSearch}
            className={styles.searchBox}
            size='large'
        />
    );
}