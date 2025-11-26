import React from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps {
    children?: React.ReactNode
    className?: string
}
const Card: React.FC<IProps> = ({
    children,
    className = ''
}) => {
    return (
        <div className={twMerge(
            'w-full bg-white rounded-lg drop-shadow-md p-6',
            className
        )}>
            {children}
        </div>
    )
}

export default Card