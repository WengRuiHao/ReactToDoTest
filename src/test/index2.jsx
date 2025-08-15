import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from './Test7';
import '../index.css'

createRoot(document.getElementById('root2')).render(
    <StrictMode>
        <App />
    </StrictMode>
)