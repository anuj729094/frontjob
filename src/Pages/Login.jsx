import React, { useEffect, useState } from 'react'
import { ImSpinner8 } from 'react-icons/im';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

const Login = ({ func }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const[type , setType]=useState("password")
    const [userObj, setUserObj] = useState({
        email: '',
        password: ''
    });

    const postdata = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const response = await fetch(`https://jobportal-backend-five.vercel.app/login`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(userObj)
            });
            const res = await response.json();
            if (res.status) {
                localStorage.setItem("token", res.token);
                func(res.token)
                navigate("/")
            }
            else {
                throw new Error(res.error);
            }
        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        if (error) {
            toast.error(error);
            setError(null)
        }
    }, [error]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserObj((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };


    return (
        <div className='xl:w-[75rem] flex flex-col items-center my-5 md:my-10 px-3 w-full'>
            <div className='text-center'>
                <h2 className='font-bold text-2xl md:text-4xl tracking-wide leading-9'>Login to Continue</h2>
                <p className='text-sm text-[#636262] mt-3'>2,00,000+ companies hiring on Jobhunt</p>
            </div>
            <div className='mt-7 w-full listgrid flex flex-col gap-6 border-[1px] border-solid rounded-xl md:w-[30rem] py-10 px-5'>
                <form className='flex flex-col gap-6' onSubmit={postdata}>
                    <div className='flex flex-col relative'>
                        <label htmlFor='email' className='text-sm'>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            required
                            value={userObj.email}
                            onChange={handleChange}
                            className='focus:outline-[#6A38C2] outline-none w-full py-2 mt-2 pl-2 border-[1px] border-solid rounded'
                        />
                        <MdEmail className=' absolute right-2 top-10' />
                    </div>
                    <div className='flex flex-col relative'>
                        <label htmlFor='password' className='text-sm'>Password</label>
                        <input
                            type={type}
                            id='password'
                            name='password'
                            required
                            value={userObj.password}
                            onChange={handleChange}
                            className='focus:outline-[#6A38C2] outline-none w-full py-2 mt-2 pl-2 border-[1px] border-solid rounded'
                        />
                     { !userObj.password ? <button type='button' className='absolute right-2 top-10'>
                            <RiLockPasswordFill />
                        </button> : type==="password" ? <button type='button' className='absolute right-2 top-10' onClick={()=>setType("text")}>
                            <IoEyeOutline />
                        </button> : <button type='button' className='absolute right-2 top-10' onClick={()=>setType("password")}>
                            <IoEyeOffOutline />
                        </button>}
                    </div>
                    <button type='submit' className='flex justify-center bg-[#6A38C2] hover:bg-[#9867ed] text-white rounded-md py-3'>
                        {loading ? <ImSpinner8 className='spinner text-xl animate-spin' /> : <p>Login</p>}
                    </button>
                </form>
                <p className='text-sm flex items-center justify-center gap-1'>
                    New User? <Link to="/register-user" className='font-semibold text-[#6A38C2]'>Sign Up</Link>
                </p>
                <div className=' text-sm my-5'>
                    <p className=' underline font-medium'>Demo User</p>
                    <p className=' mt-2'>Email : demouser567@gmail.com</p>
                    <p>Password : demouser</p>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Login;