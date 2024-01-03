import React, { useEffect, useState } from 'react';
import CourseService from '../service/CourseService';
import { Link } from 'react-router-dom';

function CourseList() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        retrieveCourses();
    }, []);

    const retrieveCourses = () => {
        CourseService.getCourses().then((response) => {
            setCourses(response.data);
        });
    };

    return (
        <div>
            <h2>Courses</h2>
            <Link to="/course/new">Add New Course</Link>
            <ul>
                {courses.map(course => (
                    <li key={course.id}>
                        {course.subject} - {course.lecturer}
                        <Link to={`/course/${course.id}`}>Edit</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CourseList;
