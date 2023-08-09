import styles from './ShowInfo.module.css'

import Number from './components/Number';
import Date from './components/Date';
import Gender from './components/Gender';
import NumShow from './components/NumShow';

import { useGetNumberQuery } from '../../store/showInfoApi';

export const ShowInfo = () => {
  //获取number数据
  // const { data: number } = useGetNumberQuery()
  const number = [[567, '开发'],[123, '设计'],[88, '秘书处']]
  const appliNum = 680
  const submitNum = 450
  const genders = [[484, 200],[49, 68],[35, 52]]
  const dates = {
    date: ['9.10', '9.11', '9.12', '9.13', '9.14', '9.15', '9.16', '9.17', '9.18'],
    number: [158, 116, 105, 168, 125, 175, 183]
  }

  return (
    <div className={styles.chartBox}>
      <div className={styles.chart1}>
        <Number title={'各方向报名人数'} number={number}/>
      </div>
      <div className={styles.chart2}>
        <div className={styles.numsBox}>
          <NumShow title={'报名人数'} num={appliNum} />
          <NumShow title={'申请书提交人数'} num={submitNum} />
        </div>
        <div className={styles.genderBox}>
          <h2>各方向男女比</h2>
          <div className={styles.genders}>
            <Gender title={'开发'} data={genders[0]}/>
            <Gender title={'设计'} data={genders[1]} />
            <Gender title={'秘书处'} data={genders[2]} />
          </div>
        </div>
      </div>
      <div className={styles.chart3}>
        <Date title={'报名情况'} dates={dates} />
      </div>
    </div>
  );
};