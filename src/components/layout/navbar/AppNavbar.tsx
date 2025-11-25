import React from 'react'
import { LuBell, LuMessageCircleQuestion } from 'react-icons/lu'

const AppNavbar = () => {
    return (
        <div className='w-full ps-64 fixed top-0 left-0'>
            <nav className='w-full h-16 px-6 bg-white drop-shadow-md flex items-center justify-between'>
                <div className='flex flex-col'>
                    <span className='font-semibold text-neutral-900'>Welcome back, John</span>
                    <span className='text-xs text-neutral-700'>Tuesday, 25 November 2025</span>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='w-8 h-8 rounded-lg bg-teal-50 hover:bg-teal-100 cursor-pointer hover:text-neutral-700 flex items-center justify-center text-neutral-500 transition-colors duration-300 ease-in-out'>
                        <LuMessageCircleQuestion size={16} />
                    </div>
                    <div className='w-8 h-8 rounded-lg bg-teal-50 hover:bg-teal-100 cursor-pointer hover:text-neutral-700 flex items-center justify-center text-neutral-500 transition-colors duration-300 ease-in-out'>
                        <LuBell size={16} />
                    </div>
                    <div className='w-10 h-10 rounded-full bg-green-500 drop-shadow-2xl cursor-pointer'>
                        <img src='https://i.pravatar.cc/300' className='w-full h-full rounded-full object-cover object-center' alt='avatar' />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default AppNavbar