import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./index1Test";
import App1 from './Test7';
import '../index.css'

createRoot(document.getElementById('root1')).render(
    <StrictMode>
        <App name= "我是進度條">在index.js中轉換百分比</App>
        <App1 />
    </StrictMode>
)