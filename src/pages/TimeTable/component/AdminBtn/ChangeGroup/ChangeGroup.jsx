import styles from './ChangeGroup.module.css'

import { changeIsGroupChange, changeSelectedGroup } from '../../../../../store/timeTableSlice';
import { useDispatch, useSelector } from 'react-redux';

import { useExchangeGroupMutation } from '../../../../../store/timeTableApi';

export default function Change() {
    const dispatch = useDispatch()
    const isGroupChange = useSelector(state => state.timeTableSlice.isGroupChange)
    const selectedGroup = useSelector(state => state.timeTableSlice.selectedGroup)
    const [exchangeGroup] = useExchangeGroupMutation()

    return (
        <div className={styles.changeBox}>
            {isGroupChange ? (<>
                <button
                    onClick={() => {
                        exchangeGroup(selectedGroup)
                        dispatch(changeIsGroupChange())
                        dispatch(changeSelectedGroup([]))
                    }}
                    disabled={selectedGroup.length < 2}
                    className={styles.selected}>
                    确认
                </button>
                <button
                    onClick={() => {
                        dispatch(changeIsGroupChange())
                        dispatch(changeSelectedGroup([]))
                    }}>
                    取消
                </button>
            </>) :
                <button onClick={() => { dispatch(changeIsGroupChange()) }}>换班</button>
            }
        </div>
    );
}