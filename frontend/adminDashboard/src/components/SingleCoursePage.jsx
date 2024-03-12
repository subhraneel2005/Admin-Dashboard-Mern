import React, { useContext, useEffect, useState } from 'react';
import CourseContext from '../contexts/CourseContext';

function SingleCoursePage() {
    
    const {allCourses} = useContext(CourseContext);

    
    if(!allCoursescourse)
    {
        return(
            <div>Loading...</div>
        )
    }

    return(
        <div>
            {allCourses.map((course)=>(
                <div>
                <h1>Title: {course.title}</h1>
                <p>Description: {course.description}</p>
                <hr />
                <img src={course.thumbnail}/>
                <br></br>
                <h1>{course.price}</h1>
                <button onClick={()=>window.location="http://localhost/admin"}>Back to Courses</button>
            </div> 
            ))}
        </div>
    )
}

export default SingleCoursePage