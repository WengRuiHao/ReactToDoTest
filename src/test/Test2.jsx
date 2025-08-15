import React, { Component } from "react"; // 引入React定義好的 React Component

class App extends Component {
    constructor(props) { // 加入建構子以及props參數
        super(props);
        this.name = "舊的名字";
        this.changeName = this.changeName.bind(this); // 綁定至自己
    }

    changeName  (newName) {
        this.name = newName;
        console.log("hey") // 加入此行
    }
    

    render() {
        return (
            <div>
                <button onClick={this.changeName}>{this.name}</button>
            </div>
        )
    }
}

export default App;