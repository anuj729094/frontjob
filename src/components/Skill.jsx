import { project, updateskills } from '@/redux/userauth/action'
import React, { useEffect, useState } from 'react'
import { FiEdit2 } from 'react-icons/fi'
import { ImSpinner8 } from 'react-icons/im'
import { IoCloseSharp } from 'react-icons/io5'
import { MdClose, MdDeleteOutline } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'

const Skill = () => {
    const arr = [
        {
            id: 1,
            skill: "React JS"
        },
        {
            id: 2,
            skill: "Node JS"
        },
        {
            id: 3,
            skill: "Web Development"
        },
        {
            id: 4,
            skill: "Android Development"
        },
        {
            id: 5,
            skill: "MERN"
        },
        {
            id: 6,
            skill: "Angular JS"
        },
        {
            id: 7,
            skill: "Vue JS"
        }
    ]
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [skillArr, setSkillArr] = useState([])
    const [listArr, setListArr] = useState([])
    const [action, setAction] = useState("")
    const { isloading, userdata ,msg } = useSelector((state) => state.user)
    useEffect(() => {
        if (name) {
            var timer = setTimeout(() => {
                let pattern = RegExp(`${name}`, 'gi')
                setListArr(arr.filter((list) => list.skill.match(pattern)))
            }, 2000);
        }
        else {
            setListArr([])
        }
        return () => clearTimeout(timer)
    }, [name])

    const postskill = (e)=>{
        e.preventDefault()
        dispatch(updateskills([{id:userdata._id} , {skills:[...userdata.skills , ...skillArr.map((skillitem)=>skillitem.skill)]}]))
    }
    useEffect(() => {
        if (msg === "data updated successfully") {
            setAction("")
            setSkillArr([])
            setName("")
        }
    }, [msg])
    return (
        <div className="border-b-[2px] border-solid  py-4  ">
            <h1 className=' text-sm font-bold md:text-xl text-[#777777]'>SKILLS</h1>
            <ul className=' flex flex-wrap items-center gap-3'>
                {
                    userdata.skills.map((skillslist, index) =>
                        <li key={index} className=' bg-gray-300 rounded-md py-2 px-3 text-sm flex items-center gap-2 font-medium'>{skillslist}
                            <button onClick={()=> dispatch(updateskills([{id:userdata._id} , {skills:userdata.skills.filter((skills)=>skills!==skillslist)}]))}><MdDeleteOutline className=' text-xl' /></button>
                        </li>
                    )
                }
            </ul>
            <button onClick={()=>setAction(true)} className=' text-base text-blue-500 font-medium mt-4' >+ Add Skill</button>
            {action && <div className=' fixed bg-[#0000004a] pt-10 lg:mt-0 px-3 md:px-0 flex lg:items-center justify-center w-full h-full overflow-auto top-0 z-50 left-0'>
                <div className=' bg-white  h-fit sm:px-10  w-full  sm:rounded-xl  py-4 px-3 flex flex-col items-center sm:w-[40rem]'>
                    <div className=' flex justify-end w-full text-2xl mt-3'>
                        <button onClick={()=>{
                             setAction("")
                             setSkillArr([])
                             setName("")
                        }}> <IoCloseSharp /></button>
                    </div>
                    <h1 className=' font-semibold text-[#6A6A6A] text-lg my-2'>Skill</h1>
                    <form className='w-full mt-4 flex flex-col items-end  gap-7' onSubmit={postskill}>
                        <div className='relative flex flex-col  w-full'>
                            <div className=' mt-2 outline-none focus:outline-[#6A38C2] bg-transparent w-full p-3 rounded-md  border-[1px] border-solid'>
                                <ul className=' inline-flex items-center gap-3 flex-wrap '>
                                    {
                                        skillArr.map((items ,index) =>
                                            <li key={index} className=' flex items-center gap-1 bg-[#6A38C2] text-white rounded-md p-2'>{items.skill}<button onClick={()=>setSkillArr(skillArr.filter((item)=>item.id!==items.id))}><MdClose /></button></li>
                                        )
                                    }
                                    <li>
                                        <input id='skill'  onChange={(e) => setName(e.target.value)} className=' block w-full outline-none  h-full   ' placeholder='e.g. Web Development' />
                                    </li>
                                </ul>

                            </div>
                            <div className=' max-h-[10rem] overflow-auto mt-2 w-full bg-white'>
                                <ul>
                                    {
                                        listArr.filter(function (item) {
                                            if (!skillArr.find((skillset) => skillset.skill.toLowerCase() === item.skill.toLowerCase()) && !userdata.skills.find((skillsets) => skillsets.toLowerCase() === item.skill.toLowerCase())) {
                                                return item
                                            }
                                        }).map((skills ,index) =>
                                            <li key={index} className=' cursor-pointer hover:bg-[#aa91d6] py-2 pl-2 font-light rounded-md]' onClick={() => setSkillArr([...skillArr, skills])}>{skills.skill}</li>

                                        )
                                    }
                                </ul>
                            </div>

                        </div>
                        <button type='submit' className=' bg-[#6A38C2] rounded-md py-3 px-7 font-medium text-white'>
                            {
                                isloading ? <ImSpinner8 /> : "Add  Skill" 
                            }
                        </button>
                    </form>
                </div>
            </div >}
        </div >
    )
}

export default Skill
