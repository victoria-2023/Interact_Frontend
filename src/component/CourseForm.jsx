import React, { useState, useEffect } from 'react';
import CourseService from '../service/CourseService';
import { useParams, useNavigate } from 'react-router-dom';

function CourseForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [course, setCourse] = useState({ lecturer: '', description: '', subject: '' });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (id !== "new") {
            CourseService.getCourseById(id).then((response) => {
                setCourse(response.data);
            });
        }
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCourse({ ...course, [name]: value });
    };

    const validateForm = () => {
        let formErrors = {};
        let isValid = true;

        if (!course.subject) {
            isValid = false;
            formErrors["subject"] = "Subject is required.";
        }

        if (!course.lecturer) {
            isValid = false;
            formErrors["lecturer"] = "Lecturer is required.";
        }

        if (!course.description) {
            isValid = false;
            formErrors["description"] = "Description is required.";
        }

        setErrors(formErrors);
        return isValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            if (id === "new") {
                CourseService.createCourse(course).then(() => {
                    navigate('/')
                });
            } else {
                CourseService.updateCourse(id, course).then(() => {
                    navigate(`/:${id}`)
                });
            }
        }
    };

    return (
        <div>
            <h2>{id === "new" ? "Add New Course" : "Edit Course"}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Subject:</label>
                    <input
                        type="text"
                        name="subject"
                        value={course.subject}
                        onChange={handleChange}
                    />
                    {errors.subject && <div>{errors.subject}</div>}
                </div>
                <div>
                    <label>Lecturer:</label>
                    <input
                        type="text"
                        name="lecturer"
                        value={course.lecturer}
                        onChange={handleChange}
                    />
                    {errors.lecturer && <div>{errors.lecturer}</div>}
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={course.description}
                        onChange={handleChange}
                    />
                    {errors.description && <div>{errors.description}</div>}
                </div>
                <button type="submit">{id === "new" ? "Create" : "Update"}</button>
            </form>
        </div>
    );
}

export default CourseForm;
