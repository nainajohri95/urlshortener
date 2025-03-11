import Header from '@/components/header';
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4">
        <Outlet />
      </main>

      <footer className="text-center p-4 bg-gray-800 mt-10 text-white">
        Made with 💖 by Naina Johri
      </footer>
    </div>
  );
};

export default AppLayout;
