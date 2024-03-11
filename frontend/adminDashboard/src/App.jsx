import React from 'react'
import Admin from './components/Admin'
import NavBara from './components/NavBara'
import CourseContextProvider from './contexts/CourseContextProvider'

function App() {
  return (
    <CourseContextProvider>
      <NavBara/>
      <Admin/>
    </CourseContextProvider>
  )
}

export default App