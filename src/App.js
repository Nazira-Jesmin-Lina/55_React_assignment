import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DynamicTextBoxes from './components/button';
import TaskManager from './components/Taskmanager';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/textbox" element={<DynamicTextBoxes />} />
        <Route path="/task" element={<TaskManager />} />
      </Routes>
    </Router>
  );
};

export default App;