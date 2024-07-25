import React from 'react'
import { FaShoppingBag } from "react-icons/fa";
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className=' '>
            <div className=' xl:w-[75rem] px-3  my-5 text-center md:flex md:justify-center lg:my-0 lg:h-[26rem]  flex justify-between items-center '>
                <div className='flex flex-col items-center  md:w-[80%]'>
                    <p className='bg-[#FEE9E0] text-[#FA692E] font-semibold rounded-3xl text-sm py-2 px-3 flex items-center gap-1'><FaShoppingBag className=' text-[#56392C]' />No.1 Job Hunt Website</p>
                    <h1 className=' leading-10 text-3xl md:text-5xl md:leading-[4rem] lg:text-6xl lg:leading-[5rem] font-bold my-3'>Search, Apply & <br/>Get Your <span className=' text-[#6A38C2]'>Dream Job</span></h1>
                    <p className=' text-sm leading-6 md:leading-7 md:w-[30rem]'>Start your hunt for the best, life-changing career opportunities from here in your selected areas conveniently and get hired quickly</p>
                    <div className='btns flex my-4 gap-4'>
                        <Link to="/browse-jobs" className='bg-[#6A38C2] text-white tracking-wider rounded-md text-sm px-4 py-2'>Browse Jobs</Link>
                        <button className='flex items-center gap-1 text-sm'><div className='bg-[#6A38C2] rounded-full p-2'><SiGoogledisplayandvideo360 className='text-white' /></div>How it works?</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
