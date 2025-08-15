import { useContext } from "react";
import { FruitContext } from "./FruitContext.jsx";

function Amy() {
    const fruitInfo = useContext(FruitContext);
    return (
        <div className="Amy">
            Amy看到了 [{fruitInfo.appleContext}] 個蘋果
            <br />
            <button onClick={() => { fruitInfo.setAppleByDispatch({ type: 'buy', value: 1 }) }}>買一個蘋果</button>
            <button onClick={() => { fruitInfo.setAppleByDispatch({ type: 'sell', value: 1 }) }}>賣一個蘋果</button>
        </div>
    )
}

export default Amy;