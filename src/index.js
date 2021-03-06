import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

// const initialState = {
//     counter: 0
// }

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'INC' : {
//             return {
//                 ...state,
//                 counter: state.counter + 1
//             }
//
//         }
//         case 'DEC' : {
//             return {
//                 ...state,
//                 counter: state.counter - 1
//             }
//         }
//
//         case 'INC_100' : {
//             return {
//                 ...state,
//                 counter: state.counter + 100
//             }
//         }
//         case 'DEC_100' : {
//             return {
//                 ...state,
//                 counter: state.counter - 100
//             }
//         }
//         default :
//             return state
//     }
// }
//
//
// const store = createStore(reducer)




ReactDOM.render(
    <React.StrictMode>
            <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();