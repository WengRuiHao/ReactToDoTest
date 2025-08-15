import { useEffect, useState } from "react";

function AddTask({onAddTask}){
    const [text,setText] = useState('');

    return(
        <>
            <input type="text" placeholder="新增任務" value={text} onChange={(e)=>{setText(e.target.value)}}/>
            <button style={{cursor:"pointer"}} onClick={() => {setText(''); onAddTask(text);}}>新增</button>
        </>
    )
}

export default AddTask;