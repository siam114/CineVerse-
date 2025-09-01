import React from 'react'
import logo from '../assets/Images/logo.png'


const Header = () => {
  return (
    <div className=''>
      <img src={logo} alt="logo" className='w-[80px] md:w-[150px] object-cover' />
    </div>
  )
}

export default Header
