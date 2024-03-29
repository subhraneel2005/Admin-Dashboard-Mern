import React from 'react'

function NavBara() {
  return (
    <div className=' bg-transparent select-none fixed text-stone-100 w-full px-6 py-3 flex justify-between'>
        <h1 className='text-2xl'>CourseHub</h1>
        <button className='px-3 py-2 rounded-xl bg-blue-500 text-white cursor-pointer hover:bg-blue-800 duration-300'>Logout</button>
    </div>
  )
}

export default NavBara