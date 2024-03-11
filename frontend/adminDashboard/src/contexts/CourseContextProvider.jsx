import React, { useEffect, useState } from 'react';
import axios from "axios";
import {useParams} from "react-router-dom"
import CourseContext from './CourseContext';

function CourseContextProvider({children}) {
    const[course, setCourse] = useState(null);
    const {id} = useParams();
    const getSingleCourse = async() => {
        try {
            const response = await axios.get(`http://localhost/${id}`);
            setCourse(response.data);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <CourseContext.Provider value={{course, getSingleCourse, id}}>
        {children}
    </CourseContext.Provider>
  )
}

export default CourseContextProvider