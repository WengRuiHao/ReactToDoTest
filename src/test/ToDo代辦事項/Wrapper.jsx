import { createContext, useState, useReducer } from "react";
import CreateForm from "./component/CreateForm";
import TaskList from "./component/TaskList";

const initialTasks = [
    { id: Math.random(), text: '寫作業', done: false },
    { id: Math.random(), text: '買菜', done: true }
]

function TaskReducer(tasks, action) {
    switch (action.type) {
        case 'add':
            return ([...tasks, {
                id: action.id,
                text: action.text,
                done: false,
            }])
        case 'edit':
            return tasks.map((task) => {
                if (task.id === action.task.id)
                    return action.task;
                else
                    return task;
            })
        case 'delete':
            return tasks.filter((task) => task.id !== action.id)
        case 'completed':
            return tasks.map((task) => {
                if (task.id === action.task.id)
                    return action.task;
                else
                    return task;
            })
    }
}

export const TaskContent = createContext();

export default function Wrapper() {
    const [tasks, dispatch] = useReducer(TaskReducer, initialTasks);

    function handleAddTask(text) {
        dispatch({
            type: 'add',
            id: Math.random(),
            text: text,
        });
    }

    function handleEditTask(task) {
        dispatch({
            type: 'edit',
            task: task,
        })
    }

    function handleDeleteTask(taskId) {
        dispatch({
            type: 'delete',
            id: taskId,
        })
    }

    function handleCompleted(task) {
        dispatch({
            type: 'completed',
            task: task,
        })
    }

    return (
        <div className="wrapper">
            <h1>待辦事項</h1>
            <TaskContent.Provider value={{
                tasks: tasks,
                handleAddTask: handleAddTask,
                handleEditTask: handleEditTask,
                handleDeleteTask: handleDeleteTask,
                handleCompleted: handleCompleted,
            }}>
                <CreateForm />
                <TaskList />
            </TaskContent.Provider>
        </div>
    )
}