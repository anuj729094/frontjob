import { applyjob, checkuserjobexists } from '@/redux/jobs/action'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { IoLocationOutline } from "react-icons/io5";
import { SiOnlyoffice } from "react-icons/si";
import { RiMoneyPoundBoxFill } from "react-icons/ri";
import { MdOutlineDateRange } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaIndustry } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';

const Job = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user, isloading, iserror } = useSelector((state) => state.job)
  useEffect(() => {
    if (location.state.jobid._id) {
      dispatch(checkuserjobexists(location.state.jobid._id))
    }
    else {
      navigate("/browse-jobs")
    }
  }, [location.state])

  useEffect(() => {
    if (iserror.status) {
      dispatch({
        type: "clearerror"
      })
    }
  }, [iserror])
 
  return (
    <>
      {
        isloading ? <h1>loading...</h1> :
          <div className=' border border-solid flex flex-col items-center rounded-md  mx-2 xl:w-[50rem] px-7'>
            <div className=' my-3 text-sm border-b border-solid flex flex-col gap-6 py-5 w-full'>
              <div>
                <h2 className=' font-semibold text-xl'>{location.state.jobid.role}</h2>
                <p className=' text-[#959595] font-medium mt-2'>{location.state.jobid.companyid.companyname}</p>
              </div>
              <div className='job flex items-center gap-7'>
                <div>
                  <IoLocationOutline />
                  <p>{location.state.jobid.location}</p>
                </div>
                <div>
                  <SiOnlyoffice />
                  <p>{location.state.jobid.jobtype}</p>
                </div>
                <div>
                  <RiMoneyPoundBoxFill />
                  <p>{location.state.jobid.salary}</p>
                </div>
              </div>
            </div>
            <div className=' my-3 text-sm border-b border-solid flex flex-col gap-10 py-5 w-full'>
              <div>
                <h2 className=' font-medium text-xl'>About the Internship</h2>
                <p className=' text-[#7D7D7D] mt-2'>{location.state.jobid.description}</p>
              </div>
              <div>
                <h4 className=' text-xl font-medium'>Skills Rquired</h4>
                <ul className=' flex items-center gap-4 flex-wrap mt-4'>
                  {
                    location.state.jobid.skills.map((jobs, index) =>
                      <li key={index} className=' text-[#7F7F7F] bg-[#F8F8F8] rounded-3xl py-2 px-4'>{jobs}</li>
                    )
                  }
                </ul>
              </div>
            </div>
            <div className=' my-3 border-b border-solid text-sm flex flex-col gap-10 py-5 w-full'>
              <div>
                <h4 className=' font-medium text-xl'>About {location.state.jobid.companyid.companyname}</h4>
                <p className=' mt-3 text-[#7D7D7D]'>{location.state.jobid.companyid.description}</p>
              </div>
              <ul className='job border border-solid flex items-center justify-between text-base rounded-md py-5 px-4'>
                <li>
                  <div>
                    <MdOutlineDateRange />
                    <p>{location.state.jobid.companyid.established}</p>
                  </div>
                </li>
                <li>
                  <div>
                    <FaPeopleGroup />
                    <p>{location.state.jobid.companyid.employess} Employees</p>
                  </div>
                </li>
                <li>
                  <div>
                    <FaIndustry />
                    <p>{location.state.jobid.companyid.companytype}</p>
                  </div>
                </li>
              </ul>
            </div>
            {
              user ? <button disabled className='bg-[#BBBBBB] text-white rounded-md py-3 px-5 my-5 cursor-not-allowed'>Applied</button> : <button className=' bg-[#6A38C2] text-white py-3 px-5 rounded-md my-5' onClick={() => dispatch(applyjob(location.state.jobid._id))}>Apply</button>
            }
            <Toaster />
          </div>
      }
    </>
  )
}

export default Job
