import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userauth/user";
import { jobReducer } from "./jobs/jobsreducer";

export const store  = configureStore({
    reducer:{
        user:userReducer,
        job:jobReducer
    }
})