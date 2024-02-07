// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseList from './component/CourseList';
import CourseForm from './component/CourseForm';
import CourseComponent from "./component/CourseComponent";
import './App.css';
import UpdateCourse from "./component/UpdateCourse";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CourseList />} />
                <Route path="/course/:id" element={<UpdateCourse />} />
                <Route path="/courses" element={<CourseComponent />} />
                {/* other routes */}
            </Routes>
        </Router>
    );
}

export default App;


