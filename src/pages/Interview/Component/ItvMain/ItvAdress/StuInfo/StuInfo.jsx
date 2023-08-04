import styles from './StuInfo.module.css'
export const StuInfo = () => {
    return (
          <div className={styles.box}>
            <div className={styles.infoName}>姓名</div>
            <div className={styles.infoName}>性别</div>
            <div className={styles.profession}>专业</div>
            <div className={styles.state}>状态</div>
          </div>   
    )
}