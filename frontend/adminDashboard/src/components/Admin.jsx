import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { MdDelete } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import CourseContext from '../contexts/CourseContext';
import { Link } from 'react-router-dom';
import SingleCoursePage from './SingleCoursePage';

function Admin() {

    const[allCourses, setAllCourses] = useState([]);
    const[title, setTitle] = useState("");
    const[description, setDes] = useState("");
    const[price, setPrice] = useState();
    const[published, setPublished] = useState(false);
    const[thumbnail, setPhoto] = useState("");
    const[video, setVideo] = useState("");

    const getAllCourses = async() => {
        const resp = await axios.get("http://localhost:3000/admin");
        setAllCourses(resp.data);
    }

    useEffect(()=>{
        getAllCourses();
    },[]);

    

    const uploadCourse = async() => {
        axios.post("http://localhost:3000/admin", {
        title: title,
        description: description,
        price: price,
        published: published,
        thumbnail: thumbnail,
        video: video,
        }).then(resp => {setAllCourses([...allCourses, resp.data]); 
            setTitle("");
            setDes("");
            setPrice();
            setPublished(false);
            setPhoto("");
            setVideo("");
        })
    }

    const  removeCourse = (id) => {
       axios.delete(`http://localhost:3000/${id}`)
       .then(() => {
            setAllCourses(oldCourses => {
                const afterDelete = oldCourses.filter(courses => courses._id !== id)
                return afterDelete;
            })
       }).catch(error => console.log(error));
   };
  return (

    <div className='h-svh w-full flex justify-center items-center p-3 bg-slate-400'>
        <div className='h-full w-full rounded-xl bg-transparent text-slate-800 font-bold flex justify-center items-center'>
            <div className='block'>
                <div className='grid gap-5 grid-cols-2 md:grid-cols-3 mt-[70px]'>
                    <input 
                    type="text"
                    placeholder='Title'
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    className='border-none outline-none bg-slate-800 text-white px-3 py-2 rounded-lg' />
                    <input 
                    type="text"
                    placeholder='Description'
                    value={description}
                    onChange={(e)=>setDes(e.target.value)}
                    className='border-none outline-none bg-slate-800 text-white px-3 py-2 rounded-lg' />
                    <input 
                    type="Number"
                    placeholder='Price'
                    value={price}
                    onChange={(e)=>setPrice(e.target.value)}
                    className='border-none outline-none bg-slate-800 text-white px-3 py-2 rounded-lg' />
                    <input 
                    type="Text"
                    placeholder='Image url(Optional)'
                    value={thumbnail}
                    onChange={(e)=>setPhoto(e.target.value)}
                    className='border-none outline-none bg-slate-800 text-white px-3 py-2 rounded-lg' />
                    <input 
                    type="Text"
                    placeholder='Video url(Optional)'
                    value={video}
                    onChange={(e)=>setVideo(e.target.value)}
                    className='border-none outline-none bg-slate-800 text-white px-3 py-2 rounded-lg' />
                    <button className=' cursor-pointer bg-sky-900 text-sky-300 p-3 rounded-[30px]' onClick={uploadCourse}>Add Course</button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 mt-10 gap-5'>
                    {allCourses.map((course) => (
                        <div className='w-[300px] h-[300px] rounded-xl bg-slate-800 shadow-xl text-slate-200 font-bold overflow-hidden flex justify-center items-center ml-6 md:ml-0'>
                            <div className='flex justify-center items-center h-full w-full'>
                                <div className='block'>
                                <img className='px-4' src={course.thumbnail}/>
                                <div className='flex justify-between px-3 py-1 mt-4'>
                                    <h1 className='text-xl font-bold'>{course.title}</h1>
                                    <h1 className='text-xl  text-gray-100 font-bold'>{`₹${course.price}`}</h1>
                                </div>
                                <div className='w-full flex justify-between px-3 py-1 mt-4'>
                                    <MdDelete className='cursor-pointer text-red-600' size={30} onClick={()=>removeCourse(course._id)}></MdDelete>
                                    <Link to={`http://localhost:3000/${course._id}`}>
                                        <FaExternalLinkAlt className='cursor-pointer' size={25}></FaExternalLinkAlt>
                                    </Link>
                                </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Admin