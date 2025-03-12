import React from 'react'
import banner from '../assets/banner.png'

const Landing = () => {
  return (
    <div>
      <h2 className='text-center justify-center text-bold text-3xl'>The only URL Shortner <br /> you&rsquo;ll ever need! 👇</h2>
      <img src={banner} alt="" />
    </div>
  )
}

export default Landing