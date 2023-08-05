import styles from './buttonc.module.css'
import { Button,DatePicker,Form,Select } from 'antd';

const ButtonC = () => {
  return (
    <div>
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

      
    </div>
  );
};

export default ButtonC;