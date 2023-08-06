import styles from './buttona.module.css'
import { Button, Input, DatePicker, Form, Select, Space, Table, Tag  } from 'antd';
const { Column, ColumnGroup } = Table;
import  { useEffect, useState } from 'react';
import moment from "moment";
import "moment/locale/zh-cn"


20const ButtonA = () => {
  //发送post请求
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
          host : '',
          num: '',
          day:'',
          place: '',
          topic: '',
          speechName:''
        });
      })
      .catch(error => console.log(error));

  
//处理时间选择器
  function onChange(date, dateString) {
  this.setState( { day: dateString } );
    console.log(date, dateString);
    const day = dateString;
  }
  
  
  const [formData, setFormData] = useState({
    host : '',
    num: '',
    day:'',
    place: '',
    topic: '',
    speechName:''
  });
  //返回按钮
  const handleGoBack = (history) => {
        history.goBack();
      };

      //发送get请求
  useEffect(() => {
      fetch('地址') // 替换为你的GET请求地址
        .then(response => response.json())
        .then(data => setData(data));
    }, []);

  const setData = (data)=>{
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
      <Button onClick={handleGoBack} >返回</Button>
       <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      style={{ maxWidth: 600 } }
      
      >
         <Form.Item name="host" label="主讲人：" rules={[{ required: true }]}>
        <Input value={ formData.host } />
      </Form.Item>
        <Form.Item name="num" label="票数：" rules={[{ required: true }]}>
        <Input value={ formData.num}/>
      </Form.Item>
      <Form.Item label="时间">
        <DatePicker onChange={onChange}/>
        </Form.Item>
      <Form.Item label="地点">
        <Input value={ formData.place} />
      </Form.Item>
      <Form.Item label="主题">
        <Input value={ formData.topic}/>
      </Form.Item>
      <Form.Item label="名称">
        <Input value={ formData.speechName}/>
      </Form.Item>
        <Button onClick={sendData}>发布</Button>
    </Form>
    <div className={styles.boxtwo}>
        <table className={styles.tablebox}>
          <thead>
            <tr>
              <th>主讲人</th>
              <th>时间</th>
              <th>名称</th>
            <th>票数</th>
            <th>剩余票数</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ButtonA;