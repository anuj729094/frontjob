import { project } from '@/redux/userauth/action';
import React, { useEffect, useState } from 'react'
import { FiEdit2 } from "react-icons/fi";
import { ImSpinner8 } from 'react-icons/im';
import { IoCloseSharp } from 'react-icons/io5';
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';

const Projects = () => {
    const dispatch = useDispatch()
    const [action, setAction] = useState("")
    const { isloading, userdata, iserror, msg } = useSelector((state) => state.user)
    const [projectDetails, setProjectDetails] = useState({
        title: "", description: "", url: ""
    })
    const postdata = (e) => {
        e.preventDefault()
        dispatch(project([{ id: userdata._id }, { projects: [...userdata.projects, projectDetails] }]))
    }
    const postupdatedata = (e) => {
        e.preventDefault()
        dispatch(project([{ id: userdata._id }, { projects: userdata.projects.map((item) => item._id === projectDetails._id ? projectDetails : item) }]))

    }
    const handleupdate = (type, data) => {
        setAction(type)
        setProjectDetails(data)
        // setProjectId(data._id)
    }
    const handledelete = (id) => {
        dispatch(project([{ id: userdata._id }, { projects: userdata.projects.filter((item) => item._id !== id) }]))
    }
    useEffect(() => {
        if (action) {
            document.body.style.overflowY = "hidden"
        }
        else {
            document.body.style.overflowY = "scroll"

        }
    }, [action])
    // useEffect(()=>{
    //    if(iserror.status){
    //      setTimeout(() => {
    //         dispatch({
    //             type:"clearerror"
    //         })
    //      }, 4000);
    //    }
    // },[iserror])

    useEffect(() => {
        if (msg === "data updated successfully") {
            setAction("")
            setProjectDetails({ title: "", description: "", url: "" })
            dispatch({
                type: "clearmessage"
            })
            dispatch({
                type: "clearerror"
            })
        }
    }, [msg])
    return (
        <div className='border-b-[2px] border-solid flex flex-col items-start  py-4 text-[#777777]'>
            <h1 className=' text-sm mb-2 font-bold md:text-xl'>ACADEMICS/PERSONAL PROJECTS</h1>
            <ul>
                {
                    userdata.projects.map((project, index) =>
                        <li key={index} className='flex items-start justify-between my-4 '>
                            <div>
                                <h2 className=' font-semibold'>{project.title}</h2>
                                <p className=' text-sm my-1'>{project.description}</p>
                                <a href="https://patrc-dailynews.vercel.app" className=' text-sm text-blue-500 font-medium'>{project.url}</a>
                            </div>
                            <div className=' text-xl flex items-center gap-2'>
                                <button onClick={() => handleupdate("update", project)}><FiEdit2 /></button>
                                <button onClick={() => handledelete(project._id)}><MdDeleteOutline /></button>
                            </div>
                        </li>
                    )
                }
            </ul>
            <button className=' text-base text-blue-500 font-medium' onClick={() => setAction("add")}>+ Add Project</button>
            {action && <div className=' fixed bg-[#0000004a] sm:px-5 sm:py-4 flex justify-center w-full h-[100vh] overflow-auto top-0 z-50 left-0'>
                <div className=' bg-white sm:mt-20 h-fit sm:px-10  w-full  sm:rounded-xl  py-4 px-3 flex flex-col items-center sm:w-[40rem]'>
                    <div className=' flex justify-end w-full text-2xl mt-3'>
                        <button onClick={() => {
                            setAction("")
                            setProjectDetails({ title: "", description: "", url: "" })
                        }}> <IoCloseSharp /></button>
                    </div>
                    <h1 className=' font-semibold text-[#6A6A6A] text-lg my-2'>Project Details</h1>
                    <form className='w-full mt-4 flex flex-col items-end  gap-7' onSubmit={action === "add" ? postdata : postupdatedata}>
                        <div className=' flex flex-col  w-full '>
                            <label htmlFor="Title" className=' text-[#6A6A6A] text-sm font-medium'>Title</label>
                            <input type="text" value={projectDetails.title} onChange={(e) => setProjectDetails({ ...projectDetails, title: e.target.value })} id='Title' required name='firstname' className='mt-2 outline-none focus:outline-[#6A38C2] bg-transparent py-3 rounded-md pl-2 border-[1px] border-solid' />
                            {iserror.status && <span className=' text-xs mt-1 text-red-500 font-medium'>{iserror.msg.title}</span>}
                        </div>
                        <div className=' flex flex-col  w-full'>
                            <label htmlFor="Description" className='text-[#6A6A6A] text-sm font-medium'>Description</label>
                            <textarea id='Description' rows={5} required value={projectDetails.description} onChange={(e) => setProjectDetails({ ...projectDetails, description: e.target.value })} className='mt-2 outline-none focus:outline-[#6A38C2] bg-transparent w-full py-3 rounded-md pl-2 border-[1px] border-solid' ></textarea>
                            {iserror.status && <span className=' text-xs mt-1 text-red-500 font-medium'>{iserror.msg.description}</span>}
                        </div>
                        <div className=' flex flex-col w-full '>
                            <label htmlFor="url" className=' text-[#6A6A6A] text-sm font-medium'>Live URL</label>
                            <input type="text" value={projectDetails.url} onChange={(e) => setProjectDetails({ ...projectDetails, url: e.target.value })} id='url' required name='firstname' className='mt-2 outline-none focus:outline-[#6A38C2] bg-transparent py-3 rounded-md pl-2 border-[1px] border-solid' />
                            {iserror.status && <span className=' text-xs mt-1 text-red-500 font-medium'>{iserror.msg.url}</span>}
                        </div>
                        {action === "add" ? <button type='submit' className=' bg-[#6A38C2] rounded-md py-3 px-7 font-medium text-white'>
                            {isloading ? <ImSpinner8 /> : "Add Project"}
                        </button> : <button type='submit' className=' bg-[#6A38C2] rounded-md py-3 px-7 font-medium text-white'>
                            {isloading ? <ImSpinner8 /> : "Update"}
                        </button>}
                    </form>
                </div>
            </div>}
        </div>
    )
}

export default Projects
