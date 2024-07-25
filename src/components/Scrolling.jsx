import React from 'react'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import 'swiper/css/effect-coverflow';

const Scrolling = () => {
    return (
        <div className='px-3 my-10 w-full '>
            <div className='w-full'>
                    <Swiper
                        // spaceBetween={30}
                        slidesPerView={'auto'}
                        centeredSlides={true}
                        loop={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            }
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: true,
                        }}
                        effect={'coverflow'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            // depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
                        className="mySwiper"
                    >
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8].map((item) =>
                                <SwiperSlide key={item}>
                                    <div
                                       
                                        className='testimonials cursor-pointer border-[1px] flex flex-col gap-4 items-center  border-solid border-blue-950 py-[25px] bg-[#87878b0c]  px-[18px] lg:px-[20px] lg:py-[30px] text-[#DAD9EF] rounded-2xl'>
                                        <q className=' lg:text-[16px] lg:tracking-wide'>
                                            Milestone Global Moneymart (P) Ltd established in March 2006, earlier with the name of Milestone Portfolio Consultants (P) Ltd, proudly offers a comprehensive suite of saving, investment and insurance products across asset classes, which provide income and wealth creation opportunities to our large retail customer bas.
                                        </q>
                                        <h2>Lorem ipsum, dolor sit </h2>
                                    </div>
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </div>

        </div>
    )
}

export default Scrolling
