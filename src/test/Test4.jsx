import { useEffect, useState } from "react";


const Progress = () => {

    const [percent, changePercant] = useState("30%");
    useEffect(() => {
        console.log(percent);
    }, [percent]);

    const addProgress = () => {
        const current = parseInt(percent);
        changePercant(Math.min(100, current + 5) + "%");
    }

    function reduceProgress(){
        const current = parseInt(percent);
        const newCurrent = Math.max(0, current-5);
        changePercant(newCurrent + "%");
    }

    return (
        <div>
            <div className="progress-back" style={{ backgroundColor: "rgba(0,0,0,0.2)", width: "200px", height: "7px", borderRadius: "10px" }}>
                <div className="progress-bar" style={{ backgroundColor: "#fe5196", width: percent, height: "100%", borderRadius: "10px" }}></div>
            </div>
            <button onClick={() => changePercant(percent === "70%" ? "30%" : "70%")}>轉換百分比</button>
            <button onClick={addProgress}>增加進度條</button>
            <button onClick={reduceProgress}>減少進度條</button>
        </div>
    )
}
export default Progress;