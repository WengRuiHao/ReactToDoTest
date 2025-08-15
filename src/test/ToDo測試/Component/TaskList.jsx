import { useEffect, useState } from "react";

function TaskList({tasks, handleEdit, handleDelete}){
    return(
        <ul>
            {tasks.map((task) =>(
                <li key={task.id}>
                    <Task task={task} handleEdit={handleEdit} handleDelete={handleDelete} />
                </li>
            ))}
        </ul>
    )
}

function Task({task,handleEdit,handleDelete}){
    const [Edit, isEdit] = useState(false);
    let taskContent;

    if(Edit) {
        taskContent = (
            <>
                <input type="text" placeholder="修改任務" value={task.text}  onChange={(e) => {
                    handleEdit({
                        ...task, text: e.target.value,
                    })
                }} />
                <button style={{cursor:"pointer"}} onClick={() => {isEdit(false)}}>保存</button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.text}
                <div>
                    <button style={{cursor:"pointer"}} onClick={() => {isEdit(true)}}>編輯</button>
                    <button style={{cursor:"pointer"}} onClick={() => {handleDelete(task.id)}}>刪除</button>
                </div>
            </>
        )
    }

    return(
        <label>
            <input type="checkbox" checked={task.done} onChange={(e) => {
                handleEdit({...task, done : e.target.checked,}) 
            }} />
            {taskContent}
        </label>
    )
}

export default TaskList;