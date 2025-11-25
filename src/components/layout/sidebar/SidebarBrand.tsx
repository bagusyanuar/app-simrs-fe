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
            'w-full flex items-center gap-1.5 px-3 py-2.5',
            className
        )}>
            <ImageBrand className='h-12' />
            <div className='flex flex-col'>
                <span className='text-lime-300 text-sm font-semibold'>
                    <span className='text-white'>Aplikasi</span> SIMRS
                </span>
                <span className='text-lime-300 text-xs font-semibold'>{`${import.meta.env.VITE_RS_NAME || ""}`}</span>
            </div>
        </div>
    )
}

export default SidebarBrand