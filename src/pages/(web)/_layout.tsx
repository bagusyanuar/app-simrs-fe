import { Outlet } from 'react-router-dom'
import { AppSidebar } from '@/components/layout/sidebar'
import { AppNavbar } from '@/components/layout/navbar'
import { AppContent } from '@/components/layout/content'

export default function AppLayout() {
    return (
        <main className='w-full h-dvh bg-gray-100'>
            <AppSidebar />
            <AppNavbar />
            <AppContent>
                <Outlet />
            </AppContent>
        </main>
    )
}