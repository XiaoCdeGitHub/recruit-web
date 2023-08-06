/*
 * @Author: dongheheyeye 119031939+dongheheyeye@users.noreply.github.com
 * @Date: 2023-08-04 10:11:05
 * @LastEditors: dongheheyeye 119031939+dongheheyeye@users.noreply.github.com
 * @LastEditTime: 2023-08-06 10:36:15
 * @FilePath: \dom\recruit-web\src\pages\Login\Login.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styles from './Login.module.css'
import React from 'react'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import {Input, Space,Button} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { usePostLoginMutation } from '../../store/loginApi';
import { enterSuperAdmin,notSuperAdmin,setGroupId } from '../../store/loginInfoSlice';
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [postLoginInfo, message] = usePostLoginMutation()
    //post请求返回一个函数，一个存储信息的对象
    const clickHandler = ()=>{
        postLoginInfo()
        console.log(message);
        //判断账号密码是错误
        if(false){

            return
        }
        //判断是否为超级管理员
        if(message){
            dispatch(enterSuperAdmin())
        }
        else{
            dispatch(notSuperAdmin())
            dispatch(setGroupId())
        }
        navigate('/',{replace:true})
    }
    return(
        <React.Fragment>
            <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.content}>
                        <div className={styles.content_left}>left</div>
                        <div className={styles.content_right}>
                            <div className={styles.input_container}>
                                <Input placeholder="groupId" className={styles.groupId}
                                prefix={<UserOutlined />} type="number" />
                                <Space direction="vertical">
                                    <Input.Password className={styles.password}
                                    placeholder="password"
                                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
                                </Space>
                                {/* <button  onClick={ clickHandler }>登陆</button> */}
                                <Space direction="vertical" onClick={clickHandler} className={styles.button}
                                style={{ width: '25%'}}>
                                    <Button type="primary" className={styles.button} block>
                                    登陆
                                    </Button>
                                </Space>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}