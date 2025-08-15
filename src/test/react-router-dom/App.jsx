import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import Layout from "./Layout";

function App() {
    return (
        <BrowserRouter >
            <Layout>
                <Routes>
                    <Route path="/" element={<FirstPage />} />
                    <Route path="/second/:id?" element={<SecondPage />} />
                </Routes>
            </Layout>
        </BrowserRouter >
    )
}

export default App;