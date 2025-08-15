import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Wrapper from "./Wrapper";
import './css/style.css';

createRoot(document.getElementById('root4')).render(
    <StrictMode>
        <Wrapper />
    </StrictMode>
)