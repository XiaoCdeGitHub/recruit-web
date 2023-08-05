import styles from './buttona.module.css'
import { Button, Input, DatePicker, Form, Select, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
interface DataType {
  key: string;
  people: string;
  time: number;
  name: string;
  num: number;
  endnum: number;
}
const columns: ColumnsType<DataType> = [
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
  },{
    title: '剩余票数',
    dataIndex: 'endnum',
    key: 'endnum',
  },]
const ButtonA = () => {
  return (
    <div>
      <Button>返回</Button>
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
      <Table columns={columns} dataSource={data} />;
    </div>
  );
};

export default ButtonA;