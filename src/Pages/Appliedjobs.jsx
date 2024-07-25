import { getappliedjobs } from '@/redux/jobs/action';
import React, { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Appliedjobs = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { isloading, jobs, iserror } = useSelector((state) => state.job);
    useEffect(() => {
        dispatch(getappliedjobs());
    }, []);

    useEffect(() => {
        if (iserror.status) {
            toast.error(iserror.msg);
            dispatch({
                type: 'clearerror',
            });
        }
    }, [iserror, dispatch]);

    return (
        <div className="xl:w-[75rem] px-3">
            {isloading ? (
                <h1>Loading...</h1>
            ) : !iserror.status && jobs.length ? (
                <div>
                    <h1 className="text-center text-2xl font-semibold my-4">My Applications</h1>
                    <div className="w-full overflow-auto border-[1px] border-solid rounded-lg mb-5">
                        <table className="w-full whitespace-nowrap text-center">
                            <thead className="bg-[#FBFCFC] h-16 text-sm text-[#8893A4]">
                                <tr>
                                    <th>COMPANY</th>
                                    <th>PROFILE</th>
                                    <th>APPLIED ON</th>
                                    <th>Jobtype</th>
                                    <th>Stipend</th>
                                    <th>APPLICATION STATUS</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {jobs.map((item, index) => {
                                    // Check for undefined properties
                                    const { jobid, createdAt, Status } = item;
                                    if (!jobid || !createdAt || !jobid.companyid) {
                                        // console.error('Missing properties in item:', item);
                                        return null;
                                    }
                                    const { companyid, role, jobtype, salary } = jobid;
                                    if (!companyid) {
                                        // console.error('Missing companyid in jobid:', jobid);
                                        return null;
                                    }
                                    const { img, companyname } = companyid;

                                    return (
                                        <tr key={index}>
                                            <td className="flex items-center justify-center gap-2 font-semibold">
                                                <img src={img} alt="" className="w-8 h-8 rounded-full" />
                                                {companyname}
                                            </td>
                                            <td>
                                                <p className="flex justify-center items-center gap-4">
                                                    {role}
                                                   <button onClick={() => navigate("/job-info", { state: item })} ><FiEdit className="text-blue-600"/></button> 
                                                </p>
                                            </td>
                                            <td>{createdAt.split('T')[0]}</td>
                                            <td>{jobtype}</td>
                                            <td>{salary}</td>
                                            <td>
                                                <span className="bg-[#EAFCFF] rounded-3xl py-2 px-4 text-[#2582CC] font-semibold text-sm">
                                                    {Status}
                                                </span>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <p>No jobs found.</p>
            )}
            <Toaster />
        </div>
    );
};

export default Appliedjobs;