// CourseDetails.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function SingleCoursePage() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/${id}`)
      .then(response => {
        setCourse(response.data);
      })
      .catch(error => {
        console.error('Error fetching course details:', error);
      });
  }, [id]);

  
  function backToHome(){
    window.location.href = "/"
  }

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex flex-col justify-center  bg-gray-50 text-gray-600 min-h-screen p-4">
    <div className="h-full">
        
        <div className="max-w-xs mx-auto">
            <div className="flex flex-col h-full bg-white shadow-lg rounded-lg overflow-hidden">
                
                <a className="block">
                    <div className="relative h-0 pb-[56.25%] overflow-hidden">
                        <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={course.thumbnail} alt="Course"></img>
                    </div>
                </a>
                
                <div className="flex-grow flex flex-col p-5">
                    
                    <div className="flex-grow">
                        
                        <header className="mb-3">
                            
                                <h3 className="text-[22px] text-gray-900 font-extrabold">{course.title}</h3>
                        </header>
                    
                        <div className="mb-8">
                            <p>{course.description}</p>
                        </div>
                    </div>
                    
                    <div className="flex justify-end">
                        <button onClick={backToHome} className="font-medium text-sm inline-flex items-center justify-center px-3 py-1.5 rounded text-gray-500 hover:underline" >Go to Home</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  );
}

export default SingleCoursePage;
