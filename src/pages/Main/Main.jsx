import styles from './Main.module.css'
import {Outlet} from 'react-router-dom'
export const Main = () => {
    return (
        <div className={styles.box}>
            <div className={styles.bar}>
                <div>主页</div>
                <div>信息发布</div>
                <div>面试主页</div>
                <div>面试结果</div>
                <div>面试排班</div>
            </div>
            <div className={styles.container}>
                <Outlet></Outlet>
            </div>
        </div>
    )
}