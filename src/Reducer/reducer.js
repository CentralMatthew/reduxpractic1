import {createStore} from "redux";
import {Provider} from 'react-redux'
import Counter from "../components/Counter";

export default function Reducer() {
    const initialState = {
        counter: 0
    }
    const reducer = (state = initialState, action) => {
        switch (action.type) {
            case 'INC' : {
                return {
                    ...state,
                    counter: state.counter + 1
                }

            }
            case 'DEC' : {
                return {
                    ...state,
                    counter: state.counter - 1
                }
            }

            case 'INC_100' : {
                return {
                    ...state,
                    counter: state.counter + 100
                }
            }
            case 'DEC_100' : {
                return {
                    ...state,
                    counter: state.counter - 100
                }
            }
            default :
                return state
        }
    }


    const store = createStore(reducer)


    return (
        <div>
            <Provider store={store}>
                <Counter/>
            </Provider>

        </div>
)
}

