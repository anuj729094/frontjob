import { updategithub } from '@/redux/userauth/action'
import React, { useEffect, useState } from 'react'
import { FiEdit2 } from 'react-icons/fi'
import { ImSpinner8 } from 'react-icons/im'
import { IoCloseSharp } from 'react-icons/io5'
import { MdDeleteOutline } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'

const Github = () => {
    const dispatch = useDispatch()
    const {userdata, isloading , iserror,msg} = useSelector((state)=>state.user)
    const[action , setAction]=useState("")
    const[github , setGithub]=useState("")
    const posturl = (e)=>{
        e.preventDefault()
        dispatch(updategithub([{id:userdata._id} , {github:github}]))
    }
    useEffect(()=>{
        if (msg === "data updated successfully") {
            setAction("")
            dispatch({
                type: "clearmessage"
            })
        }
    },[msg])   
    return (
        <div className="border-b-[2px]  border-solid  py-4  ">
            <h1 className=' text-sm mb-3 font-bold md:text-xl text-[#777777]'>GITHUB</h1>

          { userdata.github ? <div className=' flex items-center gap-4'>
                <a href={userdata.github} className=' text-sm text-blue-500 font-medium'>{userdata.github}</a>
                <div className=' text-xl flex items-center gap-2 mb-2'>
                    <button onClick={()=>{
                        setAction("update")
                        setGithub(userdata.github)
                    }}><FiEdit2 /></button>
                    <button onClick={()=> dispatch(updategithub([{id:userdata._id} , {github:""}]))}><MdDeleteOutline /></button>
                </div>
            </div> :  <button  className=' text-base text-blue-500 font-medium' onClick={() => setAction("add")}>+ Add Github</button>}
            {action && <div className=' fixed bg-[#0000004a] sm:px-5  flex items-center justify-center w-full h-[100vh] overflow-auto top-0 z-50 left-0'>
                <div className=' bg-white  h-fit sm:px-10  w-full  sm:rounded-xl  py-4 px-3 flex flex-col items-center sm:w-[40rem]'>
                    <div className=' flex justify-end w-full text-2xl mt-3'>
                        <button onClick={()=>{
                        setAction("")
                        setGithub("")
                    }} > <IoCloseSharp /></button>
                    </div>
                    <h1 className=' font-semibold text-[#6A6A6A] text-lg my-2'>Github</h1>
                    <form className='w-full mt-4 flex flex-col items-end  gap-7' onSubmit={posturl}>
                        <div className=' flex flex-col  w-full'>
                            <label htmlFor="github" className='text-[#6A6A6A] text-sm font-medium'>Github</label>
                            <input id='github' value={github} onChange={(e)=>setGithub(e.target.value)}  required className='mt-2 outline-none focus:outline-[#6A38C2] bg-transparent w-full py-3 rounded-md pl-2 border-[1px] border-solid' />
                            {iserror.status && <span className=' text-xs mt-1 text-red-500 font-medium'>{iserror.msg.github}</span>}
                        </div>
                        <button type='submit' className=' bg-[#6A38C2] rounded-md py-3 px-7 font-medium text-white'>
                           {
                            isloading ? <ImSpinner8/> : action === "add" ? "Add URL" : "Update URL"
                           }
                        </button>
                    </form>
                </div>
            </div> }
        </div>
    )
}

export default Github
