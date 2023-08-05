import React from 'react'
import styles from './detail.module.css'
// import { useGetPersonalInfoQuery } from '../../../../store/ResultApi';
import { useDispatch } from 'react-redux';
import { Button } from 'antd';
// import { hiddenBackdrop } from '../../../../store/ResultSlice'

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
  const dispatch = useDispatch()
  const goBack = () => {
    
  }
  return (
    <div className={styles.box} align="center">

      <table>
        <caption>段子的详细信息</caption>
        <tbody>
          <tr>
            <td>姓名：孙悟空</td>
            <td rowSpan="3"><img src="https://chibaoshaitaiyang-1316184616.cos.ap-beijing.myqcloud.com/R-C.jpg" alt="" /></td>
          </tr>
          <tr>
            <td>专业：软件工程</td>
            <td></td>
          </tr>
          <tr>
            <td>学号：2022005186</td>
            <td></td>
          </tr>
          <tr>
            <td colSpan="2">面试官：小王子</td>
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
            <td colSpan="2">面评：5分</td>
            <td></td>
          </tr>
          <tr>
            <td colSpan="2">最终分数：4分</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <Button onClick={goBack}>返回</Button>
    </div>
  )
}
