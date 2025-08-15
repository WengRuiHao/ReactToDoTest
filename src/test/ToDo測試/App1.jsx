import { useReducer } from "react";
import AddTask from "./Component/AddTask";
import TaskList from "./Component/TaskList";

function App1() {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

    function tasksReducer(tasks, action) {
        switch (action.type) {
            case 'add':
                {
                    return [...tasks, {
                        text: action.text,
                        id: action.id,
                        done: false,
                    }]
                }
            case 'edit':
                {
                    return tasks.map((t) => {
                        if (t.id === action.task.id)
                            return action.task;
                        else
                            return t;
                    })
                }
            case 'delete':
                {
                    return tasks.filter((task) => task.id !== action.id)

                }
            default:
                throw Error('Unknown action: ' + action.type);
        }
    }

    function handleAddTask(text) {
        dispatch({
            type: 'add',
            id: nextId++,
            text: text,
        });
    }

    function handleEditTask(task) {
        dispatch({
            type: 'edit',
            task: task,
        });
    }

    function handleDeleteTask(taskId) {
        dispatch({
            type: 'delete',
            id: taskId,
        })
    }

    return (
        <>
            <h1>ToDo測試(Reducer)</h1>
            <AddTask onAddTask={handleAddTask} />
            <TaskList tasks={tasks} handleEdit={handleEditTask} handleDelete={handleDeleteTask} />
        </>
    )
}

let nextId = 3;
const initialTasks = [
    { id: 0, text: '你好', done: true },
    { id: 1, text: '我好', done: false },
    { id: 2, text: '大家好', done: false },
]
export default App1;