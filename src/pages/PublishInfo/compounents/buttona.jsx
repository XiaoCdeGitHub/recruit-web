import styles from './buttona.module.css'
import { Button, Input, DatePicker, Form, Select, Space, Table, Tag  } from 'antd';
const { Column, ColumnGroup } = Table;

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
  }

var data  = [
  {
    title: '主讲',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '时间',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '票数',
    dataIndex: 'num',
    key: 'num',
  }, {
    title: '剩余票数',
    dataIndex: 'endnum',
    key: 'endnum',
  },];
  const ButtonA = () => {
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
      <Button onClick={handleGoBack} >返回</Button>
       <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      style={{ maxWidth: 600 } }
      
      >
         <Form.Item name="host" label="主讲人：" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
        <Form.Item name="num" label="票数：" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="时间">
        <DatePicker />
        </Form.Item>
      <Form.Item label="地点">
        <Select>
          <Select.Option value="demo">数港基地</Select.Option>
            <Select.Option value="demo">逸庐基地</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="主题">
        <Input />
      </Form.Item>
      <Form.Item label="名称">
        <Input />
      </Form.Item>
        <Button>发布</Button>
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