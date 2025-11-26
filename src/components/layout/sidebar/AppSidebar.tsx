import React from 'react'
import SidebarBrand from './SidebarBrand'
import { SidebarItem, SidebarLabel, SidebarTree } from '@/components/ui/sidebar'
import { LuLayoutDashboard, LuFolderArchive } from 'react-icons/lu'
import { GrGroup } from 'react-icons/gr'
import { ROUTE, MASTER_ROUTE_PATHS } from '@/const/route'
import { useLocation } from 'react-router-dom'

const AppSidebar = () => {
    const { pathname } = useLocation()

    return (
        <aside className='w-64 h-dvh fixed z-50'>
            <div className='w-full h-full bg-teal-600 flex flex-col p-3 border-r border-teal-400 drop-shadow-md drop-shadow-teal-400'>
                <SidebarBrand
                    className='mb-3'
                />
                <div className='w-full flex flex-col gap-1.5'>
                    <SidebarItem
                        text='Dashboard'
                        icon={<LuLayoutDashboard size={16} />}
                    />
                    <SidebarLabel text='Menu' />
                    <SidebarTree
                        isActive={MASTER_ROUTE_PATHS.some(path => pathname.startsWith(path))}
                        icon={<LuFolderArchive size={16} />}
                        text='Master Data'
                        items={[
                            {
                                to: ROUTE.jobDepartment,
                                text: 'Unit Kerja',
                                isActive: pathname === ROUTE.jobDepartment
                            },
                            {
                                to: '#',
                                text: 'Jabatan'
                            },
                            {
                                to: ROUTE.installation,
                                text: 'Instalasi',
                                isActive: pathname === ROUTE.installation
                            },
                            {
                                to: '#',
                                text: 'Unit'
                            },
                            {
                                to: '#',
                                text: 'Kode EHR'
                            },
                        ]}
                    />
                    <SidebarTree
                        icon={<GrGroup size={16} />}
                        text='Staff'
                        items={[
                            {
                                to: '#',
                                text: 'Medis'
                            },
                            {
                                to: '#',
                                text: 'Non Medis'
                            },
                        ]}
                    />
                </div>
            </div>
        </aside>
    )
}

export default AppSidebar