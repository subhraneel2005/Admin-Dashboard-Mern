import React, { useEffect, useState } from 'react';
import axios from "axios";
import {useParams} from "react-router-dom"
import CourseContext from './CourseContext';

function CourseContextProvider({children}) {
    const[allCourses, setAllCourses] = useState([]);

    const getAllCourses = async() => {
        const resp = await axios.get("http://localhost:3000/admin");
        setAllCourses(resp.data);
    }

    useEffect(()=>{
        getAllCourses();
    },[]);
  return (
    <CourseContext.Provider value={{getAllCourses,  allCourses}}>
        {children}
    </CourseContext.Provider>
  )
}

export default CourseContextProvider