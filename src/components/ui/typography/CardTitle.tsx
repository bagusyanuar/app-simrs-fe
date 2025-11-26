import React from 'react'
import { twMerge } from 'tailwind-merge'
import type { IconType } from 'react-icons'

interface IProps {
    title?: string
    className?: string
    icon?: IconType
}
const CardTitle: React.FC<IProps> = ({
    icon: Icon,
    title = 'Title',
    className = ''
}) => {
    return (
        <div className={twMerge(
            'flex items-center gap-2 text-neutral-700',
            className
        )}>
            {Icon && <Icon size={16} />}
            <span className='text-sm font-semibold'>{title}</span>
        </div>
    )
}

export default CardTitle