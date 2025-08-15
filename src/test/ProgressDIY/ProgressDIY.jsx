import { Component } from "react";

/**
 * 整個流程: ProgressDIY(子元件) 的 value值 發生改變 傳回去 App(父元件)
 *          App(父元件) useState()接收到 value值 的改變 
 *          App(父元件) 的 value值 在傳回去 ProgressDIY(子元件)
 * componentDidMount方法: ProgressDIY(子元件) 的 state.percent 綁定 App(父元件) 的 this.props.value
 * componentDidUpdat方法: 每次 props.value 變動時，React 都會觸發一次 componentDidUpdate (類似useEffect() )
 */
class ProgressDIY extends Component {
    constructor(props) {
        super(props);
        this.state = {
            percent: 0,
        }
        this.increaseValue = this.increaseValue.bind(this);
        this.decreaseValue = this.decreaseValue.bind(this);
    }

    increaseValue() {
        const percent = this.state.percent + 1;
        this.setState({ percent }, () => {
            if (this.state.percent >= this.props.value) {
                return;
            }
            this.tm = setTimeout(this.increaseValue, 20);
        })
    }

    decreaseValue() {
        const percent = this.state.percent - 1;
        this.setState({ percent }, () => {
            if (this.state.percent <= this.props.value) {
                return;
            }
            this.tmTwo = setTimeout(this.decreaseValue, 20);
        })
    }

    componentDidMount() {
        this.setState({ percent: this.props.value });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.value > this.props.value) {
            if (this.tm)
                clearTimeout(this.tm);
            this.decreaseValue();
        }
        else if (prevProps.value < this.props.value) {
            if (this.tmTwo)
                clearTimeout(this.tmTwo);
            this.increaseValue();
        }
    }

    render() {
        return (
            <div className="Progress-back" style={{ backgroundColor: "rgba(0,0,0,0.2)", width: "200px", height: "7px", borderRadius: "10px" }}>
                <div className="Progress-bar" style={{ backgroundColor: "#fe5196", width: this.state.percent + '%', height: "100%", borderRadius: "10px" }}></div>
                <div>目前比率:{this.state.percent + '%'}</div>
                <button value={90} onClick={this.props.onClick}>增加比率至90</button>
                <button value={10} onClick={this.props.onClick}>減少比率至10</button>
            </div>
        )
    }
}

export default ProgressDIY;