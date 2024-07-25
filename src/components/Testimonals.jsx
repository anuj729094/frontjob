import React from 'react'
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import { EffectCards , Pagination } from 'swiper/modules';

const Testimonals = () => {
    return (
        <div className='xl:w-[75rem] px-3 my-10 md:my-20  '>
            <div className='flex flex-col items-center text-center  gap-2'>
                <h2 className='font-bold text-2xl md:text-4xl tracking-wide leading-9'>Testimonals</h2>
                <p className='  text-sm leading-6 sm:w-[30rem]'>Now let's know what our career aspirants have to say about our evolving community and career finding services</p>
                <div className='w-full sm:w-[20rem] lg:w-[40rem]   mt-5   '>
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards , Pagination]}
                        className="mySwiper"
                        pagination={true}
                    >
                        <SwiperSlide>
                            <div className=' bg-[#6A38C2] flex flex-col text-center items-center gap-3 py-4 px-5 rounded-xl mt-3 sm:w-[20rem] lg:w-[40rem]'>
                                <img src="https://joesch.moe/api/v1/random" alt="" className=' rounded-full w-12 h-12' />
                                <p className=' text-sm my-2 text-[white] leading-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam corrupti mollitia iure neque omnis quam hic itaque consequatur laudantium vel nulla provident pariatur assumenda porro placeat, adipisci nam sed autem quae, ex culpa maxime necessitatibus eius. Qui, atque incidunt iste cupiditate eveniet maxime fugiat cum ad nemo soluta neque at?</p>
                                <ul className=' flex items-center gap-2'>
                                    <li><FaStar className=' text-[#FABB0B]' /></li>
                                    <li><FaStar className=' text-[#FABB0B]' /></li>
                                    <li><FaStar className=' text-[#FABB0B]' /></li>
                                    <li><FaStar className=' text-[#FABB0B]' /></li>
                                    <li><FaStar className=' text-[#FABB0B]' /></li>
                                </ul>
                                <div>
                                    <h4 className=' font-semibold text-white'>John Doe</h4>
                                    <h5 className=' text-sm font-medium tracking-wide text-[#d9d8dc]' >Full Stack Developer</h5>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' bg-[#6A38C2] flex flex-col text-center items-center gap-3 py-4 px-5 rounded-xl mt-3 sm:w-[20rem] lg:w-[40rem]'>
                                <img src="https://joesch.moe/api/v1/random" alt="" className=' rounded-full w-12 h-12' />
                                <p className=' text-sm my-2 text-[white] leading-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam corrupti mollitia iure neque omnis quam hic itaque consequatur laudantium vel nulla provident pariatur assumenda porro placeat, adipisci nam sed autem quae, ex culpa maxime necessitatibus eius. Qui, atque incidunt iste cupiditate eveniet maxime fugiat cum ad nemo soluta neque at?</p>
                                <ul className=' flex items-center gap-2'>
                                    <li><FaStar className=' text-[#FABB0B]' /></li>
                                    <li><FaStar className=' text-[#FABB0B]' /></li>
                                    <li><FaStar className=' text-[#FABB0B]' /></li>
                                    <li><FaStar className=' text-[#FABB0B]' /></li>
                                    <li><FaStar className=' text-[#FABB0B]' /></li>
                                </ul>
                                <div>
                                    <h4 className=' font-semibold text-white'>John Doe</h4>
                                    <h5 className=' text-sm font-medium tracking-wide text-[#d9d8dc]' >Full Stack Developer</h5>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' bg-[#6A38C2] flex flex-col text-center items-center gap-3 py-4 px-5 rounded-xl mt-3 sm:w-[20rem] lg:w-[40rem]'>
                                <img src="https://joesch.moe/api/v1/random" alt="" className=' rounded-full w-12 h-12' />
                                <p className=' text-sm my-2 text-[white] leading-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam corrupti mollitia iure neque omnis quam hic itaque consequatur laudantium vel nulla provident pariatur assumenda porro placeat, adipisci nam sed autem quae, ex culpa maxime necessitatibus eius. Qui, atque incidunt iste cupiditate eveniet maxime fugiat cum ad nemo soluta neque at?</p>
                                <ul className=' flex items-center gap-2'>
                                    <li><FaStar className=' text-[#FABB0B]' /></li>
                                    <li><FaStar className=' text-[#FABB0B]' /></li>
                                    <li><FaStar className=' text-[#FABB0B]' /></li>
                                    <li><FaStar className=' text-[#FABB0B]' /></li>
                                    <li><FaStar className=' text-[#FABB0B]' /></li>
                                </ul>
                                <div>
                                    <h4 className=' font-semibold text-white'>John Doe</h4>
                                    <h5 className=' text-sm font-medium tracking-wide text-[#d9d8dc]' >Full Stack Developer</h5>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' bg-[#6A38C2] flex flex-col text-center items-center gap-3 py-4 px-5 rounded-xl mt-3 sm:w-[20rem] lg:w-[40rem]'>
                                <img src="https://joesch.moe/api/v1/random" alt="" className=' rounded-full w-12 h-12' />
                                <p className=' text-sm my-2 text-[white] leading-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam corrupti mollitia iure neque omnis quam hic itaque consequatur laudantium vel nulla provident pariatur assumenda porro placeat, adipisci nam sed autem quae, ex culpa maxime necessitatibus eius. Qui, atque incidunt iste cupiditate eveniet maxime fugiat cum ad nemo soluta neque at?</p>
                                <ul className=' flex items-center gap-2'>
                                    <li><FaStar className=' text-[#FABB0B]' /></li>
                                    <li><FaStar className=' text-[#FABB0B]' /></li>
                                    <li><FaStar className=' text-[#FABB0B]' /></li>
                                    <li><FaStar className=' text-[#FABB0B]' /></li>
                                    <li><FaStar className=' text-[#FABB0B]' /></li>
                                </ul>
                                <div>
                                    <h4 className=' font-semibold text-white'>John Doe</h4>
                                    <h5 className=' text-sm font-medium tracking-wide text-[#d9d8dc]' >Full Stack Developer</h5>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>


            </div>

        </div>
    )
}

export default Testimonals
