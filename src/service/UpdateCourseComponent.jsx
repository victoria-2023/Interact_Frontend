// UpdateCourseComponent.jsx
import React, { Component } from 'react';
import CourseService from './CourseService';

class UpdateCourseComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: '',
            lecturer: '',
            description: '',
        };
    }

    componentDidMount() {
        const courseId = this.props.match.params.id;

        CourseService.getCourseById(courseId).then((response) => {
            const course = response.data;
            this.setState({
                subject: course.subject,
                lecturer: course.lecturer,
                description: course.description,
            });
        });
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    updateCourse = () => {
        const updatedCourse = {
            subject: this.state.subject,
            lecturer: this.state.lecturer,
            description: this.state.description,
        };

        const courseId = this.props.match.params.id;

        CourseService.updateCourse(courseId, updatedCourse).then(() => {
            this.props.history.push('/courses');
        });
    };

    render() {
        return (
            <div>
                <h2>Update Course</h2>
                <form>
                    {/* Add input fields and a button for updating the course */}
                    <label>Subject:</label>
                    <input
                        type="text"
                        name="subject"
                        value={this.state.subject}
                        onChange={this.handleInputChange}
                    />
                    {/* Add similar input fields for lecturer and description */}
                    <button type="button" onClick={this.updateCourse}>
                        Update Course
                    </button>
                </form>
            </div>
        );
    }
}

export default UpdateCourseComponent;
