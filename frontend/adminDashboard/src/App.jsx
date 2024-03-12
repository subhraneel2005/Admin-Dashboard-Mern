import React, { useEffect, useState } from 'react'
import Admin from './components/Admin'
import CourseContextProvider from './contexts/CourseContextProvider'
import AppBara from './components/AppBara'
import Loader from './components/Loader';
import SingleCoursePage from './components/SingleCoursePage';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Change the timeout value as needed

    // Clear timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);
  if (isLoading) {
    return <Loader/>;
  } else {

  return (
    <div>
      <AppBara/>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/:id" element={<SingleCoursePage />} />
      </Routes>
    </div>
  )
}}

export default App