import { useState } from "react";
import ProgressDIY from "./ProgressDIY";
import Cheer from "./Cheer";

const App = () => {
    const [value, setValue] = useState(0);
    const [score, setScore] = useState(0);

    return (
        <div id="App">
            <ProgressDIY value={value} onClick={(e) => { setValue(e.target.value) }} />
            <Cheer value={score} onClick={(e) => setScore(e.target.value)} />
        </div>
    )
}

export default App;