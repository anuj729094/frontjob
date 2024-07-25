import { createReducer } from "@reduxjs/toolkit";

const initialstates = {
   jobs: [],
   isloading: true,
   isapplyloading:false,
   user: false,
   iserror: {
      status: false,
      msg: null
   },
 
}

export const jobReducer = createReducer(initialstates, (builder) => {
   builder.addCase("getjobspending", (state) => {
      state.isloading = true
   })
   builder.addCase("getjobssuccess", (state, action) => {
      state.isloading = false
      state.jobs = action.payload.filter((item) => item.companyid)
   })
   builder.addCase("getjobserror", (state, action) => {
      state.isloading = false
      state.iserror = action.payload
   })
   builder.addCase("checkuserjobexistpending", (state) => {
      state.isloading = true
   })
   builder.addCase("checkuserjobexistsuccess", (state, action) => {
      state.isloading = false
      state.user = action.payload
   })
   builder.addCase("checkuserjobexistserror", (state, action) => {
      state.isloading = false
      state.iserror = action.payload
   })
   builder.addCase("applyjobpending", (state) => {
      state.isapplyloading = true
   })
   builder.addCase("applyjobsuccess", (state, action) => {
      state.isapplyloading = false
      state.user = action.payload
   })
   builder.addCase("applyjobserror", (state, action) => {
      state.isloading = false
      state.iserror = action.payload
   })
   builder.addCase("appliedjobspending", (state) => {
      state.isloading = true
   })
   builder.addCase("appliedjobsuccess", (state, action) => {
      state.isloading = false
      state.jobs = action.payload
   })
   builder.addCase("appliedjoberror", (state, action) => {
      state.isloading = false
      state.iserror = action.payload
   })
   builder.addCase("clearerror", (state) => {
      state.iserror = {
         status:false,
         msg:null
      }
   })
})