import React, { useEffect, useState } from 'react'
import { RiMenu3Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { IoCloseSharp } from "react-icons/io5";

const Nav = () => {
   const location = useLocation()
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { userdata, isloadinguser } = useSelector((state) => state.user)
   const [nav, setNav] = useState(true)
   const [show, setShow] = useState(false)
   useEffect(() => {
      window.innerWidth < 768 && setNav(false)
   }, [])
   return (
      <div className='xl:flex xl:justify-center sticky top-0 z-10 bg-white w-full '>
         <div className='relative xl:w-[75rem] flex items-center justify-between px-3 py-4  '>
            <div>
               <h1 className=' text-2xl sm:text-3xl italic font-semibold'><span className=' text-[#6C3BC3]'>Job</span><span className=' text-[#FA4F09]'>hunt</span></h1>
            </div>
            {nav && <div className="tabs  max-h-[80vh]  lg:h-auto bg-white rounded-md lg:bg-transparent absolute right-4 top-16 py-3 px-3 lg:p-0  lg:w-auto lg:static  lg:flex-row lg:flex items-center gap-5">
               <ul className='flex flex-col items-start lg:items-center lg:flex-row gap-6 lg:gap-10 text-sm'>
                  <li className=' relative'><Link to="/">Home</Link>
                {location.pathname ==="/" && <div className=' absolute bg-[#6C3BC3] h-1 w-full top-5'></div> }
                  </li>
                  {/* <li>About</li> */}
               {  userdata && <li className=' relative'><Link to="/browse-jobs">Jobs</Link>
                { location.pathname === "/browse-jobs" && <div className=' absolute bg-[#6C3BC3] h-1 w-full top-5'></div> }
                  </li> }
                { userdata && <li className=' relative'><Link to="/applied-jobs">My Applications</Link>
                {location.pathname ==="/applied-jobs" && <div className=' absolute bg-[#6C3BC3] h-1 w-full top-5'></div> }
                  </li> }
               </ul>

               {!isloadinguser && !userdata ?
                  <ul className=' flex  items-center gap-3 mt-4 lg:mt-0'>
                     <Link to='/login'><li><button className=' border-[1px] border-solid tracking-wider border-black rounded-md font-semibold text-xs px-5 py-3'>Login</button></li></Link>
                     <Link to='/register-user'><li><button className=' bg-[#6A38C2] text-white tracking-wider rounded-md font-semibold  text-xs px-5 py-[0.79rem]'>Register</button></li></Link>
                     <a href="https://talent-hunt-frontend.vercel.app/" target='_blank' className=' underline font-medium tracking-wide'>Hire Talent</a>
                   
                  </ul> :
                  <div className=' relative user-data flex  flex-col mt-4 lg:mt-0  items-start gap-1'>
                     <div className=' flex items-center gap-1 cursor-pointer' onClick={() => show ? setShow(false) : setShow(true)}>
                        <p className=' border-[1px] border-black rounded-full w-8 h-8 flex items-center justify-center'>{userdata.fullname[0].toUpperCase()}</p>
                        <IoIosArrowDown style={show ? { rotate: "0deg", transition: "0.5s" } : { rotate: "-85deg", transition: "0.5s" }} />
                     </div>
                     {show && <div className='menuitem lg:absolute bg-transparent lg:bg-white top-12 right-2 rounded-lg'>
                        <div className='py-5 pl-4 pr-6  border-b-[1px] border-solid'>
                           <h2 className=' font-medium'>{userdata.fullname} {userdata.lastname}</h2>
                           <p className=' text-sm'>{userdata.email}</p>
                        </div>
                        <ul className=' text-sm flex flex-col gap-4 pl-4 my-5'>
                           <Link to='/applied-jobs'><li>My Applications</li></Link>
                           <li>My Bookmarks</li>
                           <Link to='/profile'><li>Profile</li></Link>
                           <li>
                              <button onClick={() => {
                                 localStorage.removeItem("token")
                                 dispatch({
                                    type: "clearuserdata"
                                 })
                                 navigate("/")
                              }}>Logout</button>
                           </li>
                        </ul>
                     </div>}
                  </div>}
            </div>}
            <button className='block lg:hidden cursor-pointer' onClick={() => nav ? setNav(false) : setNav(true)}>
               {
                  nav ? <IoCloseSharp className='text-2xl' /> :
                     <RiMenu3Fill className=' text-2xl' />

               }
            </button>
         </div>
         <Toaster />
      </div>
   )

}

export default Nav
