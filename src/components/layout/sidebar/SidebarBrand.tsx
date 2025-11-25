import React from 'react'
import { ImageBrand } from '@/components/ui/image'
import { twMerge } from 'tailwind-merge'

interface IProps {
    className?: string
}

const SidebarBrand: React.FC<IProps> = ({
    className = ''
}) => {
    return (
        <div className={twMerge(
            'w-full flex items-center gap-1.5 px-3',
            className
        )}>
            <ImageBrand className='h-12' />
            <div className='flex flex-col'>
                <span className='text-teal-500 text-sm font-semibold leading-none'>Aplikasi SIMRS</span>
                <span className='text-teal-500 text-xs'>RSUD Solo</span>
            </div>
        </div>
    )
}

export default SidebarBrand