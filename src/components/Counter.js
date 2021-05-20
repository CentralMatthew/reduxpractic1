import {useSelector, useDispatch} from "react-redux";

export default function Counter () {
    const counter = useSelector((state) => state.counter)
    console.log(counter);
    const dispatch = useDispatch()
    const inc = () => {
        dispatch({type: 'INC'})
    }
    const dec = () => {
        dispatch({type: 'DEC'})
    }
    const inc100 = () => {
        dispatch({type: 'INC_100'})
    }
    const dec100 = () => {
        dispatch({type: 'DEC_100'})
    }

    return (
         <div>
             <h1>Counter : {counter}</h1>
             <button onClick={inc}>+1</button>
             <button onClick={dec}>-1</button>
             <button onClick={inc100}>+100</button>
             <button onClick={dec100}>-100</button>

         
         </div>
    )
}