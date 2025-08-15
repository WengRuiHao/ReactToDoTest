import { useContext, useEffect, useState } from "react";
import { TaskContent } from "../Wrapper";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";


export default function TaskList() {
    const { tasks, handleEditTask, handleDeleteTask, handleCompleted } = useContext(TaskContent);

    return (
        <>
            {tasks.map((task) => (
                <Task task={task} handleEditTask={handleEditTask} handleDeleteTask={handleDeleteTask} handleCompleted={handleCompleted} key={task.id} />
            ))}
        </>
    )
}

function Task({ task, handleEditTask, handleDeleteTask, handleCompleted }) {
    const [isEdit, setIsEdit] = useState(false);
    let taskContent;

    useEffect(() => {
        console.log(task);
    }, [task])

    if (isEdit) {
        taskContent = (
            <>
                <form className="create-form" onSubmit={(e) => { e.preventDefault(); setIsEdit(false) }} >
                    <input type="text" value={task.text} style={{ background: 'none' }} onChange={(e) => {
                        handleEditTask({
                            ...task, text: e.target.value,
                        })
                    }} />
                    <button type="submit">保存</button>
                </form>
            </>
        )
    } else {
        taskContent = (
            <div className={` todo ${task.done ? 'completed' : ''}`}>
                <p onClick={() => {
                    handleCompleted({
                        ...task, done: !task.done,
                    })
                }}>{task.text}</p>
                <div>
                    <CiEdit style={{ cursor: "pointer" }} onClick={() => { setIsEdit(true) }} />
                    <MdDelete style={{ cursor: "pointer", marginLeft: '10px' }} onClick={() => { handleDeleteTask(task.id) }} />
                </div>
            </div>
        )
    }

    return (
        <>
            {taskContent}
        </>
    )
}