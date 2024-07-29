import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import { IoFilterSharp } from "react-icons/io5";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [filter, setFilter] = useState('all');

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([
                ...tasks,
                { id: Date.now(), text: newTask, completed: false }
            ]);
            setNewTask('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    };

    const toggleTaskCompletion = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') return task.completed;
        if (filter === 'active') return !task.completed;
        return true;
    });

    return (
        <div className='container-fluid w-25'>
            <p className="fs-2 text-center my-4">Todo List</p>
            <div className="input-group mb-3 mw-75 mx-auto">
                <input
                    type="text"
                    placeholder='Add new task'
                    className='form-control w-75'
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
            </div>
            <div className="mb-3 d-flex align-items-center justify-content-center">
                <IoFilterSharp className="me-2" />
                <select 
                    className="form-select w-auto" 
                    value={filter} 
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <TaskList 
                tasks={filteredTasks} 
                onComplete={toggleTaskCompletion} 
                onDelete={deleteTask} 
            />
        </div>
    );
};

export default Home;
