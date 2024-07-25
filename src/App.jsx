import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Appliedjobs from './Pages/Appliedjobs'
import Browsejobs from './Pages/Browsejobs'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import Sign from './Pages/Sign'
import Footer from './components/Footer'
import Nav from './components/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { getuser } from './redux/userauth/action'
import { useEffect, useState } from 'react'
import Protected from './components/Protected'
import Job from './Pages/Job'
import toast, { Toaster } from 'react-hot-toast'

function App() {
  const[token , setToken]=useState(null)
  const { isloadinguser,iserroruser } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getuser(token || localStorage.getItem("token")))
  }, [token])
  useEffect(() => {
    if (iserroruser.status) {
      iserroruser.msg === "Session expired" && toast.error(iserroruser.msg)
      dispatch({
        type: "clearerroruser"
      })
    }
  }, [iserroruser])


  const Routing = () => {
    // const location = useLocation();

    return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register-user' element={<Sign />} />
        <Route path='/login' element={<Login func={setToken}/>} />
        <Route path='/browse-jobs'  element={<Browsejobs />} />
        <Route element={<Protected />}>
          <Route path='/applied-jobs' element={<Appliedjobs />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/job-info' element={<Job />} />
        </Route>
      </Routes>
    );
  };
  if (isloadinguser) {
    return <h1>loading....</h1>
  }
  else {
    return (
      <div className=' xl:flex xl:flex-col  xl:items-center'>
        <Router>
          <Nav />
          <Routing />
          <Footer />
        </Router>
        <Toaster />
      </div>
    )
  }
}

export default App
