import { createRoot } from "react-dom/client";
import App2 from './Test2';
import App3 from './Test3';
import App4 from './Test4';
import App5 from './Test5';
import App6 from './Test6';
import '../index.css'

const data ={
    name:"我的名字",
    id:"1"
}

const printMessage = () => {
    document.getElementById("show-area").innerHTML = "我被按到了";
}

function App(props) {
    return (
        // <div>
        //     <button onClick={props.handleClick}>{props.name.name}</button>
        // </div>
        <button>{props.children}</button>
    )
}

function Progress() {
    const barWidth = "50%";
    return (
        <div>
            <div className="progress-back" style={{ backgroundColor: "rgba(0,0,0,0.2)", width: "200px", height: "7px", borderRadius: "10px" }}>
                <div className="progress-bar" style={{backgroundColor: "#fe5196", width: barWidth, height: "100%", borderRadius: "10px"}}></div>
            </div>
        </div>
    )
}

// const changeName = (newName) => {
//     name = newName;
//     console.log("hey") // 加入此行
// }

// var name = "舊的名字";

createRoot(document.getElementById('root')).render(
    <div>
        {/* <App name = {data} handleClick={printMessage}/>
        <div id="show-area"></div> */}
        <App> 在index.js中設定文字</App>
        {/* <App1 name = {name} handleClick = {changeName}/> */}
        <App2 />
        <App3 />
        <App4 />
        <App5 />
        <App6 name='Weng'/>
        {/* <Progress /> */}
    </div>
)