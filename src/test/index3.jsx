import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Test8";
import App1 from './Test11';
import App2 from './useContext和useReducer/FruitStore';
import App3 from './ProgressDIY/App';
import App4 from './ProgressDIY1/App';
import App5 from './監控瀏覽器長寬 - 以React hook實現/App'
import App6 from './輸入使用、輸入與狀態的互動(控制組件)、其他輸入元素/LoginForm'
import App7 from './react-router-dom/App'
import '../index.css'


createRoot(document.getElementById('root3')).render(
    <StrictMode>
        {/* <App /> */}
        <App1 />
        <div id="talk"></div>
        <App2 />  
        {/* <App3 />   */}
        <App4 />  
        <App5 />  
        <App6 />  
        <App7 />  
    </StrictMode>
)