import { act, useReducer, useState } from "react";
import Amy from './Amy';
import { FruitContext } from "./FruitContext.jsx";

/**
 *                  1 - 子對父
 * u          +---------+    call method +---------+
 * p  d  +----|         |<---------------|         |
 * d  a  |    | Parent  |                |  Sister |
 * a  t  +--->|         |--------------->|         |
 * t  a       +---------+   give date    +---------+
 * e
 * 
 */

/**
 * const [state, dispatch] = useReducer(reducer, initialState);
 * state：目前的狀態值
 * dispatch(action)：發送動作給 reducer 來更新狀態
 * reducer(state, action)：處理 function，依據 action 的內容決定如何改變 state
 * initialState：初始狀態
 */

function FruitStore() {
    // const [apple, setApple] = useState(1);
    const [apple, appleDisPactch] = useReducer(reducer, 3);

    function reducer(state, action) {
        switch (action.type) {
            case 'buy':
                return state - action.value;
            case 'sell':
                return state + action.value;
            default:
                throw new Error();
        }
    }

    return (
        <>
            <div className="FruitStore">目前水果店有 [{apple}] 個蘋果</div>
            <FruitContext.Provider value={{ appleContext: apple, setAppleByDispatch: appleDisPactch }}>
                <Amy />
            </FruitContext.Provider>
        </>
    )
}

export default FruitStore;