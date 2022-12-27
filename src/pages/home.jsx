import React from 'react'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import Info from '../components/Info'
import Navbar from '../components/Navbar'
const home = () => {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Info/>
      <Footer/>
    </div>
  )
}

export default home
