import { Routes, Route, Link } from 'react-router-dom'
import styles from './Result.module.css'
import { Backdrop } from "../../UI/Backdrop/Backdrop";
import { useSelector } from 'react-redux';
import Header from './component/Header/header'
import List from './component/list/list'
import Foot from './component/foot/foot';
import PersonalInfo from '../Result/component/list/detail/detail'
export const Result = () => {
 const isEnterBackdrop=useSelector(state=>state.list.isEnterBackdrop)
    return (
        <div className={styles.box}>
            <div>
                <Header />
                <div className={styles.table} align="center">
                    <table className={styles.firstTable}>
                        <caption>面试学员信息</caption>
                        <tr>
                            <td>姓名</td>
                            <td>学号</td>
                            <td>面试官</td>
                            <td>结果</td>
                            <td>详情信息</td>
                        </tr>
                        <List />
                    </table>
                </div>
                <Foot />

                {
                    isEnterBackdrop &&
                    <div>
                        <Backdrop>
                            <Routes>
                                <Route path='personalInfo/:id' element={<PersonalInfo />} >
                                </Route>
                            </Routes>
                        </Backdrop>
                    </div>
                }


            </div>
        </div>
    )
}