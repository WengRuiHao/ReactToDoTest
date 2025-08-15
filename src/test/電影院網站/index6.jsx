import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './css/style.css';
import Cinemas from "./component/Cinemas";
import Layout from "./Layout";
import Films from "./component/films";

createRoot(document.getElementById('root6')).render(
    <StrictMode>
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/films/nowplaying" element={<Films/>}/>
                    <Route path="/cinemas" element={<Cinemas />} />
                    {/* <Route path="center" element={}/> */}
                </Routes>
            </Layout>
        </BrowserRouter>
    </StrictMode>
)