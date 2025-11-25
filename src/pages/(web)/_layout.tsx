import { Outlet } from 'react-router-dom'
import { AppSidebar } from '@/components/layout/sidebar'

export default function AppLayout() {
    return (
        <main className='w-full h-dvh bg-gray-100'>
            <AppSidebar />
            <section className='ps-64'>
                <Outlet />
            </section>
        </main>
    )
}