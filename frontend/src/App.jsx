import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/doctors'
import About from './pages/about'
import Login from './pages/login'
import MyAppointment from './pages/myappointment'
import Appointment from './pages/Appointment'
import MyProfile from './pages/MyProfile'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import Contact from './pages/Contact'


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/doctors' element={<Doctors/>} />
      <Route path='/doctors/:speciality' element={<Doctors/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/appointment/:docId' element={<Appointment/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/my-appointments' element={<MyAppointment/>} />
      <Route path='/my-profile' element={<MyProfile/>} />
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer />

    </div>
  )
}

export default App