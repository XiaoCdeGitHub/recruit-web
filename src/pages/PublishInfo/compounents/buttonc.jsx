import styles from './buttonc.module.css'
import { Button, DatePicker, Form, Select } from 'antd';

const OtherPage = ({ history }) => {
    const handleGoBack = () => {
      history.goBack();
  };
  

  const HomePage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data') // 替换为你的GET请求地址
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
    
    
    
    const ButtonC = () => {
    var  setData=(data)=>{
        var tbody=document.querySelector('tbody');
    for(var i=0;i<data.length;i++){
        var tr=document.createElement('tr');
        tbody.appendChild(tr);
        for(var key in data[i]){
            var td=document.createElement('td');
            td.innerHTML=data[i][key];
            tr.appendChild(td);
        }
        
        var td =document.createElement('td');
        td.innerHTML='<a href="javascript:;">删除</a>';
        tr.appendChild(td);
    }
    var as=document.querySelectorAll('a');
    for(var i=0;i<as.length;i++){
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
        <DatePicker />
        </Form.Item>
      <Form.Item label="地点">
        <Select>
          <Select.Option value="demo">数港基地</Select.Option>
            <Select.Option value="demo">逸庐基地</Select.Option>
        </Select>
        </Form.Item>
        <Button>发布</Button>
      </Form>
      
     <table border="1" cellspacing='0'>
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