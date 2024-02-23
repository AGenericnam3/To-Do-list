import React from "react";
import "./App.js";

function App(){
    const name ="Jaylon";

    const tasks = [
        {
            id: 1,
            title: "homework",
            description: "set up a To-Do list",
        },
        {
            id: 2,
            title: "Placeholder",
            description: "N/A",
        },
        {
            id: 3,
            title: "Placeholder",
            description: "N/A",
        }
    ];

    const taskManager = () => {
        const int = math.floor(Math.random()*2);
        return tasks[int].title;
    };

    return (
        <div className = "App">
            <h1>This is my First React App</h1>
                Hello {name} you have the task of <h3>{taskManager()}</h3>
        </div>
    )
}