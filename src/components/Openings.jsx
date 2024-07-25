import React from 'react'
import { IoLogoFigma } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { jobs } from '@/utilis/arr';

const Openings = () => {
    return (
        <div className='  my-10 md:my-20'>
            <div className=' xl:w-[75rem] px-3'>
                <div>
                    <h2 className=' font-bold text-2xl md:text-4xl tracking-wide leading-9'><span className=' text-[#6A38C2]'>Latest and Top </span>Job Openings</h2>
                    <p className=' text-sm leading-6 my-3 md:my-5 sm:w-[34rem]'>Discover the best job openings from the giant firms in which you might want to apply and take a chance to get hired by top fortune companies</p>
                </div>
                <div>
                    <ul className='explore grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {
                            jobs.map((item, index) =>
                                <li key={index} className='listgrid rounded-lg  py-5 px-4 border-[1px] border-solid'>
                                    <div className=' flex items-center gap-3'>
                                        <div className=' bg-white rounded-full w-9 h-9 flex items-center justify-center'>
                                           <img src={item.companyImage} alt="" className=' w-16 h-9 rounded-full' onError={(e)=>e.target.src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGNvbXBhbnklMjBsb2dvfGVufDB8fHx8MTY4ODI0NDMyMA&ixlib=rb-1.2.1&q=80&w=400"}/>
                                        </div>
                                        <p className='flex flex-col font-semibold'>{item.companyName} <span className=' text-xs mt-1 font-medium'>{item.companyLocation}</span></p>
                                    </div>
                                    <h4 className=' font-semibold  mt-3'>{item.jobTitle}</h4>
                                    <p className=' text-sm my-2 text-[#636262]'>{item.jobDescription}</p>
                                    <ul className=' text-xs whitespace-nowrap font-bold flex items-center gap-2'>
                                        <li className=' bg-[#F3F7FF] text-[#5994FB] rounded-md py-2 px-2'>{item.openings[0].positionId}</li>
                                        <li className=' bg-[#FFF0EA] text-[#FB7B47] rounded-md py-2 px-2'>{item.openings[0].positionType}</li>
                                        <li className=' bg-[#E1FFFD] text-[#41d8d1] rounded-md py-2 px-2'>{item.openings[0].experienceRequired}</li>
                                    </ul>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Openings
