import styles from './buttonb.module.css'
import { Button, Form, Input, Select, DatePicker } from 'antd';
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
  const ButtonB = () => {
    var box = document.getElementById("box")
    var table = document.createElement("table")
    var td = document.createElement("td")
    const OtherPage = ({ history }) => {
      const handleGoBack = () => {
        history.goBack();
      };
      return (
        <div>
          <Button onClick={handleGoBack}>返回</Button>
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            style={{ maxWidth: 600 }}
      
          >
            <Form.Item label="时间">
              <DatePicker />
            </Form.Item>
            <Form.Item label="容纳人数">
              <Input />
            </Form.Item>
            <Button>发布</Button>
          </Form>
          
          <div className={styles.boxtwo}>
            <table className={styles.tablebox}>
              <thead>
                <tr>
                  <th>时间</th>
                  <th>人数</th>
                  <th>已约</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>

          </div>
        </div>
      );
    }
  }

export default ButtonB;