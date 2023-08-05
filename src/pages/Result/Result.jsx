import { useState, useEffect, useRef } from 'react'
import styles from './Result.module.css'
import Header from './component/Header/header'
import List from './component/list/list'
import Foot from './component/foot/foot';
export const Result = () => {
    return (
        <div className={styles.box}>
            <div>
                <Header/>
                <div className={styles.table} align="center">
                    <table>
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
              
            </div>
        </div>
    )
}