import styles from '../ShowInfo.module.css' 

export default function NumShow({title,num}) {
    return (
        <div className={styles.numBox}>
            <h2>{title}</h2>
            <div className={styles.num}>{num}</div>
        </div>       
    );
}