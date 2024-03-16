import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TaskManager = () => {
  const [tasks, setTasks] = useState([{ id: 1, header: 'Task Header', description: 'Default Description' }]);
  const [showAddTaskCard, setShowAddTaskCard] = useState(false);
  const [newTaskHeader, setNewTaskHeader] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const handleEdit = (taskId) => {
    const newDescription = prompt('Enter new task description:');
    if (newDescription !== null) {
      const updatedTasks = tasks.map(task =>
        task.id === taskId ? { ...task, description: newDescription } : task
      );
      setTasks(updatedTasks);
    }
  };

  const handleDelete = (taskId) => {
    if (window.confirm(`Are you sure you want to delete this task?`)) {
      const updatedTasks = tasks.filter(task => task.id !== taskId);
      setTasks(updatedTasks);
    }
  };

  const handleAddTask = () => {
    setShowAddTaskCard(true);
  };

  const handleSaveTask = () => {
    if (newTaskHeader && newTaskDescription) {
      const taskId = tasks.length + 1;
      setTasks([...tasks, { id: taskId, header: newTaskHeader, description: newTaskDescription }]);
      setShowAddTaskCard(false);
      setNewTaskHeader('');
      setNewTaskDescription('');
    }
  };

  const handleCancelTask = () => {
    setShowAddTaskCard(false);
    setNewTaskHeader('');
    setNewTaskDescription('');
  };

  return (
    <div className="container mt-3">
      <div className="row mb-3">
        <div className="col text-right">
          <button className="btn btn-success" onClick={handleAddTask}>Add New Task</button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h2>Task Section</h2>
        </div>
        <div className="col-md-6">
          {tasks.map(task => (
            <div key={task.id}>
              <div className="card border-primary shadow mb-3">
                <div className="card-body">
                  <h5 className="card-title">{task.header}</h5>
                  <p className="card-text">{task.description}</p>
                  <button className="btn btn-primary mr-2 mb-1" onClick={() => handleEdit(task.id)}>Edit</button>
                  <button className="btn btn-danger mb-1" onClick={() => handleDelete(task.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {showAddTaskCard && (
          <div className="col-md-6">
            <div className="card border-primary shadow mb-3">
              <div className="card-body">
                <h5 className="card-title">New Task</h5>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Enter header"
                  value={newTaskHeader}
                  onChange={(e) => setNewTaskHeader(e.target.value)}
                />
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Enter description"
                  value={newTaskDescription}
                  onChange={(e) => setNewTaskDescription(e.target.value)}
                />
                <button className="btn btn-success mr-2" onClick={handleSaveTask}>Save</button>
                <button className="btn btn-danger" onClick={handleCancelTask}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskManager;
