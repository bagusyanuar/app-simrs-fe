import React from 'react'
import SidebarBrand from './SidebarBrand'
import { SidebarItem, SidebarLabel, SidebarTree } from '@/components/ui/sidebar'
import { LuLayoutDashboard, LuFolderArchive } from 'react-icons/lu'
import { GrGroup } from 'react-icons/gr'

const AppSidebar = () => {
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
                        icon={<LuFolderArchive size={16} />}
                        text='Master Data'
                        items={[
                            {
                                to: '#',
                                text: 'Departemen'
                            },
                            {
                                to: '#',
                                text: 'Jabatan'
                            },
                            {
                                to: '#',
                                text: 'Instalasi'
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