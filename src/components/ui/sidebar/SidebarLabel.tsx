import React from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps {
    text?: string
    className?: string
}

const SidebarLabel: React.FC<IProps> = ({
    text = 'Label',
    className = ''
}) => {
    return (
        <div className={twMerge(
            'w-full text-xs px-3 text-white/80 my-1',
            className
        )}>
            {text}
        </div>
    )
}

export default SidebarLabel