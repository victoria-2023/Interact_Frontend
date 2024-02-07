import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import CourseService from "../service/CourseService";


const UpdateCourse=()=>{

    const id =useParams()
    const navigate=useNavigate()
    const [course, setCourse]=useState({
        id:id,
        subject:'',
        lecturer:'',
        description:''
    })
    const handleChange=(e)=>{
        const value=e.target.value
        setCourse({...course, [e.target.name]:value})
    };
    useEffect(() => {
        const data=async ()=>{
            try{
                const res=await  CourseService.updateCourse(course.id)
                setCourse(res.data)
            }catch (error){
                console.error(error)
            }
        }
        data()
    }, [course.id]);

    const updateCourse=(e)=>{
        e.preventDefault()
        CourseService.updateCourse(course,id)
            .then((res)=>{
                navigate('/course')
            })
            .catch((err)=>{
                console.error(err)
            })
    }


        return (
            <div>
                <h2>Update Course</h2>
                <form>
                    <label>Subject:</label>
                    <input
                        type="text"
                        name="subject"
                        value={course.subject}
                        onChange={(e)=>handleChange(e)}
                    />
                    <label>description:</label>
                    <input
                        type="text"
                        name="description"
                        value={course.description}
                        onChange={(e)=>handleChange(e)}
                    />
                    <label>lecturer:</label>
                    <input
                        type="text"
                        name="lecturer"
                        value={course.lecturer}
                        onChange={(e)=>handleChange(e)}
                    />

                    <button type="button" onClick={updateCourse}>
                        Update Course
                    </button>
                </form>
            </div>
        );


}

export default UpdateCourse

