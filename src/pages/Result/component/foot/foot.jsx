import React from 'react'
import styles from './foot.module.css'
import { Button, } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { handlePassView } from '../../../../store/ResultSlice'
import { useSubmitAdminListMutation } from '../../../../store/ResultApi';
export default function Foot() {
    const list1 = useSelector(state => state.list)
    const list = list1.list
    const dispatch = useDispatch()
    const passView = () => {
        // 可以拿到list了,不过变成了一个对象
        const newList = list.filter(itemObj => {
            return itemObj.result === 'true'
        })
        dispatch(handlePassView(newList))
    }
        // useMutation返回的是数组
        const[handlePassSubmit,outcom]= useSubmitAdminListMutation()
        const passSubmit=()=>{
            // console.log(list) 
            handlePassSubmit(list)
        }
    return (
        <div >
            <div className={styles.leftButton}>
                <Button onClick={passView}>仅显示通过列表</Button>
                {/* 点击了之后，只显示value为真的item，过滤生成新数组 */}
            </div>
            <div className={styles.rightButton}>
                <Button onClick={passSubmit}>确认名单并提交</Button>
            </div>
        </div>
    )
}
