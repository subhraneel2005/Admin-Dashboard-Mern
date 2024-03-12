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

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <section className="flex flex-col justify-center antialiased bg-gray-50 text-gray-600 min-h-screen p-4">
    <div className="h-full">
        
        <div className="max-w-xs mx-auto">
            <div className="flex flex-col h-full bg-white shadow-lg rounded-lg overflow-hidden">
                
                <a className="block focus:outline-none focus-visible:ring-2" href="#0">
                    <figure className="relative h-0 pb-[56.25%] overflow-hidden">
                        <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={course.thumbnail} width="320" height="180" alt="Course"></img>
                    </figure>
                </a>
                
                <div className="flex-grow flex flex-col p-5">
                    
                    <div className="flex-grow">
                        
                        <header className="mb-3">
                            <a className="block focus:outline-none focus-visible:ring-2" href="#0">
                                <h3 className="text-[22px] text-gray-900 font-extrabold leading-snug">{course.title}</h3>
                            </a>
                        </header>
                    
                        <div className="mb-8">
                            <p>{course.description}</p>
                        </div>
                    </div>
                    
                    <div className="flex justify-end space-x-2">
                        <button onClick={()=>{window.location("http://localhost:3000")}} className="font-medium text-sm inline-flex items-center justify-center px-3 py-1.5 rounded leading-5 text-gray-500 hover:underline focus:outline-none focus-visible:ring-2" >Go to Home</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
  );
}

export default SingleCoursePage;
