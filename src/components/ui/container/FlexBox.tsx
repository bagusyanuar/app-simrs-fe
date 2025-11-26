import React from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps {
    children?: React.ReactNode
    className?: string
}
const FlexBox: React.FC<IProps> = ({
    children,
    className = ''
}) => {
    return (
        <div className={twMerge(
            'flex items-center justify-start',
            className
        )}>
            {children}
        </div>
    )
}

export default FlexBox