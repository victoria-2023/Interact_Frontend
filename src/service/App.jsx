// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CourseComponent from './CourseComponent';
import CreateCourseComponent from './CreateCourseComponent';
import UpdateCourseComponent from './UpdateCourseComponent';
import CourseDetailComponent from './CourseDetailComponent';

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/courses" component={CourseComponent} />
                    <Route path="/course/new" component={CreateCourseComponent} />
                    <Route path="/course/:id/edit" component={} />
                    <Route path="/course/:id" component={CourseDetailComponent} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;

