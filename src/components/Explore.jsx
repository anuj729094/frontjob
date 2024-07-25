import React from 'react'
import { SiCodesignal } from "react-icons/si";
import { AiOutlineStock } from "react-icons/ai";
import { CiShop } from "react-icons/ci";
import { FaMoneyBill } from "react-icons/fa";
import { SiDsautomobiles } from "react-icons/si";
import { GoPackage } from "react-icons/go";
import { RiAdminLine } from "react-icons/ri";
import { MdConstruction } from "react-icons/md";

const Explore = () => {
    return (
        <div className='  md:my-20'>
            <div className=' xl:w-[75rem] px-3'>
                <div className='text-center flex flex-col items-center'>
                    <h4 className='font-bold text-2xl md:text-4xl leading-9  md:leading-[3rem] md:w-[45rem]'><span className=' text-[#6A38C2]'>Countless Career Options </span>Are Waiting For You to Explore</h4>
                    <ul className=' w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4 sm:mt-10'>
                        <li className='listgrid flex flex-col items-start border-[1px] border-solid rounded-lg py-7 px-4'>
                            <div className='bg-[#E9DDFF] rounded-md p-2'>
                                <SiCodesignal className=' text-[#FA692E] text-2xl' />
                            </div>
                            <h2 className=' font-bold my-1'>Design</h2>
                            <p className=' text-sm text-[#636262]'>200+ job openings</p>
                        </li>
                        <li className='listgrid  flex flex-col items-start border-[1px] border-solid rounded-lg py-7 px-4'>
                            <div className='bg-[#FFF2F2] rounded-md p-2'>
                                <AiOutlineStock className='  text-2xl' />
                            </div>
                            <h2 className=' font-bold my-1'>Sales</h2>
                            <p className=' text-sm'>200+ job openings</p>
                        </li>
                        <li className='listgrid flex flex-col items-start border-[1px] border-solid rounded-lg py-7 px-4'>
                            <div className='bg-[#FFF2F2] rounded-md p-2'>
                                <CiShop className=' text-[#FF0404] text-2xl' />
                            </div>
                            <h2 className=' font-bold my-1'>Marketing</h2>
                            <p className=' text-sm text-[#636262]'>200+ job openings</p>
                        </li>
                        <li className='listgrid flex flex-col items-start border-[1px] border-solid rounded-lg py-7 px-4'>
                            <div className='bg-[#FFF8E3] rounded-md p-2'>
                                <FaMoneyBill className=' text-[#FBBC09] text-2xl' />
                            </div>
                            <h2 className=' font-bold my-1'>Finance</h2>
                            <p className=' text-sm text-[#636262]'>200+ job openings</p>
                        </li>
                        <li className='listgrid flex flex-col items-start border-[1px] border-solid rounded-lg py-7 px-4'>
                            <div className='bg-[#E6ECF9] rounded-md p-2'>
                                <SiDsautomobiles className=' text-[#4982E7] text-2xl' />
                            </div>
                            <h2 className=' font-bold my-1'>Automobile</h2>
                            <p className=' text-sm text-[#636262]'>200+ job openings</p>
                        </li>
                        <li className='listgrid flex flex-col items-start border-[1px] border-solid rounded-lg py-7 px-4'>
                            <div className='bg-[#F1FEF5] rounded-md p-2'>
                                <GoPackage className=' text-[#3AAA58] text-2xl' />
                            </div>
                            <h2 className=' font-bold my-1'>Logistics/Delievery</h2>
                            <p className=' text-sm text-[#636262]'>200+ job openings</p>
                        </li>
                        <li className='listgrid flex flex-col items-start border-[1px] border-solid rounded-lg py-7 px-4'>
                            <div className='bg-[#F6F5FF] rounded-md p-2'>
                                <RiAdminLine className=' text-[#443EE0] text-2xl' />
                            </div>
                            <h2 className=' font-bold my-1'>Admin</h2>
                            <p className=' text-sm text-[#636262]'>200+ job openings</p>
                        </li>
                        <li className='listgrid flex flex-col items-start border-[1px] border-solid rounded-lg py-7 px-4'>
                            <div className='bg-[#FDFFFF] rounded-md p-2'>
                                <MdConstruction className=' text-[#45C6BE] text-2xl' />
                            </div>
                            <h2 className=' font-bold my-1'>Contruction</h2>
                            <p className=' text-sm text-[#636262]'>200+ job openings</p>
                        </li>
                    </ul> 
                </div>

            </div>
        </div>
    )
}

export default Explore
