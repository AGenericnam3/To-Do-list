/*import React from "react";
import "./App.js";

function App(){
    const name ="Jaylon";

    const tasks = [
        {
            id: 1,
            title: "homework",
            description: "improve my To-Do list",
            Subtasks: [
                {
                    id:'sub task 1', title: 'Add subtasks'
                },
                {
                    id: 'subtasks 2', title: 'Improve the UI'
                }
            ],
            completed: false,
        },
        {
            id: 2,
            title: "Placeholder",
            description: "N/A",
            Subtasks: [
                {
                    id:'sub task 1', title: 'Placeholder'
                },
                {
                    id: 'subtasks 2', title: 'Placeholder'
                }
            ],
            completed: false,
        },
        {
            id: 3,
            title: "Placeholder",
            description: "N/A",
            Subtasks: [
                {
                    id:'sub task 1', title: 'Placeholder'
                },
                {
                    id: 'subtasks 2', title: 'Placeholder'
                }
            ],
            completed: false,
        }
    ];
    const taskManager = () => {
        const int = Math.floor(Math.random()*2);
        return tasks[int].title;
    };

    return (
        <div className = "App">
            <h1>This is my First React App</h1>
                Hello {name} you have the task of <h3>{taskManager()}</h3>
        </div>
    )
*/