import styles from './buttonc.module.css'
import { Button, DatePicker, Form, Select, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import moment from "moment";
import "moment/locale/zh-cn"
    
    
    
const ButtonC = () => {
 
  //发送数据
  const sendData = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };//地址
    fetch('地址', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestData)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setFormData({
          time:'',
          place: '',
          speechName:''
        });
      })
      .catch(error => console.log(error));

  
//处理时间选择器
  function onChange(date, dateString) {
  this.setState( { day: dateString } );
    console.log(date, dateString);
    const time = dateString;
  }

  useEffect(() => {
    fetch('https://api.example.com/data') // 替换为你的GET请求地址
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
  //返回
  
  const [formData, setFormData] = useState({
    time:'',
    place: '',
      speechName:''
  });


  const handleGoBack = ({ history }) => {
      history.goBack();
  }; 

  useEffect(() => {
      fetch('地址') // 替换为你的GET请求地址
        .then(response => response.json())
        .then(data => setData(data));
    }, []);

  const  setData=(data)=>{
        const tbody=document.querySelector('tbody');
    for(const i=0;i<data.length;i++){
        const tr=document.createElement('tr');
        tbody.appendChild(tr);
        for(const key in data[i]){
            const td=document.createElement('td');
            td.innerHTML=data[i][key];
            tr.appendChild(td);
        }
        
        const td =document.createElement('td');
        td.innerHTML='<a href="javascript:;">删除</a>';
        tr.appendChild(td);
    }
    const as=document.querySelectorAll('a');
    for(const i=0;i<as.length;i++){
        as[i].onclick=function(){
            tbody.removeChild(this.parentNode.parentNode);
        }
    } 
  }
  

  return (
    <div>
      <Button onClick={handleGoBack}>返回</Button>
      <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      style={{ maxWidth: 600 } } 
      >
        <Form.Item label="时间">
        <DatePicker onChange={onChange}/>
        </Form.Item>
        <Form.Item label="地点">
          <Input value={formData.place} />
        <Select>
          <Select.Option value="formData.demo">数港基地</Select.Option>
        </Select>
        </Form.Item>
        <Button onClick={sendData}>发布</Button>
      </Form>
      
     <table border="1" >
        <thead>
        <tr>
            <th>地点</th>
            <th>时间</th>
            <th>操作</th>
        </tr>
        </thead>
        <tbody>
 
        </tbody>

    </table>


      
    </div>
  );
};

export default ButtonC;