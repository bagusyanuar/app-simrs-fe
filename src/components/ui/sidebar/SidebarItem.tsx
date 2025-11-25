import React from 'react'
import { twMerge } from 'tailwind-merge'
import { Link } from 'react-router'
import { LuCircle } from 'react-icons/lu'

interface IProps {
    to?: string
    text?: string
    icon?: React.ReactNode
    isActive?: boolean
    className?: string
}

const SidebarItem: React.FC<IProps> = ({
    icon,
    to = '#',
    text = 'Menu',
    isActive = false,
    className = ''
}) => {
    return (
        <div className='w-full'>
            <Link to={to} className={twMerge(
                'group w-full flex items-center gap-2 text-sm px-3 py-3 rounded-md font-light text-white/80 hover:text-white hover:bg-white/20 focus:ring-0 focus:outline-none transition-all duration-300 ease-in-out',
                isActive ? '' : '',
                className
            )}>
                {icon ?? <LuCircle size={16} />}
                <span>{text}</span>
            </Link>
        </div>
    )
}

export default SidebarItem