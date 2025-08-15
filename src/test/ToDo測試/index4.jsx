import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './App'
import App1 from './App1'
import '../ToDo測試/styles.css'


createRoot(document.getElementById('root4')).render(
    <StrictMode> 
        <App />  
        <App1 />  
    </StrictMode>
)