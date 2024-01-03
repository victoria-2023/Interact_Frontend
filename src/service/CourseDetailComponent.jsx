// CourseDetailComponent.jsx
import React, { Component } from 'react';
import CourseService from './CourseService';

class CourseDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: null,
        };
    }

    componentDidMount() {
        const courseId = this.props.match.params.id;

        CourseService.getCourseById(courseId).then((response) => {
            const course = response.data;
            this.setState({ course });
        });
    }

    render() {
        const { course } = this.state;

        return (
            <div>
                {course ? (
                    <div>
                        <h2>Course Details</h2>
                        <p>Subject: {course.subject}</p>
                        <p>Lecturer: {course.lecturer}</p>
                        <p>Description: {course.description}</p>
                        {/* Add buttons or links for editing and deleting the course */}
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        );
    }
}

export default CourseDetailComponent;
