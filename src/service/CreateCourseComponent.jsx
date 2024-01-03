// CreateCourseComponent.jsx
import React, { Component } from 'react';
import CourseService from './CourseService';

class CreateCourseComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: '',
            lecturer: '',
            description: '',
        };
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    createCourse = () => {
        const newCourse = {
            subject: this.state.subject,
            lecturer: this.state.lecturer,
            description: this.state.description,
        };

        CourseService.createCourse(newCourse).then(() => {
            this.props.history.push('/courses');
        });
    };

    render() {
        return (
            <div>
                <h2>Create New Course</h2>
                <form>
                    {/* Add input fields and a button for creating the course */}
                    <label>Subject:</label>
                    <input
                        type="text"
                        name="subject"
                        value={this.state.subject}
                        onChange={this.handleInputChange}
                    />
                    {/* Add similar input fields for lecturer and description */}
                    <button type="button" onClick={this.createCourse}>
                        Create Course
                    </button>
                </form>
            </div>
        );
    }
}

export default CreateCourseComponent;
