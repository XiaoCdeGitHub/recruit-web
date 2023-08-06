import React, { useEffect } from 'react'
import { Button, } from 'antd';
import { useDispatch, useSelector } from "react-redux"
import { Routes, Route, Link, Router } from 'react-router-dom'
// import {Backdrop} from '../../../../UI/Backdrop/Backdrop'
import { setList, } from '../../../../store/ResultSlice'
import PersonalInfo from './detail/detail'
export default function List() {
    const list = useSelector(state => state.list.list)
    //拿到的只是本账号进入之后可以拿到的list
    const BackUp = useSelector(state => state.list.BackUp)
    const list2 = BackUp.filter((itemObj) => {
        return itemObj.interviewer === "猪八戒"
    })
    const dispatch = useDispatch()
    const isAdmin = useSelector(state => state.list.isAdmin)
    const checkState = (id, checkState) => {
        // const index = list.findIndex(item => item.id === id)
        // const newList = ([...list], list[index].result = checkState)
        const newList = list.map(item => {
            const newItem = { ...item }
            if (newItem.id === id) {
                newItem.result = checkState;
            }
            return newItem;
        })
        // console.log(list[index].result)
        dispatch(setList(newList))
    }
    console.log(list)
    // 拿到list之后判断面试官姓名，经过过滤再渲染到页面上
    return (
        <>
            {
                isAdmin&&
                list.map(itemObj => {
                    return (
                        <tr key={itemObj.id}>
                            <td>{itemObj.name}</td>
                            <td>{itemObj.cardId}</td>
                            <td>{itemObj.interviewer}</td>
                            {/* 1.点击了其中任何一个，另一个都要保持或者变为未选中状态。2.将目前的状态返回服务器 */}
                            {/* 需要传一下id，明确对哪个进行操作 */}
                            <td>
                                <input type="checkbox" name="result" value={itemObj.result} checked={JSON.parse(itemObj.result)} onChange={() =>
                                    checkState(itemObj.id, 'true')
                                } />通过
                                <input type="checkbox" name="result" value={itemObj.result} checked={!JSON.parse(itemObj.result)} onChange={() =>
                                    checkState(itemObj.id, 'false')} />拒绝
                            </td>
                            <td><Link to={`personalInfo/${itemObj.id}`}><Button>详情页</Button></Link></td>
                        </tr>
                    )
                })
            }
            {
                !isAdmin&&
                list2.map(itemObj => {
                    return (
                        <tr key={itemObj.id}>
                            <td>{itemObj.name}</td>
                            <td>{itemObj.cardId}</td>
                            <td>{itemObj.interviewer}</td>
                            {/* 1.点击了其中任何一个，另一个都要保持或者变为未选中状态。2.将目前的状态返回服务器 */}
                            {/* 需要传一下id，明确对哪个进行操作 */}
                            <td>
                                <input type="checkbox" name="result" value={itemObj.result} checked={JSON.parse(itemObj.result)} onChange={() =>
                                    checkState(itemObj.id, 'true')
                                } />通过
                                <input type="checkbox" name="result" value={itemObj.result} checked={!JSON.parse(itemObj.result)} onChange={() =>
                                    checkState(itemObj.id, 'false')} />拒绝
                            </td>
                            <td><Link to={`personalInfo/${itemObj.id}`}><Button>详情页</Button></Link></td>
                        </tr>
                    )
                })
            }


            <div>

                <Routes>
                    <Route path='personalInfo/:id' element={<PersonalInfo />} >
                    </Route>
                </Routes>

            </div>
        </>

    )
}
