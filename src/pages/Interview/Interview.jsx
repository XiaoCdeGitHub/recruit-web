import { useDispatch, useSelector } from 'react-redux'
import {Outlet} from 'react-router-dom'
import { setName } from '../../store/testSlice'

export const Interview = () => {
    const { name } = useSelector(state => state.testSlice)
    const dispatch = useDispatch()
    const clickHandler = () => { 
        dispatch(setName())
    };
    return (
      <>
        <Outlet></Outlet>
      </>
    );
}