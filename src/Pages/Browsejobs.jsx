import React, { useEffect, useState } from 'react'
import { IoBagOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FcGoogle } from 'react-icons/fc';
import { FaRegBookmark } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox"
import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { getjobs } from '@/redux/jobs/action';
import { jobList, jobtype, workarr, locationarr, marks } from '../utilis/arr'
import { useActionData, useNavigate } from 'react-router-dom';
import { GrPowerReset } from "react-icons/gr";
import { FiFilter } from "react-icons/fi";

const Browsejobs = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [jobarr, setJobArr] = useState([])
    const [obj, setObj] = useState({
        role: false, location: false
    })
    const [role, setRole] = useState("")
    const [location, setLocation] = useState("")
    const [work, setWork] = useState([])
    const [range, setRange] = useState(0)
    const { isloading, jobs, iserror } = useSelector((state) => state.job)
    const { userdata } = useSelector((state) => state.user)
    const [show, setShow] = useState(true)
    useEffect(() => {
        window.innerWidth < 768 && setShow(false)
    }, [])
    useEffect(() => {
        dispatch(getjobs(role, location, jobarr, work, range * 1000))
    }, [role, location, jobarr, work, range])


    return (
        <div className='  xl:w-[80rem] flex gap-5 px-3 w-full mt-4 mb-8'>
            {show && <div className=' fixed min-w-full px-4 bg-white py-5 h-full top-0 z-50 left-0  sm:h-auto overflow-auto  sm:static sm:min-w-[15rem] overflow-x-hidden sm:max-w-[20rem] '>
                <div className=' flex items-center w-full text-lg justify-between sm:justify-end py-4'>
                    <button className=' sm:hidden bg-[#6A38C2] text-white rounded-md py-2 px-3 text-sm' onClick={() => setShow(false)}>Close</button>
                    <button onClick={() => {
                        setJobArr([])
                        setWork([])
                        setLocation("")
                        setRole("")
                        setRange(0)
                    }}><GrPowerReset /></button>
                </div>
                <div className='flex flex-col gap-5 '>

                    {userdata && <div className='relative border-[2px] flex flex-col items-center text-center border-solid rounded-xl pt-4 px-5'>
                        <img src="https://joesch.moe/api/v1/random" alt="" className=' w-12 h-12 rounded-full' />
                        <h2 className=' font-semibold text-lg mt-3 mb-2'>{userdata.fullname} {userdata.lastname}</h2>
                        {/* <p className=' text-sm text-[#A8A8A8] font-medium'>Full Stack Developer At Delhi, New Delhi</p> */}
                        <div className='text-sm border-t-[2px] border-solid w-full py-4  mt-10'>
                            <button onClick={() => navigate("/applied-jobs")} className='w-full text-[#727272] flex items-center justify-center gap-1'><IoBagOutline className=' text-xl font-extrabold ' />Applied Jobs</button>
                        </div>
                        <FiEdit className='absolute top-2 right-2 text-2xl' />
                    </div>}

                    <div>
                        <div className='relative focus:outline-[#6C3BC3]  bg-[#F7F7F7] flex gap-1 items-center rounded-md py-3 pl-2 border-[2px] border-solid' >
                            <CiSearch />
                            <input type="text" value={role} className='w-full h-full  bg-transparent outline-none text-sm' placeholder='Search Job ' readOnly onFocus={() => setObj({ ...obj, role: true })} />
                            {obj.role && <div className=' absolute top-14 text-sm w-full bg-white z-40 left-0 rounded-md border border-solid'>
                                <ul className=' flex flex-col'>
                                    {
                                        jobList.map((item, index) =>
                                            <li key={index} className=' hover:bg-[#6C3BC3] cursor-pointer hover:text-white py-3 pl-2 border-b border-solid' onClick={() => {
                                                setRole(item)
                                                setObj({ ...obj, role: false })
                                            }}>{item}</li>
                                        )
                                    }
                                </ul>
                            </div>}
                        </div>
                        <div className=' relative mt-3 bg-[#F7F7F7] flex gap-1 items-center rounded-md py-3 pl-2 border-[2px] border-solid'>
                            <IoLocationOutline />
                            <input type="text" value={location} className=' bg-transparent outline-none text-sm' placeholder='Add Country or City ' readOnly onFocus={() => setObj({ ...obj, location: true })} />
                            {obj.location && <div className=' absolute top-14 text-sm w-full overflow-auto bg-white max-h-[18rem] left-0 rounded-md border border-solid'>
                                <ul className=' flex flex-col'>
                                    {
                                        locationarr.map((item, index) =>
                                            <li key={index} className=' hover:bg-[#6C3BC3] cursor-pointer hover:text-white py-3 pl-2 border-b border-solid' onClick={() => {
                                                setLocation(item)
                                                setObj({ ...obj, location: false })
                                            }}>{item}</li>
                                        )
                                    }
                                </ul>
                            </div>}
                        </div>
                    </div>
                    <div className='border-[2px] flex flex-col items-center gap-7 text-center border-solid rounded-xl py-4 px-5'>
                        <div className=' w-full flex flex-col gap-3'>
                            <div className=' flex text-sm items-center justify-between w-full'>
                                <p className=' font-semibold'>Job Type</p>
                                {/* <IoIosArrowDown /> */}
                            </div>
                            <div className=' flex flex-col gap-3'>
                                {
                                    jobtype.map((jobs, index) =>
                                        <div key={index} className=' flex items-center gap-3'>
                                            <Checkbox id="terms" checked={jobarr.includes(jobs) ? true : false} onClick={() => jobarr.includes(jobs) ? setJobArr(jobarr.filter((item) => item !== jobs)) : setJobArr([...jobarr, jobs])} />
                                            <label
                                                htmlFor="terms"
                                                className="text-sm  text-[#727272]"
                                            >
                                                {jobs}
                                            </label>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className=' w-full flex flex-col gap-3'>
                            <div className=' flex text-sm items-center justify-between w-full'>
                                <p className=' font-semibold'>Work Style</p>
                                {/* <IoIosArrowDown /> */}
                            </div>
                            <div className=' flex flex-col gap-3'>
                                {
                                    workarr.map((works, index) =>
                                        <div key={index} className=' flex items-center gap-3'>
                                            <Checkbox id="terms" checked={work.includes(works) ? true : false} onClick={
                                                () => work.includes(works) ? setWork(work.filter((item) => item !== works)) : setWork([...work, works])
                                            } />
                                            <label
                                                htmlFor="terms"
                                                className="text-sm  text-[#727272]"
                                            >
                                                {works}
                                            </label>
                                        </div>
                                    )
                                }

                            </div>
                        </div>
                        <div className=' w-full flex flex-col gap-3'>
                            <div className=' flex flex-col gap-3 items-start text-sm w-full'>
                                <Slider
                                    track="inverted"
                                    aria-labelledby="track-inverted-slider"
                                    step={20}
                                    marks={marks}
                                    onChange={(e) => setRange(e.target.value)}
                                    color='red'
                                    value={range}
                                />
                            </div>

                        </div>
                    </div>
                </div>

            </div>}
            {
                isloading ? <h1>loading...</h1> : iserror.status ? <h1>{iserror.msg}</h1> : jobs && jobs.length ?
                    <div className='w-full '>
                        <button className=' text-xl sm:hidden' onClick={() => setShow(true)}><FiFilter /></button>
                        <p className=' font-semibold text-lg text-center'>
                            Showing <span className=' text-[#6C3BC3]'>{jobs.length}</span> jobs
                            {role && <>  for
                                <span className=' text-[#6C3BC3]'> {role} </span>
                            </>
                            }
                            {location &&
                                <>
                                    in <span className=' text-[#6C3BC3]'>{location}</span>
                                </>
                            }
                        </p>
                        <ul className=' grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-5'>
                            {
                                jobs.map((item, index) =>
                                    <li key={index} onClick={() => navigate("/job-info", { state: {jobid:item} })} className='listgrid rounded-lg flex flex-col items-start  py-5 px-4 border-[1px] border-solid cursor-pointer'>
                                        {item.companyid && <div className=' text-[#7B7B7B] flex items-center justify-start mt-1 gap-10 text-sm'>
                                            <div className=' flex items-center gap-5'>
                                                <div className=' bg-[#F5F5F5] rounded-md min-w-20 h-20 flex justify-center items-center '>
                                                    <img src={item.companyid.img} alt="" className=' w-16 ' />
                                                </div>
                                                <div>
                                                    <h2 className=' font-bold text-base'>{item.role}</h2>
                                                    <p>{item.companyid.companyname}</p>
                                                    <p>{item.location}</p>
                                                </div>
                                            </div>
                                        </div>}
                                        {
                                            item &&
                                            <>
                                                <div className=' flex  flex-wrap gap-3 my-3'>
                                                    <div className=' bg-[#EEF5FF] text-[#3A7BDB] text-xs py-2 font-semibold px-4 rounded-md'>
                                                        {item?.jobtype}
                                                    </div>
                                                    <div className=' bg-[#EEF5FF] text-[#3A7BDB] text-xs py-2 font-semibold px-4 rounded-md'>
                                                        {item?.workstyle}
                                                    </div>
                                                </div>

                                                <div className=' text-xs txt-[#868686] mb-4'>
                                                    {item.description?.slice(0, 100)}...
                                                </div>
                                                <div className=' flex justify-between items-center w-full'>
                                                    <div className=' flex gap-6 text-xs'>
                                                        <p className=' text-[#7E7E7E]'>{item.createdAt.split("T")[0]}</p>
                                                    </div>
                                                    <FaRegBookmark className=' text-lg' />
                                                </div>
                                            </>
                                        }
                                    </li>
                                )
                            }
                        </ul>
                    </div> : "No jobs"
            }
        </div >
    )
}

export default Browsejobs
