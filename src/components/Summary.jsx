import { project, updatesummary  ,  } from '@/redux/userauth/action'
import React, { useEffect, useState } from 'react'
import { FiEdit2 } from 'react-icons/fi'
import { ImSpinner8 } from 'react-icons/im'
import { IoCloseSharp } from 'react-icons/io5'
import { MdDeleteOutline } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'

const Summary = () => {
    const dispatch = useDispatch()
    const { isloading, userdata, iserror, msg } = useSelector((state) => state.user)
    const [action, setAction] = useState("")
    const [summary, setSummary] = useState("")
    const handlesummary = (e) => {
        e.preventDefault()
        dispatch(updatesummary([{ id: userdata._id }, { summary: summary }]))
    }
    const handleupdatesummary = (type, data) => {
        setAction(type)
        setSummary(data)
    }
    useEffect(() => {
        if (msg === "data updated successfully") {
            setAction("")
            setSummary("")
            dispatch({
                type: "clearmessage"
            })
        }
    }, [msg])
    return (
        <div className='border-b-[2px] border-solid flex  items-start  py-4 text-[#777777]'>
            {userdata.summary ? <div className='flex items-start gap-7'>
                <div>
                    <h1 className=' text-sm mb-2 font-bold md:text-xl'>SUMMARY</h1>
                    <p className=' text-sm'>{userdata.summary}</p>
                </div>
                <div className=' text-xl flex items-center gap-2'>
                    <button onClick={() => handleupdatesummary("update", userdata.summary)} ><FiEdit2 /></button>
                    <button onClick={()=>dispatch(project([{id:userdata._id} , {summary:null}]))}
                    ><MdDeleteOutline /></button>
                </div>
            </div> : <button className=' text-base text-blue-500 font-medium' onClick={() => setAction("add")}>+ Add Summary</button>}
            {action && <div className=' fixed bg-[#0000004a] sm:px-5 sm:py-4 flex justify-center w-full h-[100vh] overflow-auto top-0 z-50 left-0'>
                <div className=' bg-white sm:mt-20 h-fit sm:px-10  w-full  sm:rounded-xl  py-4 px-3 flex flex-col items-center sm:w-[40rem]'>
                    <div className=' flex justify-end w-full text-2xl mt-3'>
                        <button onClick={() => {
                            setSummary("")
                            setAction("")
                        }} > <IoCloseSharp /></button>
                    </div>
                    <h1 className=' font-semibold text-[#6A6A6A] text-lg my-2'>Summary</h1>
                    <form className='w-full mt-4 flex flex-col items-end  gap-7' onSubmit={handlesummary}>
                        <div className=' flex flex-col  w-full'>
                            <label htmlFor="summary" className='text-[#6A6A6A] text-sm font-medium'>Summary</label>
                            <textarea id='summary' value={summary} onChange={(e) => setSummary(e.target.value)} rows={5} required className='mt-2 outline-none focus:outline-[#6A38C2] bg-transparent w-full py-3 rounded-md pl-2 border-[1px] border-solid' ></textarea>
                            {iserror.status && <span className=' text-xs mt-1 text-red-500 font-medium'>{iserror.msg.summary}</span>}
                        </div>
                        <button type='submit' className=' bg-[#6A38C2] rounded-md py-3 px-7 font-medium text-white'>
                            {
                                isloading ? <ImSpinner8 /> : action === "add" ? "Add  Summary" : "Update Summary"
                            }
                        </button>
                    </form>
                </div>
            </div>}
        </div>
    )
}

export default Summary
