import { useDispatch, useSelector } from 'react-redux'
import styles from './Interview.module.css'
import { Button } from 'antd'
import { setName } from '../../store/testSlice'

export const Interview = () => {
    const { name } = useSelector(state => state.testSlice)
    const dispatch = useDispatch()
    const clickHandler = () => { 
        dispatch(setName())
    };
    return <div className={styles.box}>我是面试主页
        <Button ghost='true' onClick={clickHandler}>我是Antd组件</Button>
        <p>{ name }</p>
    </div>
}