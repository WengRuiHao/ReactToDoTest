import { Component } from "react";

class Baby extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRightDad: true,
            isGetData: false,
            Mom: ""
        }
        this.ajaxSimulator = this.ajaxSimulator.bind(this);
    }

    componentWillUnmount() {
        if(this.props.dad !== "Chang")
            this.setState({isRightDad : false})
        document.getElementById("callDad").remove();
        // document.getElementById('talk').innerHTML = "";
    }

    ajaxSimulator() {
        setTimeout(() => {
            this.setState({
                isGetData : true,
                Mom : "小美"
            })
        }, 3000);
    }

    componentDidMount() {
        this.ajaxSimulator();
        // document.getElementById('talk').append('爸!')
        document.getElementById('talk').innerHTML +='<div id="callDad">爸!</div>';
    }

    render() {
        if(this.state.isGetData === false)
            return(
                <div id="msg">讀取中</div>
            )
        else 
            return(
                <div id="msg">他的媽媽是{this.state.Mom}</div>
            )
    }
}

export default Baby;