import axios from "axios";

export const getjobs = (role, location, jobarr, work,range) => async (dispatch) => {
    try {
        dispatch({
            type: "getjobspending"
        })
        const data = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/getjobs`, {
            method: "GET",
            params: {
                role: role,
                jobtype: jobarr,
                workstyle: work,
                location: location,
                salary:range
            },
            headers: {
                "Content-type": "application/json",
                Accept: "application/json"
            }
        })
        if (data.data.status) {
            dispatch({
                type: "getjobssuccess",
                payload: data.data.jobs
            })
        }
        else {
            throw new Error(data.data.error)
        }
    } catch (error) {
        dispatch({
            type: "getjobserror",
            payload: {
                status: true,
                msg: error.message
            }
        })
    }
}

export const checkuserjobexists = (jobid) => async (dispatch) => {
    try {
        dispatch({
            type: "checkuserjobexistpending"
        })
        const data = await fetch(`${import.meta.env.VITE_BACKEND_URL}/check/${jobid}`, {
            method: "GET",
            headers: {
                token: localStorage.getItem("token"),
                "Content-type": 'application/json',
                Accept: "application/json"
            }
        })
        const res = await data.json()
        if (res.status) {
            dispatch({
                type: "checkuserjobexistsuccess",
                payload: res.user
            })
        }
        else {
            throw new Error(res.error)
        }
    } catch (error) {
        dispatch({
            type: "checkuserjobexistserror",
            payload: {
                status: true,
                msg: error.message
            }
        })
    }
}


export const applyjob = (jobid) => async (dispatch) => {
    try {
        dispatch({
            type: "applyjobpending"
        })
        const data = await fetch(`${import.meta.env.VITE_BACKEND_URL}/apply`, {
            method: "POST",
            headers: {
                token: localStorage.getItem("token"),
                "Content-type": 'application/json',
            },
            body: JSON.stringify({ id: jobid })
        })
        const res = await data.json()
        if (res.status) {
            dispatch({
                type: "applyjobsuccess",
                payload: res.user
            })
        }
        else {
            throw new Error(res.error)
        }
    } catch (error) {
        dispatch({
            type: "applyjobserror",
            payload: {
                status: true,
                msg: error.message
            }
        })
    }
}


export const getappliedjobs = () => async (dispatch) => {
    try {
        dispatch({
            type:"appliedjobspending"
        })
        const data = await fetch(`${import.meta.env.VITE_BACKEND_URL}/appliedjobs`, {
            method: "GET",
            headers: {
                token:localStorage.getItem("token"),
                "Content-type": "application/json",
                Accept: "application/json"
            }
        })
        const res = await data.json()
        if(res.status){
            dispatch({
                type:"appliedjobsuccess",
                payload:res.appliedjobs
            })
        }
        else{
            throw new Error(res.error)
        }
    } catch (error) {
        dispatch({
            type:"appliedjoberror",
            payload:{
                status:true,
                msg:error.message
            }
        })
    }
}