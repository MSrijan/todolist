import React from 'react';
import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const Task = ({ task, onComplete, onDelete }) => {
  return (
    <div className="task p-3 d-flex align-items-center justify-content-between border rounded mb-3 w-100 ">
      <div className="d-flex align-items-center">
        <p className={`fs-4 m-0 ${task.completed ? 'text-decoration-line-through' : ''}`}>
          {task.text}
        </p>
      </div>
      <div className="d-flex align-items-center">
        <button className="btn btn-outline-light me-2" onClick={() => onComplete(task.id)}>
          <TiTick />
        </button>
        <button className="btn btn-danger" onClick={() => onDelete(task.id)}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default Task;
