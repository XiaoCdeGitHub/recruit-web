import React from 'react'
import styles from './detail.module.css'
// import { useGetPersonalInfoQuery } from '../../../../store/ResultApi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd';
import { useParams } from 'react-router-dom';
import { hiddenBackdrop } from '../../../../../store/ResultSlice'
export default function PersonalInfo() {
  // 传入指定id的人的信息
  // const result=useGetPersonalInfoQuery(null,{
  // selectFromResult:result=>{
  //   if(){
  // result.data=result.data.filter(itemObj=>
  //   itemObj.attributes.id===
  //   )
  //   }
  // }
  // })
  //点击隐藏遮罩层
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/result',{replace:true});
    dispatch(hiddenBackdrop())
  }
  
  const { id } = useParams()
  const list = useSelector(state => state.list.list)
  const personalInfo = list.find(itemObj => itemObj.id === id)
  return (
    <div className={styles.box} align="center">
      {
       <>
        <div className={styles.title}> <h3 >{personalInfo.name}的详细信息</h3></div>
        <table className={styles.secondTable}>
          <tbody>
            <tr>
              <td>姓名：{personalInfo.name}</td>
              <td rowSpan="3"><img src="https://chibaoshaitaiyang-1316184616.cos.ap-beijing.myqcloud.com/R-C.jpg" alt="" /></td>
            </tr>
            <tr>
              <td>专业：{personalInfo.subject}</td>
              <td></td>
            </tr>
            <tr>
              <td>学号：{personalInfo.cardId}</td>
              <td></td>
            </tr>
            <tr>
              <td colSpan="2">面试官：{personalInfo.interviewer}</td>
              <td></td>
            </tr>
            <tr >
              <td rowSpan="3" colSpan="2"><label style={{ verticalAlign: "middle" }} htmlFor="textarea">面试记录：</label><textarea style={{ verticalAlign: "middle" }} id="textarea"></textarea></td>
              <td rowSpan="3"></td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td colSpan="2">面评:{personalInfo.review}</td>
              <td></td>
            </tr>
            <tr>
              <td colSpan="2">最终分数：{personalInfo.count}</td>
              <td></td>
            </tr>
          </tbody>
        </table></>
      }
      <Button onClick={goBack} className={styles.goBack}>返回</Button>
    </div>
  )
}
