import React, { useContext, useEffect, useState } from "react";
import { TaskContent } from "../Wrapper";


function CreateForm() {
    const [text, setText] = useState("");
    const { handleAddTask } = useContext(TaskContent);

    return (
        <>
            <form className="create-form" onSubmit={(e) => { e.preventDefault(); handleAddTask(text); setText('') }}>
                <input type="text" value={text} placeholder="輸入代辦事項" onChange={(e) => { setText(e.target.value); }} />
                <button type="submit">加入</button>
            </form>
        </>
    )
}

export default CreateForm;