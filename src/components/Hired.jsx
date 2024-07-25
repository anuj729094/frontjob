import React from 'react'
import { FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoIosDocument } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";

const Hired = () => {
    return (
        <div className=' my-10'>
            <div className=' xl:w-[75rem] px-3 text-center'>
                <div className=' flex flex-col items-center'>
                    <h2 className=' font-bold text-2xl md:text-4xl leading-9'>Get Hired in <span className=' text-[#6A38C2]'>4 quick easy steps</span></h2>
                    <p className=' text-sm leading-6 my-3 md:w-[30rem]'>The quickest and most effective way to get hired by the top firm working in your career interst areas</p>
                </div>
                <div>
                    <ul className='hired text-left grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 my-8 '>
                        <li className='flex flex-col items-start border-[1px] border-solid rounded-lg py-7 px-8 '>
                            <div className=' bg-[#E9DDFF] flex items-center justify-center w-10 h-10 rounded-full'>
                                <FaUser className=' text-[#FA4E09] text-2xl' />
                            </div>
                            <h3 className=' font-bold text-base my-1'>Search Job</h3>
                            <p className=' text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, enim totam. Itaque corporis error soluta ipsam .</p>
                        </li>
                        <li className='flex flex-col items-start border-[1px] border-solid rounded-lg py-7 px-8 md:translate-y-7'>
                            <div className=' bg-[#E9DDFF] flex items-center justify-center w-10 h-10 rounded-full'>
                                <CiSearch className=' text-[#6A38C2] text-2xl' />
                            </div>
                            <h3 className=' font-bold text-base my-1'>Search Job</h3>
                            <p className=' text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, enim totam. Itaque corporis error soluta ipsam .</p>
                        </li>
                        <li className='flex flex-col items-start border-[1px] border-solid rounded-lg py-7 px-8'>
                            <div className=' bg-[#F0FFFE] flex items-center justify-center w-10 h-10 rounded-full'>
                                <IoIosDocument className=' text-[#42C5BD] text-2xl' />
                            </div>
                            <h3 className=' font-bold text-base my-1'>Upload CV/Resume</h3>
                            <p className=' text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, enim totam. Itaque corporis error soluta ipsam .</p>
                        </li>
                        <li className='flex flex-col items-start border-[1px] border-solid rounded-lg py-7 px-8 md:translate-y-7'>
                            <div className=' bg-[#FFF8E3] flex items-center justify-center w-10 h-10 rounded-full'>
                                <FaShoppingBag className=' text-[#FBBC09] text-2xl' />
                            </div>
                            <h3 className=' font-bold text-base my-1'>Get Job</h3>
                            <p className=' text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, enim totam. Itaque corporis error soluta ipsam .</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Hired
