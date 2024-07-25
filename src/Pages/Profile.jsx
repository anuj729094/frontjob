import Github from '@/components/Github'
import PersonalInfo from '@/components/PersonalInfo'
import Projects from '@/components/Projects'
import Skill from '@/components/Skill'
import Summary from '@/components/Summary'
import React, { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'

const Profile = () => {
    const dispatch = useDispatch()
    const { iserror } = useSelector((state) => state.user)
    useEffect(() => {
        if (iserror.status) {
            if (typeof (iserror.msg) !== "object") {
                toast.error(iserror.msg)
                dispatch({
                    type: "clearerror"
                })
            }
            else {
                setTimeout(() => {
                    dispatch({
                        type: "clearerror"
                    })
                }, 4000);
            }
        }

    }, [iserror])
    return (
        <div className=' xl:w-[75rem] md:flex md:flex-col items-center px-3'>
            <div className="  md:w-[40rem]">
                <PersonalInfo />
                <Summary />
                <Projects />
                <Skill />
                <Github />
            </div>
            <Toaster />
        </div>
    )
}

export default Profile
