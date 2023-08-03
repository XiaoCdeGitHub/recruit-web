import styles from './Main.module.css'
import {Outlet, useNavigate} from 'react-router-dom'
export const Main = () => {
    const navigate = useNavigate()
    const clickHandler = (e) => {
        navigate(e.target.getAttribute("router"));
    }
    return (
        <div className={styles.box}>
            <div className={styles.bar} onClick={clickHandler}>
                <div router= "/">主页</div>
                <div router= "/publish">信息发布</div>
                <div router= "/interview">面试主页</div>
                <div router="/result">面试结果</div>
                <div router="/timetable">面试排班</div>
            </div>
            <div className={styles.container}>
                <Outlet></Outlet>
            </div>
        </div>
    )
}