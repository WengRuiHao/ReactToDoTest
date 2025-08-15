import { useState } from "react";
import AddTask from "./Component/AddTask";
import TaskList from "./Component/TaskList";

const App = () => {
    const [tasks, setTasks] = useState(initialTasks);

    function handleAddTask(text){
        setTasks([...tasks,{
            id: nextId++,
            text:text,
            done:false,
        }]);
    }

    function handleEditTask(task){
        setTasks(
            tasks.map((t) => {
                if(t.id === task.id) {
                    return task;
                } else {
                    return t;
                }
            })
        )
    }

    function handleDeleteTask(taskId){
        setTasks(tasks.filter((t) => ( t.id !== taskId)))
    }

    return(
        <>
            <h1>ToDo測試</h1>
            <AddTask onAddTask={handleAddTask} />
            <TaskList tasks={tasks} handleEdit={handleEditTask} handleDelete={handleDeleteTask} />
        </>
    )
}

export default App;

let nextId = 3;
const initialTasks = [
    {id:0, text:"我好", done:true},
    {id:1, text:"你好", done:false},
    {id:2, text:"大家好", done:false},
]