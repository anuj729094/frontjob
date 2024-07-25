import React from 'react'

const Offer = () => {
    return (
        <div style={{scrollMarginTop:"5rem"}} className=' xl:w-[75rem] px-3' id="services">
            <h2 className='font-bold text-2xl md:text-4xl leading-9'>What We Offer</h2>
            <p className=' text-[#636262] text-sm my-3 leading-6 sm:w-[36rem] sm:my-5'>Job Portal is the right platform for you to get various job recommedations , get career counselling and find your ideal job profile</p>
            <ul className=' grid grid-cols-1 sm:grid-cols-3 gap-4'>
                <li>
                    <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww" alt="" className=' rounded-md w-full' />
                    <div className=' flex gap-2 mt-3'>
                        <p className=' bold text-2xl'>01</p>
                        <div className='  flex gap-2'>
                            <span className=' w-1 h-full bg-[#6A38C2]'></span>
                            <div>
                            <h2 className=' font-bold'>Job Recommedations</h2>
                            <p className=' text-sm mt-1'>Set yout job preferences and get countless of your best fit job recommedation.</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <img src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww" alt="" className=' rounded-md w-full' />
                    <div className=' flex gap-2 mt-3'>
                        <p className=' bold text-2xl'>01</p>
                        <div className='  flex gap-2'>
                            <span className=' w-1 h-full bg-[#6A38C2]'></span>
                            <div>
                            <h2 className=' font-bold'>Job Recommedations</h2>
                            <p className=' text-sm mt-1'>Set yout job preferences and get countless of your best fit job recommedation.</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFwdG9wfGVufDB8fDB8fHww" alt="" className=' rounded-md w-full' />
                    <div className=' flex gap-2 mt-3'>
                        <p className=' bold text-2xl'>01</p>
                        <div className='  flex gap-2'>
                            <span className=' w-1 h-full bg-[#6A38C2]'></span>
                            <div>
                            <h2 className=' font-bold'>Job Recommedations</h2>
                            <p className=' text-sm mt-1'>Set yout job preferences and get countless of your best fit job recommedation.</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Offer
