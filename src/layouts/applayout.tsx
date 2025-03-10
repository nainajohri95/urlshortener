import Header from '@/components/header';
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <main className='min-h-screen container'>
        <Header/>
        <Outlet/>
      </main>

      <div className='text-center p-10 bg-gray-800 mt-10'> 
        Made with 💖 by Naina Johri
      </div>
    </div>
  )
};

export default AppLayout