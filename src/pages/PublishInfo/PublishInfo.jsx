/*
 * @Author: DoubleLiHao =2998000782@qq.com
 * @Date: 2023-08-02 20:33:02
 * @LastEditors: DoubleLiHao =2998000782@qq.com
 * @LastEditTime: 2023-08-10 10:25:59
 * @FilePath: \yzyy-web\src\pages\PublishInfo\PublishInfo.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styles from './PublishInfo.module.css'
import {  Space } from 'antd';
import {Outlet, useNavigate} from 'react-router-dom'

export const PublishInfo = () => {
    const navigate = useNavigate()
    const isExit = 0;
    isExit = 1;
    const clickButton = (e) => {
        if (isExit ==1) {
            isExit = 0;
        }else isExit=1
        navigate(e.target.getAttribute("router"));
        console.log(e.target.getAttribute("router"));
    }
    return (
        <div className={styles.box} >我要发布信息 
        <br />  
          
        <Space direction="vertical">
            { isExit && <button  onClick={clickButton} router="topic">宣讲会信息</button>} 
            {isExit && <button onClick={clickButton} router="book">开放预约面试</button>}
            {isExit && <button onClick={clickButton} router="place">开放面试地点</button>}
        </Space>
        <div className={styles.container}>
            <Outlet></Outlet>
         </div>
    </div> 
    
    )
}