import React, { useEffect, useState } from 'react'
import Admin from './components/Admin'
import CourseContextProvider from './contexts/CourseContextProvider'
import AppBara from './components/AppBara'
import Loader from './components/Loader';

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
    <CourseContextProvider>
      <AppBara/>
      <Admin/>
    </CourseContextProvider>
  )
}}

export default App