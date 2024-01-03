import axios from 'axios';

const COURSE_API_BASE_URL = 'http://localhost:8080/course';

class CourseService {
    getCourses() {
        return axios.get(COURSE_API_BASE_URL);
    }

    createCourse(course) {
        return axios.post(COURSE_API_BASE_URL, course);
    }

    getCourseById(courseId) {
        return axios.get(COURSE_API_BASE_URL + '/' + courseId);
    }

    updateCourse(courseId, course) {
        return axios.put(COURSE_API_BASE_URL + '/' + courseId, course);
    }

    deleteCourse(courseId) {
        return axios.delete(COURSE_API_BASE_URL + '/' + courseId);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new CourseService();