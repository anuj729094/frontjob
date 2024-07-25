import { updatepersonalinfo } from '@/redux/userauth/action';
import { SendToBack } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { FiEdit2 } from "react-icons/fi";
import { ImSpinner8 } from 'react-icons/im';
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';

const PersonalInfo = () => {
    const arr = [
        {
            img: "https://internshala.com/static/images/student/profile/gender-female.svg",
            tag: "Female"
        },
        {
            img: "https://internshala.com/static/images/student/profile/gender-male.svg",
            tag: "Male"
        },
        {
            img: "https://internshala.com/static/images/student/profile/gender-others.sv",
            tag: "Other"
        }
    ]
    const dispatch = useDispatch()
    const [user, setUser] = useState(null)
    const { userdata, isloading, msg, iserror } = useSelector((state) => state.user)
    const handleuser = () => {
        document.body.style.overflowY = "hidden"
        const { fullname, lastname, email, phone, gender, location } = userdata
        setUser({ id: userdata._id, fullname: fullname, lastname: lastname, email: email, phone: phone ? phone : "", gender: gender ? gender : "", location: location ? location : "" })
    }
    const postdata = (e) => {
        e.preventDefault()
        dispatch(updatepersonalinfo(user))
    }
    useEffect(()=>{
       if(msg==="updated successfully"){
          setUser(null)
          dispatch({
            type:"clearmessage"
          })
       }
    },[msg])
    return (
        <div className="border-b-[2px] border-solid  flex gap-3 py-4 items-start ">
            {userdata && <div className='about-section flex flex-col gap-1 text-sm text-[#777777] '>
                <h1 className=' text-2xl md:text-4xl font-semibold text-black'>{userdata.fullname} {userdata.lastname}</h1>
                <p>{userdata.email}</p>
                <p>{userdata.phone}</p>
                <p>{userdata.location}</p>
            </div>}
            
            <button onClick={handleuser}><FiEdit2 className=' mt-2 text-lg' /></button>


            {user && <div className=' fixed bg-[#0000004a] sm:px-5 sm:py-4 flex justify-center w-full h-[100vh] overflow-auto top-0 z-50 left-0'>
                <div className=' bg-white sm:mt-20 h-fit sm:px-10  w-full  sm:rounded-xl  py-4 px-3 flex flex-col items-center sm:w-[40rem]'>
                    <div className=' flex justify-end w-full text-2xl mt-3'>
                      <button onClick={()=>{
                         setUser(null)
                         dispatch({
                            type: "clearerror"
                        })
                      }}> <IoCloseSharp /></button> 
                    </div>
                    <h1 className=' font-semibold text-[#6A6A6A] text-lg my-2'>Personal Details</h1>
                    <form className='w-full mt-4 flex flex-col items-end gap-7' onSubmit={postdata}>
                        <div className=' flex items-center flex-wrap sm:flex-nowrap gap-2  w-full'>
                            <div className=' flex flex-col w-full '>
                                <label htmlFor="firstname" className=' text-[#6A6A6A] text-sm font-medium'>First Name</label>
                                <input type="text" value={user.fullname} onChange={(e) => setUser({ ...user, fullname: e.target.value })} id='firstname' required name='firstname' className='mt-2 outline-none focus:outline-[#6A38C2] bg-transparent py-3 rounded-md pl-2 border-[1px] border-solid' />
                            </div>
                            <div className=' flex flex-col  w-full'>
                                <label htmlFor="lastname" className='text-[#6A6A6A] text-sm font-medium'>Last Name</label>
                                <input type="text" id='lastname' required value={user.lastname} onChange={(e) => setUser({ ...user, lastname: e.target.value })} className='mt-2 outline-none focus:outline-[#6A38C2] bg-transparent py-3 rounded-md pl-2 border-[1px] border-solid' />
                            </div>
                        </div>
                        <div className='w-full flex flex-col'>
                            <label htmlFor="email" className='text-[#6A6A6A] text-sm font-medium'>Email</label>
                            <input type="email" id='email' required value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} className='mt-2 outline-none focus:outline-[#6A38C2] bg-transparent py-3 rounded-md pl-2 border-[1px] border-solid' />
                        </div>
                        <div className='w-full flex flex-col'>
                            <label htmlFor="number" className='text-[#6A6A6A] text-sm font-medium'>Contact Number</label>
                            <input type="text" id='number' required value={user.phone} onChange={(e) => setUser({ ...user, phone: e.target.value })} maxLength="10" className='mt-2 outline-none focus:outline-[#6A38C2] bg-transparent py-3 rounded-md pl-2 border-[1px] border-solid' />
                            {iserror.status && <span className=' text-xs mt-1 text-red-500 font-medium'>{iserror.msg.phone}</span>}
                        </div>
                        <div className='w-full flex flex-col'>
                            <label htmlFor="City" className='text-[#6A6A6A] text-sm  font-medium'>Current City</label>
                            <p className=' text-[#9E9E9E] text-xs font-semibold mt-2'>To connect with you opportunities closer to you</p>
                            <input type="text" id='City' required value={user.location} onChange={(e) => setUser({ ...user, location: e.target.value })} className='mt-2 outline-none focus:outline-[#6A38C2] bg-transparent py-3 rounded-md pl-2 border-[1px] border-solid' />
                        </div>
                        <div className='w-full flex flex-col'>
                            <p className='text-[#6A6A6A] text-sm  font-medium'>Gender</p>
                            <ul className=' flex flex-wrap items-center gap-4 my-4'>
                                {
                                    arr.map((item, index) =>
                                        <li key={index} onClick={() => setUser({ ...user, gender: item.tag })} style={user.gender === item.tag ? { backgroundColor: "#6A38C2", color: "white" } : {}} className=' cursor-pointer flex items-center gap-1 text-sm border-[1.5px] border-solid border-[#DDDDDD] py-[0.65rem] px-4 rounded-3xl '>
                                            <img src={item.img} alt="" />
                                            <p>{item.tag}</p>
                                        </li>
                                    )
                                }
                            </ul>
                            {iserror.status && <span className=' text-xs mt-1 text-red-500 font-medium'>{iserror.msg.gender}</span>}
                        </div>
                        <button type='submit' className=' bg-[#6A38C2] rounded-md py-3 px-7 font-medium text-white'>
                            {isloading ? <ImSpinner8 className='spinner text-xl' /> : <p>Update</p>}
                        </button>
                    </form>
                </div>
            </div>}
        </div>
    )
}

export default PersonalInfo
