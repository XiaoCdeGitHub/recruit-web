import { useNavigate } from 'react-router-dom';
import styles from './StuInfoDetail.module.css'
export const StuInfoDetail = () => {
    const navigate = useNavigate()
    const clickHandler = () => {
        navigate('/interview')
    }
    return (
      <div className={styles.box}>
        <div className={styles.top}>
          <div className={styles.img}>
            <img/>
          </div>
          <div className={styles.baseInfo}>
            <div>姓名：abc</div>
            <div>性别：male</div>
            <div>学号：2022006666</div>
          </div>
            </div>
            <div className={styles.otherInfo}>
                <div>是否参加过宣讲会：2</div>
                <div>专业：软件工程</div>
                <div>手机号：110</div>
                <div>邮箱号：110@qq.com</div>
            </div>
            <div className={styles.back} onClick={clickHandler}><p>返回</p></div>
      </div>
    );
}