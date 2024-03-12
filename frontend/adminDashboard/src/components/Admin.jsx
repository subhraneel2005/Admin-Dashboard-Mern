import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';



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
        }).then(() => {setAllCourses(newCourse => {
            const  newArray = [...setAllCourses,newCourse];
            return newArray;
        }); 
            setTitle("");
            setDes("");
            setPrice();
            setPublished(false);
            setPhoto("");
            setVideo("");
        })
        window.location.reload();
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

   const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  return (

    <div classNameName=' w-full flex justify-center items-center p-3'>
        <div classNameName='h-full w-full rounded-xl bg-transparent text-slate-800 font-bold flex justify-center items-center'>
            <div classNameName='block'>
                <div classNameName='grid gap-5 grid-cols-2 md:grid-cols-3 mt-[70px]'>
                    <TextField id="filled-basic" label="Title" variant="filled"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}/>
                    <TextField id="filled-basic" label="Description" variant="filled"
                    value={description}
                    onChange={(e)=>setDes(e.target.value)}/>
                    <TextField
                    id="outlined-number"
                    label="Price"
                    type="number"
                    value={price} onChange={(e)=>setPrice(e.target.value)}
                    />
                    <TextField
                    id="outlined-number"
                    label="Image Url"
                    type="text"
                    value={thumbnail} onChange={(e)=>setPhoto(e.target.value)}
                    />
                    <VisuallyHiddenInput type="file" />
                    <TextField
                    id="outlined-number"
                    label="Video Url (Optional)"
                    type="text"
                    value={video} onChange={(e)=>setVideo(e.target.value)}
                    />
                    <Button variant="outlined" onClick={uploadCourse}>Add Course</Button>
                </div>
                <div classNameName='grid grid-cols-1 md:grid-cols-3 mt-10 gap-5'>
                    {allCourses.map((course) => (
                        <div classNameName='w-[300px] h-[300px] rounded-xl bg-slate-800 shadow-xl text-slate-200 font-bold overflow-hidden flex justify-center items-center ml-6 md:ml-0'>
                            <div classNameName='flex justify-center items-center h-full w-full'>
                                <div classNameName='block'>
                                <img classNameName='px-4' src={course.thumbnail}/>
                                <div classNameName='flex justify-between px-3 py-1 mt-4'>
                                    <h1 classNameName='text-xl font-bold'>{course.title}</h1>
                                    <h1 classNameName='text-xl  text-gray-100 font-bold'>{`₹${course.price}`}</h1>
                                </div>
                                <div classNameName='w-full flex justify-between px-3 py-1 mt-4'>
                                <Button variant="outlined" color="error" onClick={()=>removeCourse(course._id)}>
                                Delete
                                </Button>
                                <Button variant="outlined" href={`/${course._id}`}>
                                    Link
                                </Button>
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


// placeholder='Title'
                