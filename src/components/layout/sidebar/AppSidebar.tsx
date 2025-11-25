import React from 'react'
import SidebarBrand from './SidebarBrand'

const AppSidebar = () => {
    return (
        <aside className='w-64 h-dvh fixed z-50'>
            <div className='w-full h-full bg-white flex flex-col py-3 border border-gray-400 drop-shadow-md'>
                <SidebarBrand className='mb-3' />
                <div className='w-full px-3'>
                    <div className='w-full h-16 bg-teal-500 rounded-lg'></div>
                </div>
            </div>
        </aside>
    )
}

export default AppSidebar