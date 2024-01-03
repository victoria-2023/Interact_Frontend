
// CourseComponent.jsx
import React, { Component } from 'react';
import CourseService from '../service/CourseService';
import { Link } from 'react-router-dom';

class CourseComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [],
        };
    }

    componentDidMount() {
        this.retrieveCourses();
    }

    retrieveCourses() {
        CourseService.getCourses().then((response) => {
            this.setState({ courses: response.data });
        });
    }

    deleteCourse(courseId) {
        CourseService.deleteCourse(courseId).then(() => {
            this.setState({
                courses: this.state.courses.filter((course) => course.id !== courseId),
            });
        });
    }

    render() {
        return (
            <div>
                <h2>Courses List</h2>
                <Link to="/course/new">Add New Course</Link>
                <table>
                    <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Lecturer</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.courses.map((course) => (
                        <tr key={course.id}>
                            <td>{course.subject}</td>
                            <td>{course.lecturer}</td>
                            <td>{course.description}</td>
                            <td>
                                <Link to={`/course/${course.id}`}>View</Link>
                                <Link to={`/course/${course.id}/edit`}>Edit</Link>
                                <button onClick={() => this.deleteCourse(course.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CourseComponent;
