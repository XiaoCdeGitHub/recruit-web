import React from 'react'
import styles from './header.module.css'
import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setList } from '../../../../store/ResultSlice'
export default function Header() {
    const isAdmin = useSelector(state => state.list.isAdmin)
    // const list = useSelector(state => state.list.list)
    // 原来的数组别动
    const BackUp =useSelector(state=>state.list.BackUp)
    const dispatch = useDispatch()
    const nameSearch = useRef()
    const nameChange = () => {
        const newList = BackUp.filter((itemObj) => {
            if (itemObj.name.includes(nameSearch.current.value)) 
            {
                return itemObj
            }
        })
        dispatch(setList(newList))
    }
    const interviewerSearch = useRef()
    const interviewerChange = () => {
        const newList = BackUp.filter((itemObj) => {
            return itemObj.interviewer.includes(interviewerSearch.current.value)
        })
        dispatch(setList(newList))
    }
    const idSearch = useRef()
    const idChange = () => {
        const newList = BackUp.filter((itemObj) => {
            return itemObj.cardId.includes(idSearch.current.value)
        })
        dispatch(setList(newList))
    }
    return (
        <div>
            {
                isAdmin &&
                <div className={styles.adminHeader}>
                    {/*模糊搜索列表内的内容 */}
                    <div>
                        <label>姓名</label>
                        <input type="text" placeholder='通过姓名查找学生' ref={nameSearch} onChange={nameChange} />
                    </div>
                    <div>
                        <label>面试官</label>
                        <input type="text" placeholder='通过面试官查找学生' ref={interviewerSearch} onChange={interviewerChange} />
                    </div>
                    <div>
                        <label>学号</label>
                        <input type="text" placeholder='通过学号查找学生' ref={idSearch} onChange={idChange} />
                    </div>
                </div>
            }
            {
                !isAdmin && <h3 className={styles.userHeader}>我面试的学员</h3>
            }
        </div>
    )
}
