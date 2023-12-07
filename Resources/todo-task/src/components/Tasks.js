import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTasks, deleteTask } from "../store/tasks";

const Tasks = () => {
    const { tasks, loading } = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTasks());
    }, []);
    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {tasks.map((task) => (
                        <p key={task.id}>{task.task} <button onClick={() => { dispatch(deleteTask(task)) }}>delete</button></p>
                    ))}
                </div>
            )}
        </>
    );
};

export default Tasks;
