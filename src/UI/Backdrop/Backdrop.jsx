import { createPortal } from 'react-dom'
import styles from './Backdrop.module.css'
export const Backdrop = (props) => {
    const backdropDom = document.getElementById('backdrop')
    const template = (
         <div className={styles.box}>
            {props.children}
        </div>
    )
    return createPortal(template,backdropDom)
}

