import useRate from "./useRate";

const ProgressDIY = (props) => {

    //在ProgressDIY使用custom hook
    const percent = useRate(props.value);

    return (
        <div>
            <div className="progress-back" style={{ backgroundColor: "rgba(0,0,0,0.2)", width: "200px", height: "7px", borderRadius: "10px" }}>
                <div className="progress-bar" style={{ backgroundColor: "#fe5196", width: percent + "%", height: "100%", borderRadius: "10px" }}></div>
            </div>
            <div>目前比率:{percent}%</div>
            <button value={90} onClick={props.onClick}>增加比率至90</button>
            <button value={10} onClick={props.onClick}>增加比率至10</button>
        </div>
    )
}

export default ProgressDIY;