import React from "react";
import AddTask from "./components/AddTask";
// import AddTaskClass from "./components/AddTaskClass";
import Tasks from "./components/Tasks";

const App = () => {
    return (
        <div>
            {/* <AddTaskClass /> */}
            <AddTask />
            <Tasks />
        </div>
    );
};

export default App;
